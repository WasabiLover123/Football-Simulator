// 五大联赛球星数据库（2025/26赛季）
// 属性说明：pace速度 shooting射门 passing传球 dribbling盘带 defending防守 physical身体
const players = [
  // ===== 英超（2026年年龄）=====
  {id:1, name:"哈兰德", team:"曼城", league:"英超", pos:"ST", posCn:"前锋", nation:"挪威", h:194, w:88, foot:"左脚", age:26, ovr:91, p:[89,93,65,80,45,88], style:"力量型/终结者"},
  {id:2, name:"德布劳内", team:"曼城", league:"英超", pos:"CAM", posCn:"中场", nation:"比利时", h:181, w:70, foot:"右脚", age:35, ovr:90, p:[74,88,94,86,64,75], style:"组织核心/传球大师"},
  {id:3, name:"福登", team:"曼城", league:"英超", pos:"CAM", posCn:"中场", nation:"英格兰", h:171, w:69, foot:"右脚", age:26, ovr:88, p:[85,84,87,90,60,62], style:"技术型/盘带大师"},
  {id:4, name:"罗德里", team:"曼城", league:"英超", pos:"CDM", posCn:"中场", nation:"西班牙", h:191, w:82, foot:"右脚", age:30, ovr:90, p:[62,76,87,84,88,82], style:"节拍器/技术型"},
  {id:5, name:"萨拉赫", team:"利物浦", league:"英超", pos:"RW", posCn:"前锋", nation:"埃及", h:175, w:71, foot:"左脚", age:34, ovr:88, p:[93,87,82,90,45,75], style:"速度型/突破手"},
  {id:6, name:"范戴克", team:"利物浦", league:"英超", pos:"CB", posCn:"后卫", nation:"荷兰", h:193, w:92, foot:"右脚", age:35, ovr:87, p:[78,60,72,70,90,86], style:"力量型/空中霸主"},
  {id:7, name:"萨卡", team:"阿森纳", league:"英超", pos:"RW", posCn:"前锋", nation:"英格兰", h:178, w:65, foot:"左脚", age:25, ovr:87, p:[88,82,84,89,70,68], style:"速度型/技术型"},
  {id:8, name:"赖斯", team:"阿森纳", league:"英超", pos:"CDM", posCn:"中场", nation:"英格兰", h:188, w:80, foot:"右脚", age:27, ovr:86, p:[72,72,81,78,86,82], style:"全能型/B2B中场"},
  {id:9, name:"厄德高", team:"阿森纳", league:"英超", pos:"CAM", posCn:"中场", nation:"挪威", h:178, w:68, foot:"左脚", age:28, ovr:87, p:[74,82,90,88,62,62], style:"组织核心/技术型"},
  {id:10, name:"孙兴慜", team:"热刺", league:"英超", pos:"LW", posCn:"前锋", nation:"韩国", h:183, w:77, foot:"左脚", age:34, ovr:85, p:[91,85,78,86,50,70], style:"速度型/终结者"},
  {id:11, name:"B费", team:"曼联", league:"英超", pos:"CAM", posCn:"中场", nation:"葡萄牙", h:179, w:69, foot:"右脚", age:32, ovr:85, p:[72,85,88,84,60,68], style:"组织核心/远射专家"},
  {id:12, name:"凯塞多", team:"切尔西", league:"英超", pos:"CDM", posCn:"中场", nation:"厄瓜多尔", h:178, w:72, foot:"右脚", age:25, ovr:84, p:[78,65,78,80,86,82], style:"全能型/防守悍将"},
  {id:13, name:"帕尔默", team:"切尔西", league:"英超", pos:"RW", posCn:"前锋", nation:"英格兰", h:185, w:72, foot:"左脚", age:24, ovr:85, p:[82,84,82,85,55,65], style:"技术型/终结者"},
  {id:14, name:"伊萨克", team:"纽卡斯尔", league:"英超", pos:"ST", posCn:"前锋", nation:"瑞典", h:192, w:77, foot:"左脚", age:26, ovr:84, p:[85,82,73,83,45,76], style:"技术型/全能前锋"},
  {id:15, name:"吉马良斯", team:"纽卡斯尔", league:"英超", pos:"CM", posCn:"中场", nation:"巴西", h:182, w:74, foot:"右脚", age:29, ovr:85, p:[75,78,84,84,82,78], style:"B2B中场/技术型"},

  // ===== 西甲 =====
  {id:16, name:"维尼修斯", team:"皇马", league:"西甲", pos:"LW", posCn:"前锋", nation:"巴西", h:176, w:73, foot:"右脚", age:26, ovr:90, p:[95,82,80,93,35,65], style:"速度型/盘带大师"},
  {id:17, name:"贝林厄姆", team:"皇马", league:"西甲", pos:"CAM", posCn:"中场", nation:"英格兰", h:186, w:75, foot:"右脚", age:23, ovr:89, p:[80,84,84,86,78,80], style:"全能型/B2B中场"},
  {id:18, name:"姆巴佩", team:"皇马", league:"西甲", pos:"ST", posCn:"前锋", nation:"法国", h:178, w:78, foot:"右脚", age:28, ovr:91, p:[97,90,80,92,40,78], style:"速度型/终结者"},
  {id:19, name:"巴尔韦德", team:"皇马", league:"西甲", pos:"CM", posCn:"中场", nation:"乌拉圭", h:182, w:78, foot:"右脚", age:28, ovr:87, p:[86,82,82,82,84,84], style:"全能型/B2B中场"},
  {id:20, name:"罗德里戈", team:"皇马", league:"西甲", pos:"RW", posCn:"前锋", nation:"巴西", h:174, w:64, foot:"右脚", age:25, ovr:84, p:[90,82,78,87,42,58], style:"速度型/技术型"},
  {id:21, name:"莱万多夫斯基", team:"巴萨", league:"西甲", pos:"ST", posCn:"前锋", nation:"波兰", h:185, w:81, foot:"左脚", age:38, ovr:86, p:[68,92,78,82,48,80], style:"终结者/技术型"},
  {id:22, name:"佩德里", team:"巴萨", league:"西甲", pos:"CM", posCn:"中场", nation:"西班牙", h:174, w:64, foot:"左脚", age:24, ovr:87, p:[76,74,90,90,72,62], style:"技术型/组织核心"},
  {id:23, name:"亚马尔", team:"巴萨", league:"西甲", pos:"RW", posCn:"前锋", nation:"西班牙", h:180, w:70, foot:"左脚", age:19, ovr:84, p:[93,78,82,90,38,55], style:"速度型/盘带大师"},
  {id:24, name:"拉菲尼亚", team:"巴萨", league:"西甲", pos:"LW", posCn:"前锋", nation:"巴西", h:176, w:68, foot:"右脚", age:30, ovr:85, p:[87,82,80,88,55,68], style:"速度型/技术型"},
  {id:25, name:"格列兹曼", team:"马竞", league:"西甲", pos:"CF", posCn:"前锋", nation:"法国", h:176, w:73, foot:"左脚", age:35, ovr:84, p:[78,84,83,85,65,68], style:"技术型/全能前锋"},
  {id:26, name:"阿尔瓦雷斯", team:"马竞", league:"西甲", pos:"ST", posCn:"前锋", nation:"阿根廷", h:170, w:71, foot:"右脚", age:26, ovr:82, p:[82,82,76,80,55,72], style:"全能型/终结者"},

  // ===== 德甲 =====
  {id:27, name:"凯恩", team:"拜仁", league:"德甲", pos:"ST", posCn:"前锋", nation:"英格兰", h:188, w:86, foot:"右脚", age:33, ovr:89, p:[70,93,82,78,55,80], style:"终结者/全能前锋"},
  {id:28, name:"穆西亚拉", team:"拜仁", league:"德甲", pos:"CAM", posCn:"中场", nation:"德国", h:184, w:72, foot:"右脚", age:23, ovr:87, p:[82,80,86,92,55,65], style:"技术型/盘带大师"},
  {id:29, name:"萨内", team:"拜仁", league:"德甲", pos:"LW", posCn:"前锋", nation:"德国", h:183, w:75, foot:"左脚", age:30, ovr:84, p:[91,82,76,88,42,68], style:"速度型/技术型"},
  {id:30, name:"基米希", team:"拜仁", league:"德甲", pos:"CDM", posCn:"中场", nation:"德国", h:176, w:70, foot:"右脚", age:31, ovr:87, p:[68,76,90,82,84,72], style:"组织核心/战术大师"},
  {id:31, name:"维尔茨", team:"勒沃库森", league:"德甲", pos:"CAM", posCn:"中场", nation:"德国", h:176, w:66, foot:"右脚", age:23, ovr:86, p:[80,82,86,90,48,58], style:"技术型/组织核心"},
  {id:32, name:"博尼法斯", team:"勒沃库森", league:"德甲", pos:"ST", posCn:"前锋", nation:"尼日利亚", h:190, w:84, foot:"左脚", age:26, ovr:82, p:[80,80,68,78,48,82], style:"力量型/终结者"},
  {id:33, name:"吉拉西", team:"多特蒙德", league:"德甲", pos:"ST", posCn:"前锋", nation:"几内亚", h:187, w:85, foot:"右脚", age:30, ovr:82, p:[78,82,70,76,42,80], style:"力量型/终结者"},
  {id:34, name:"阿德耶米", team:"多特蒙德", league:"德甲", pos:"LW", posCn:"前锋", nation:"德国", h:177, w:71, foot:"右脚", age:24, ovr:80, p:[96,76,70,84,42,68], style:"速度型/突破手"},

  // ===== 意甲 =====
  {id:35, name:"劳塔罗", team:"国米", league:"意甲", pos:"ST", posCn:"前锋", nation:"阿根廷", h:174, w:72, foot:"左脚", age:29, ovr:86, p:[82,85,76,84,58,75], style:"终结者/技术型"},
  {id:36, name:"恰尔汗奥卢", team:"国米", league:"意甲", pos:"CAM", posCn:"中场", nation:"土耳其", h:178, w:76, foot:"左脚", age:32, ovr:84, p:[68,82,86,82,68,68], style:"组织核心/定位球专家"},
  {id:37, name:"巴雷拉", team:"国米", league:"意甲", pos:"CM", posCn:"中场", nation:"意大利", h:172, w:68, foot:"右脚", age:29, ovr:85, p:[78,78,84,82,82,76], style:"B2B中场/全能型"},
  {id:38, name:"莱奥", team:"AC米兰", league:"意甲", pos:"LW", posCn:"前锋", nation:"葡萄牙", h:188, w:81, foot:"右脚", age:27, ovr:84, p:[96,76,76,90,38,78], style:"速度型/盘带大师"},
  {id:39, name:"特奥", team:"AC米兰", league:"意甲", pos:"LB", posCn:"后卫", nation:"法国", h:184, w:81, foot:"左脚", age:29, ovr:84, p:[90,78,78,82,78,82], style:"速度型/助攻型边卫"},
  {id:40, name:"弗拉霍维奇", team:"尤文", league:"意甲", pos:"ST", posCn:"前锋", nation:"塞尔维亚", h:190, w:84, foot:"右脚", age:26, ovr:82, p:[76,84,68,76,42,80], style:"力量型/终结者"},
  {id:41, name:"基耶萨", team:"尤文", league:"意甲", pos:"RW", posCn:"前锋", nation:"意大利", h:175, w:70, foot:"右脚", age:29, ovr:82, p:[90,78,74,84,50,68], style:"速度型/突破手"},
  {id:42, name:"克瓦拉茨赫利亚", team:"那不勒斯", league:"意甲", pos:"LW", posCn:"前锋", nation:"格鲁吉亚", h:183, w:74, foot:"右脚", age:25, ovr:84, p:[88,80,82,90,42,68], style:"技术型/盘带大师"},

  // ===== 法甲 =====
  {id:43, name:"登贝莱", team:"巴黎", league:"法甲", pos:"RW", posCn:"前锋", nation:"法国", h:178, w:67, foot:"左脚", age:29, ovr:84, p:[95,80,80,92,42,62], style:"速度型/盘带大师"},
  {id:44, name:"巴尔科拉", team:"巴黎", league:"法甲", pos:"LW", posCn:"前锋", nation:"法国", h:176, w:70, foot:"右脚", age:24, ovr:82, p:[93,76,78,86,42,62], style:"速度型/技术型"},
  {id:45, name:"马尔基尼奥斯", team:"巴黎", league:"法甲", pos:"CB", posCn:"后卫", nation:"巴西", h:183, w:75, foot:"右脚", age:32, ovr:85, p:[74,58,72,70,88,80], style:"力量型/领袖"},
  {id:46, name:"维蒂尼亚", team:"巴黎", league:"法甲", pos:"CM", posCn:"中场", nation:"葡萄牙", h:172, w:62, foot:"左脚", age:26, ovr:83, p:[72,74,86,86,76,65], style:"技术型/组织核心"},
  {id:47, name:"扎伊尔-埃梅里", team:"巴黎", league:"法甲", pos:"CM", posCn:"中场", nation:"法国", h:180, w:73, foot:"右脚", age:20, ovr:81, p:[76,72,82,82,78,72], style:"全能型/B2B中场"},

  // ===== 门将 =====
  {id:48, name:"阿利松", team:"利物浦", league:"英超", pos:"GK", posCn:"门将", nation:"巴西", h:191, w:91, foot:"右脚", age:34, ovr:87, p:[48,20,72,38,25,78], gk:true, style:"反应型/扑救大师"},
  {id:49, name:"迈尼昂", team:"AC米兰", league:"意甲", pos:"GK", posCn:"门将", nation:"法国", h:191, w:87, foot:"右脚", age:31, ovr:86, p:[52,16,70,32,20,80], gk:true, style:"扑救大师/反应型"},
  {id:50, name:"特尔施特根", team:"巴萨", league:"西甲", pos:"GK", posCn:"门将", nation:"德国", h:187, w:85, foot:"右脚", age:34, ovr:85, p:[42,18,82,35,22,72], gk:true, style:"扑救大师/出球型门将"},
  {id:51, name:"诺伊尔", team:"拜仁", league:"德甲", pos:"GK", posCn:"门将", nation:"德国", h:193, w:93, foot:"右脚", age:40, ovr:85, p:[46,15,68,30,18,82], gk:true, style:"清道夫门将/领袖"},

  // ===== 更多后卫 =====
  {id:52, name:"萨利巴", team:"阿森纳", league:"英超", pos:"CB", posCn:"后卫", nation:"法国", h:192, w:83, foot:"右脚", age:25, ovr:86, p:[78,42,68,62,90,82], style:"力量型/空中霸主"},
  {id:53, name:"加布里埃尔", team:"阿森纳", league:"英超", pos:"CB", posCn:"后卫", nation:"巴西", h:190, w:87, foot:"左脚", age:29, ovr:85, p:[72,52,62,58,88,86], style:"力量型/空中霸主"},
  {id:54, name:"鲁本·迪亚斯", team:"曼城", league:"英超", pos:"CB", posCn:"后卫", nation:"葡萄牙", h:187, w:82, foot:"右脚", age:29, ovr:86, p:[68,50,72,64,88,82], style:"领袖/战术型"},
  {id:55, name:"吕迪格", team:"皇马", league:"西甲", pos:"CB", posCn:"后卫", nation:"德国", h:190, w:85, foot:"右脚", age:33, ovr:84, p:[82,48,62,58,86,84], style:"力量型/速度型后卫"},
  {id:56, name:"布雷默", team:"尤文", league:"意甲", pos:"CB", posCn:"后卫", nation:"巴西", h:188, w:82, foot:"右脚", age:29, ovr:84, p:[76,42,60,55,88,84], style:"力量型/空中霸主"},

  // ===== 更多中场 =====
  {id:57, name:"麦迪逊", team:"热刺", league:"英超", pos:"CAM", posCn:"中场", nation:"英格兰", h:175, w:73, foot:"右脚", age:30, ovr:83, p:[70,80,86,84,55,60], style:"组织核心/定位球专家"},
  {id:58, name:"恩佐", team:"切尔西", league:"英超", pos:"CM", posCn:"中场", nation:"阿根廷", h:177, w:70, foot:"左脚", age:25, ovr:84, p:[72,72,86,84,80,75], style:"组织核心/B2B中场"},
  {id:59, name:"奥尔莫", team:"巴萨", league:"西甲", pos:"CAM", posCn:"中场", nation:"西班牙", h:179, w:72, foot:"右脚", age:28, ovr:84, p:[74,82,84,86,58,65], style:"技术型/攻击型中场"},
  {id:60, name:"于帕梅卡诺", team:"拜仁", league:"德甲", pos:"CB", posCn:"后卫", nation:"法国", h:186, w:83, foot:"右脚", age:28, ovr:83, p:[80,42,62,62,84,82], style:"力量型/速度型后卫"},

  // ===== 传奇球星 (FC26 Legend · 巅峰年龄) =====
  {id:101, name:"梅西", team:"迈阿密国际", league:"传奇", pos:"RW", posCn:"前锋", nation:"阿根廷", h:170, w:72, foot:"左脚", age:36, ovr:94, p:[86,92,94,97,34,68], legend:true, style:"技术型/组织核心/盘带大师"},
  {id:102, name:"C罗", team:"利雅得胜利", league:"传奇", pos:"ST", posCn:"前锋", nation:"葡萄牙", h:187, w:83, foot:"右脚", age:41, ovr:91, p:[88,95,82,89,38,86], legend:true, style:"力量型/终结者/头球王"},
  {id:103, name:"马拉多纳", team:"那不勒斯(传世)", league:"传奇", pos:"CAM", posCn:"中场", nation:"阿根廷", h:165, w:78, foot:"左脚", age:25, ovr:98, p:[78,90,88,98,42,72], legend:true, style:"技术型/盘带大师/组织核心"},
  {id:104, name:"贝利", team:"桑托斯(传世)", league:"传奇", pos:"ST", posCn:"前锋", nation:"巴西", h:173, w:72, foot:"右脚", age:25, ovr:98, p:[82,96,78,94,40,82], legend:true, style:"终结者/技术型/全能前锋"},
  {id:105, name:"齐达内", team:"皇马(传世)", league:"传奇", pos:"CAM", posCn:"中场", nation:"法国", h:185, w:80, foot:"右脚", age:28, ovr:95, p:[72,86,92,94,60,78], legend:true, style:"技术型/组织核心/定位球大师"},
  {id:106, name:"罗纳尔多", team:"皇马(传世)", league:"传奇", pos:"ST", posCn:"前锋", nation:"巴西", h:183, w:85, foot:"右脚", age:25, ovr:96, p:[94,92,72,92,32,86], legend:true, style:"速度型/终结者/外星人"},
  {id:107, name:"贝克汉姆", team:"曼联(传世)", league:"传奇", pos:"RM", posCn:"中场", nation:"英格兰", h:183, w:75, foot:"右脚", age:28, ovr:90, p:[82,82,94,86,52,84], legend:true, style:"组织核心/定位球大师/传中专家"},
  {id:108, name:"罗纳尔迪尼奥", team:"巴萨(传世)", league:"传奇", pos:"CAM", posCn:"中场", nation:"巴西", h:181, w:80, foot:"右脚", age:26, ovr:95, p:[86,88,84,97,42,72], legend:true, style:"技术型/盘带大师/快乐足球"},
  {id:109, name:"马尔蒂尼", team:"AC米兰(传世)", league:"传奇", pos:"CB", posCn:"后卫", nation:"意大利", h:186, w:85, foot:"左脚", age:29, ovr:95, p:[82,52,78,82,96,86], legend:true, style:"领袖/防守大师/优雅后卫"},
  {id:110, name:"贝肯鲍尔", team:"拜仁(传世)", league:"传奇", pos:"CB", posCn:"后卫", nation:"德国", h:181, w:78, foot:"右脚", age:28, ovr:95, p:[78,72,88,86,92,82], legend:true, style:"领袖/清道夫/组织后卫"},
  {id:111, name:"克鲁伊夫", team:"阿贾克斯(传世)", league:"传奇", pos:"CAM", posCn:"中场", nation:"荷兰", h:178, w:72, foot:"右脚", age:27, ovr:97, p:[84,88,92,96,62,74], legend:true, style:"技术型/组织核心/全攻全守"},
  {id:112, name:"巴乔", team:"尤文(传世)", league:"传奇", pos:"SS", posCn:"前锋", nation:"意大利", h:174, w:72, foot:"右脚", age:27, ovr:93, p:[82,90,84,92,42,68], legend:true, style:"技术型/终结者/忧郁王子"},
  {id:113, name:"普斯卡什", team:"皇马(传世)", league:"传奇", pos:"ST", posCn:"前锋", nation:"匈牙利", h:172, w:76, foot:"左脚", age:28, ovr:94, p:[78,96,76,84,38,78], legend:true, style:"终结者/左脚重炮"},
  {id:114, name:"杰拉德", team:"利物浦(传世)", league:"传奇", pos:"CM", posCn:"中场", nation:"英格兰", h:188, w:83, foot:"右脚", age:28, ovr:90, p:[78,88,86,84,82,90], legend:true, style:"全能型/B2B中场/远射专家"},
  {id:115, name:"兰帕德", team:"切尔西(传世)", league:"传奇", pos:"CM", posCn:"中场", nation:"英格兰", h:184, w:79, foot:"右脚", age:30, ovr:90, p:[72,88,84,82,76,84], legend:true, style:"全能型/进球型中场/远射专家"},
  {id:116, name:"卡恩", team:"拜仁(传世)", league:"传奇", pos:"GK", posCn:"门将", nation:"德国", h:188, w:92, foot:"右脚", age:32, ovr:94, p:[48,15,65,28,20,92], gk:true, legend:true, style:"扑救大师/领袖/怒吼门神"},
  {id:117, name:"布冯", team:"尤文(传世)", league:"传奇", pos:"GK", posCn:"门将", nation:"意大利", h:192, w:92, foot:"右脚", age:30, ovr:95, p:[50,18,68,30,22,88], gk:true, legend:true, style:"扑救大师/反应型/常青树"},
  {id:118, name:"内马尔", team:"桑托斯", league:"传奇", pos:"LW", posCn:"前锋", nation:"巴西", h:175, w:68, foot:"右脚", age:34, ovr:92, p:[90,88,84,96,36,62], legend:true, style:"技术型/盘带大师/桑巴舞者"},
  {id:119, name:"苏亚雷斯", team:"迈阿密国际", league:"传奇", pos:"ST", posCn:"前锋", nation:"乌拉圭", h:182, w:86, foot:"左脚", age:39, ovr:88, p:[76,92,78,86,54,84], legend:true, style:"终结者/力量型/咬人魔"},
  {id:120, name:"莫德里奇", team:"皇马", league:"传奇", pos:"CM", posCn:"中场", nation:"克罗地亚", h:172, w:66, foot:"左脚", age:40, ovr:89, p:[72,76,90,92,72,68], legend:true, style:"技术型/组织核心/魔术师"},
];
