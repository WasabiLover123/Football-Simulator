// ===== Football Simulator - 核心匹配逻辑 =====

// 全局状态
let selectedPosition = '';
let selectedStyles = [];
let playerFilter = 'all'; // 'all' | 'current' | 'legend'

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', () => {
  initPositionButtons();
  initStyleButtons();
  initFilterButtons();
  initSearchInput();
});

// ===== 搜索框实时输入监听 =====
function initSearchInput() {
  const input = document.getElementById('search-input');
  if (!input) return;
  input.addEventListener('input', () => {
    const keyword = input.value.trim();
    const resultsDiv = document.getElementById('search-results');
    if (!keyword) {
      resultsDiv.innerHTML = '';
      return;
    }
    const results = players.filter(p => p.name.includes(keyword));
    if (results.length === 0) {
      resultsDiv.innerHTML = `<div class="search-hint">未找到"${keyword}"，试试其他名字</div>`;
      return;
    }
    resultsDiv.innerHTML = results.slice(0, 8).map(p => `
      <div class="search-result-item" onclick="showSearchedPlayer(${p.id})">
        <span class="search-ovr">${p.ovr}</span>
        <span class="search-name">${highlightMatch(p.name, keyword)}</span>
        <span class="search-info">${p.team} · ${p.posCn}${p.legend ? ' · 传奇' : ''}</span>
      </div>
    `).join('');
  });
}

// ===== 筛选按钮 =====
function initFilterButtons() {
  const btns = document.querySelectorAll('#filter-btns .filter-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      playerFilter = btn.dataset.filter;
    });
  });
}

// ===== 位置按钮 =====
function initPositionButtons() {
  const btns = document.querySelectorAll('#position-btns .pos-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      if (selectedPosition === btn.dataset.pos) {
        selectedPosition = '';
      } else {
        btn.classList.add('active');
        selectedPosition = btn.dataset.pos;
      }
    });
  });
}

// ===== 风格按钮 =====
function initStyleButtons() {
  const btns = document.querySelectorAll('#style-btns .style-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const style = btn.dataset.style;
      if (selectedStyles.includes(style)) {
        selectedStyles = selectedStyles.filter(s => s !== style);
        btn.classList.remove('active');
      } else {
        selectedStyles.push(style);
        btn.classList.add('active');
      }
    });
  });
}

// ===== 主匹配函数 =====
function startMatch() {
  const height = parseInt(document.getElementById('input-height').value) || 0;
  const weight = parseInt(document.getElementById('input-weight').value) || 0;
  const age = parseInt(document.getElementById('input-age').value) || 0;
  const foot = document.getElementById('input-foot').value;

  if (!height && !weight && !age && !foot && !selectedPosition && selectedStyles.length === 0) {
    shakeBtn();
    return;
  }

  // 按筛选范围过滤球员
  let pool = players;
  if (playerFilter === 'current') pool = players.filter(p => !p.legend);
  else if (playerFilter === 'legend') pool = players.filter(p => p.legend);

  // 计算每个球员的匹配分数
  const results = pool.map(player => {
    const score = calculateMatchScore(player, { height, weight, age, foot, selectedPosition, selectedStyles });
    return { ...player, matchScore: score };
  });

  // 按分数排序
  results.sort((a, b) => b.matchScore - a.matchScore);

  // 展示结果
  showResults(results.slice(0, 4));
}

// ===== 匹配分数计算 =====
function calculateMatchScore(player, input) {
  let score = 0;
  let maxScore = 0;

  // 1. 身高匹配 (权重25)
  if (input.height) {
    const diff = Math.abs(player.h - input.height);
    maxScore += 25;
    if (diff <= 2) score += 25;
    else if (diff <= 5) score += 18;
    else if (diff <= 10) score += 10;
    else if (diff <= 15) score += 4;
  }

  // 2. 体重匹配 (权重20)
  if (input.weight) {
    const diff = Math.abs(player.w - input.weight);
    maxScore += 20;
    if (diff <= 2) score += 20;
    else if (diff <= 5) score += 14;
    else if (diff <= 10) score += 8;
    else if (diff <= 15) score += 3;
  }

  // 3. 惯用脚匹配 (权重20)
  if (input.foot) {
    maxScore += 20;
    if (player.foot === input.foot) score += 20;
  }

  // 4. 年龄匹配 (权重15)
  if (input.age) {
    const diff = Math.abs(player.age - input.age);
    maxScore += 15;
    if (diff <= 1) score += 15;
    else if (diff <= 3) score += 10;
    else if (diff <= 6) score += 5;
    else if (diff <= 10) score += 2;
  }

  // 5. 位置匹配 (权重10)
  if (input.selectedPosition) {
    maxScore += 10;
    if (player.pos === input.selectedPosition) score += 10;
    // 同组位置也给分
    else if (isSamePositionGroup(player.pos, input.selectedPosition)) score += 5;
  }

  // 6. 风格标签匹配 (权重10)
  if (input.selectedStyles.length > 0) {
    maxScore += 10;
    const playerStyles = player.style.split('/');
    let styleMatches = 0;
    input.selectedStyles.forEach(s => {
      if (playerStyles.some(ps => ps.includes(s))) styleMatches++;
    });
    score += Math.min(styleMatches * 5, 10);
  }

  // 如果啥都没填，返回随机分数
  if (maxScore === 0) return Math.random() * 50 + 30;

  // 归一化到 0-100
  return Math.round((score / maxScore) * 100);
}

// ===== 位置群组判断 =====
function isSamePositionGroup(pos1, pos2) {
  const groups = {
    forward: ['ST', 'CF', 'LW', 'RW'],
    midfield: ['CAM', 'CM', 'CDM', 'LM', 'RM'],
    defense: ['CB', 'LB', 'RB', 'LWB', 'RWB'],
    keeper: ['GK']
  };
  for (const g in groups) {
    if (groups[g].includes(pos1) && groups[g].includes(pos2)) return true;
  }
  return false;
}

// ===== 展示结果 =====
function showResults(results) {
  const emptyState = document.getElementById('empty-state');
  const resultContent = document.getElementById('result-content');
  emptyState.style.display = 'none';
  resultContent.style.display = 'block';

  // 最佳匹配
  renderBestMatch(results[0]);

  // 其他推荐
  renderOtherMatches(results.slice(1));
}

// ===== 渲染最佳匹配卡片 =====
function renderBestMatch(player) {
  const container = document.getElementById('best-match-card');
  const p = player.p;
  const attrs = [
    { label: '速度', key: 'pace', value: p[0], color: 'var(--pace)' },
    { label: '射门', key: 'shooting', value: p[1], color: 'var(--shooting)' },
    { label: '传球', key: 'passing', value: p[2], color: 'var(--passing)' },
    { label: '盘带', key: 'dribbling', value: p[3], color: 'var(--dribbling)' },
    { label: '防守', key: 'defending', value: p[4], color: 'var(--defending)' },
    { label: '身体', key: 'physical', value: p[5], color: 'var(--physical)' },
  ];

  const matchPct = player.matchScore || 85;
  const reasons = generateReasons(player);

  container.innerHTML = `
    <div class="match-badge">匹配度 ${matchPct}%</div>
    ${player.legend ? '<div class="legend-ribbon">👑 传奇</div>' : ''}
    <div class="card-left">
      <div class="player-avatar">${getPlayerEmoji(player)}</div>
      <div class="player-name">
        <span class="name-cn">${player.name}</span>
        ${player.legend ? '<span class="legend-tag">传奇</span>' : ''}
        <span class="team">${player.team} · ${player.league}</span>
      </div>
      <div class="player-meta">
        <span>📏 ${player.h}cm</span>
        <span>⚖️ ${player.w}kg</span>
        <span>🦶 ${player.foot}</span>
      </div>
      <div class="overall-rating">${player.ovr}</div>
    </div>
    <div class="card-right">
      <div class="player-attrs">
        ${attrs.map(a => `
          <div class="attr-row attr-${a.key}">
            <span class="attr-label">${a.label}</span>
            <div class="attr-bar-bg">
              <div class="attr-bar-fill" style="width:${a.value}%; background:${a.color};"></div>
            </div>
            <span class="attr-value">${a.value}</span>
          </div>
        `).join('')}
      </div>
      <div class="match-reasons">
        <h4>🎯 匹配理由</h4>
        <ul>
          ${reasons.map(r => `<li>${r}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;
}

// ===== 渲染其他推荐卡片 =====
function renderOtherMatches(playerList) {
  const container = document.getElementById('other-cards');
  container.innerHTML = playerList.map(p => `
    <div class="other-card ${p.legend ? 'legend-card' : ''}" onclick="onOtherCardClick(${p.id})">
      <div class="ovr-small">${p.ovr}</div>
      ${p.legend ? '<div class="legend-badge-sm">👑</div>' : ''}
      <div class="player-avatar-small">${getPlayerEmoji(p)}</div>
      <div class="name-small">${p.name}${p.legend ? ' <span class="legend-label">传奇</span>' : ''}</div>
      <div class="team-small">${p.team} · ${p.posCn}</div>
      <div class="match-pct">匹配度 ${p.matchScore}%</div>
    </div>
  `).join('');
}

function onOtherCardClick(playerId) {
  const player = players.find(x => x.id === playerId);
  if (player) renderBestMatch(player);
}

// ===== 生成匹配理由 =====
function generateReasons(player) {
  const reasons = [];
  const height = parseInt(document.getElementById('input-height').value) || 0;
  const weight = parseInt(document.getElementById('input-weight').value) || 0;
  const age = parseInt(document.getElementById('input-age').value) || 0;
  const foot = document.getElementById('input-foot').value;

  if (height && Math.abs(player.h - height) <= 3) {
    reasons.push(`身高仅差${Math.abs(player.h - height)}cm（你${height}cm / ${player.name}${player.h}cm）`);
  }
  if (weight && Math.abs(player.w - weight) <= 3) {
    reasons.push(`体重非常接近（你${weight}kg / ${player.name}${player.w}kg）`);
  }
  if (foot && player.foot === foot) {
    reasons.push(`同为${foot}球员，踢球习惯相似`);
  }
  if (age && Math.abs(player.age - age) <= 2) {
    reasons.push(`年龄相仿（你${age}岁 / ${player.name}${player.age}岁）`);
  }
  if (selectedPosition && player.pos === selectedPosition) {
    reasons.push(`同样司职${player.posCn}，位置完美匹配`);
  }
  reasons.push(`综合评分 ${player.ovr}，属于顶尖水平`);
  reasons.push(`风格标签：${player.style.replace(/\//g, '、')}`);

  return reasons.slice(0, 4);
}

// ===== 球员Emoji头像 =====
function getPlayerEmoji(player) {
  if (player.pos === 'GK') return '🧤';
  if (['CB', 'LB', 'RB'].includes(player.pos)) return '🛡️';
  if (['ST', 'CF'].includes(player.pos)) return '⚽';
  return '🏃';
}

// ===== 按钮抖动动画 =====
function shakeBtn() {
  const btn = document.getElementById('match-btn');
  btn.style.animation = 'shake 0.4s';
  setTimeout(() => btn.style.animation = '', 400);
}

// ===== 球员数值查询 =====
function searchPlayer() {
  const keyword = document.getElementById('search-input').value.trim();
  const resultsDiv = document.getElementById('search-results');

  if (!keyword) {
    resultsDiv.innerHTML = '<div class="search-hint">请输入球员名字</div>';
    return;
  }

  // 模糊搜索：名字包含关键词
  const results = players.filter(p => p.name.includes(keyword));

  if (results.length === 0) {
    resultsDiv.innerHTML = `<div class="search-hint">未找到"${keyword}"，试试其他名字</div>`;
    return;
  }

  // 展示搜索结果列表
  resultsDiv.innerHTML = results.map(p => `
    <div class="search-result-item" onclick="showSearchedPlayer(${p.id})">
      <span class="search-ovr">${p.ovr}</span>
      <span class="search-name">${highlightMatch(p.name, keyword)}</span>
      <span class="search-info">${p.team} · ${p.posCn}${p.legend ? ' · 传奇' : ''}</span>
    </div>
  `).join('');
}

// 点击搜索结果，在结果区展示该球员详细数值
function showSearchedPlayer(playerId) {
  const player = players.find(x => x.id === playerId);
  if (!player) return;

  // 清除搜索框和结果
  document.getElementById('search-input').value = '';
  document.getElementById('search-results').innerHTML = '';

  // 在结果区展示（复用最佳匹配渲染）
  const emptyState = document.getElementById('empty-state');
  const resultContent = document.getElementById('result-content');
  emptyState.style.display = 'none';
  resultContent.style.display = 'block';

  // 以100%匹配度展示（因为是直接查询）
  const playerWithScore = { ...player, matchScore: 100 };
  renderBestMatch(playerWithScore);

  // 其他推荐区域显示同位置/同联赛的球员
  const peers = players
    .filter(p => p.id !== player.id && (p.pos === player.pos || p.league === player.league))
    .sort((a, b) => b.ovr - a.ovr)
    .slice(0, 3);
  renderOtherMatches(peers);

  // 滚动到结果区
  document.getElementById('result-panel').scrollIntoView({ behavior: 'smooth' });
}

// 高亮匹配文字
function highlightMatch(name, keyword) {
  const idx = name.indexOf(keyword);
  if (idx === -1) return name;
  return name.slice(0, idx) + `<mark>${keyword}</mark>` + name.slice(idx + keyword.length);
}
