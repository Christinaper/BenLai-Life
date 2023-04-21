var fruit = [
    {id: 1, title:'泰国椰青2个装 大果(1.8kg以上)', intro:'🥥清甜沁心，香嫩爽滑', price: '39.00', oldPrice:'58.00', imgPath:'fruit-11'},
    {id: 2, title:'Driscolls怡颗莓-云南“巨无霸”蓝莓3盒装(125g/盒 果径18mm+)', intro:'🫐怡颗莓时刻：欢乐“莓”一颗,纵情 “莓” 味', price:'89.00', oldPrice:'159.00', imgPath:'fruit-12'},
    {id: 3, title:'丹东东港红颜草莓350g*3盒(12-15粒)', intro:'🍓香味浓郁，果汁甜美', price:'199', oldPrice:'', imgPath:'fruit-13'},
    {id: 4, title:'【产地直发】秭归中华红橙2.5kg(60-70mm)', intro:'🍊橙意红心，香甜可口', price:'45.00', oldPrice:'59.00', imgPath:'fruit-14'},
    {id: 5, title:'国产柠檬4-5粒装(520g以上)', intro:'🍋清香怡人 酸爽无限', price:'25.90', oldPrice:'', imgPath:'fruit-15'},
    {id: 6, title:'【产地直发】湖北秭归中华红橙2.5kg (单果70-80)', intro:'🍊橙意红心，香甜可口', price:'55.00', oldPrice:'69.00', imgPath:'fruit-16'},
    {id: 7, title:'新疆库尔勒香梨特级 3kg礼盒装', intro:'🍐天山南麓，孔雀河畔，小个头、大惊艳的 "奶西姆提"', price:'79.00', oldPrice:'89.00', imgPath:'fruit-17'},
    {id: 8, title:'进口新奇士蓝标脐橙16个装(2.4kg以上)', intro:'🍊果香四溢，补充快乐能量~', price:'69.00', oldPrice:'109.00', imgPath:'fruit-18'},
    {id: 9, title:'梨166-特级库尔勒晚摘香梨3kg装(单果120g以上)', intro:'🍐孔雀河畔，寻觅晚摘近30天-树上熟的脆甜', price:'69.00', oldPrice:'109.00', imgPath:'fruit-19'},
    {id: 10, title:'脆香红-库尔勒香梨6个装(720g以上)', intro:'🍐脆在口，甜在心，太阳亲吻过的红衣“姑娘”', price:'39.00', oldPrice:'', imgPath:'fruit-20'},
];
// var a = [
//     {title:'【产地直发】湖北秭归中华红橙2.5kg (单果70-80)', intro:'橙意红心，香甜可口', price:'55.00', oldPrice:'69.00'},
//     {title:'【产地直发】重庆万州玫瑰香橙特级礼盒装2.5kg12个', intro:'源自意大利，柑橘类中含花青素的橙子', price:'59.00', oldPrice:'109.00'},
//     {title:'【产地直发】山东红富士苹果8-9个装(果径80# 2kg以上)', intro:'一口嘎嘣脆 树上自然熟', price:'49.90', oldPrice:'89.00'},
//     {title:'', intro:'', price:'59.90', oldPrice:'99.00'},
//     {title:'', intro:'', price:'', oldPrice:''},
//     {title:'', intro:'', price:'', oldPrice:''},
//     {title:'', intro:'', price:'', oldPrice:''},
//     {title:'', intro:'', price:'', oldPrice:''},
//     {title:'', intro:'', price:'', oldPrice:''},
//     {title:'', intro:'', price:'', oldPrice:''},
// ]
var str = "";
fruit.forEach(function(item) {
    str += `
    <div class="commodity-card">
        <div class="card_cart-icon">
            <?xml version="1.0" encoding="UTF-8"?><svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39 32H13L8 12H44L39 32Z" fill="#fff"/><path d="M3 6H6.5L8 12M8 12L13 32H39L44 12H8Z" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="13" cy="39" r="3" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="39" cy="39" r="3" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 22H30" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M26 26V18" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>        
        </div>
        <a href="../detail/detail.html">
            <div class="card_img">
                <img src="./img/fruit/${item.imgPath}.jpg" alt="">
            </div>
        </a>
        <div class="card_info">
            <span class="card_intro">${item.intro}</span>
            <h3 class="card_title">${item.title}</h3>
            <span class="card_price">
                <?xml version="1.0" encoding="UTF-8"?><svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39 7H9C6.23858 7 4 9.23858 4 12V36C4 38.7614 6.23858 41 9 41H39C41.7614 41 44 38.7614 44 36V12C44 9.23858 41.7614 7 39 7Z" fill="#1ba784" stroke="#fff" stroke-width="4" stroke-linejoin="round"/><path d="M18 15L24 21L30 15" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 23H31" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 29H31" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 23V34" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                ${item.price}
            </span>
            <span class="card_oldprice">${item.oldPrice}</span>
        </div>
    </div>
    `
})
document.querySelector(".commodity-container").innerHTML = str;
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 水产海鲜
var aquatic = [
    {id: 1, imgPath:'aquatic-11', title:'【国产】正大生冻南美白对虾1.5kg/盒(30-40尾/kg)', intro:'活虾瞬间急冻，锁住新鲜和营养', price:'139.90', oldPrice:'229.00'},
    {id: 2, imgPath:'aquatic-12', title:'【国产】正大生冻南美白对虾800g/盒 50-60尾/kg(40-48只/盒)', intro:'正大大品牌 精挑细选 品质把控国产好虾 百搭好食材', price:'69.90', oldPrice:'99.00'},
    {id: 3, imgPath:'aquatic-13', title:'聚欣鲜北极甜虾500g/盒 (90-120只/kg)', intro:'肉质紧实 口感鲜甜', price:'59.90', oldPrice:'66.90'},
    {id: 4, imgPath:'aquatic-14', title:'PESCANOVA冷冻厄瓜多尔白虾2kg 100-120只/盒(50-60只/kg)', intro:'原装进口，盐冻锁鲜，肉质肥嫩', price:'169.00', oldPrice:'228.00'},
    {id: 5, imgPath:'aquatic-15', title:'国联龙霸海湾甜白虾 1kg/盒(21-25只/500g)', intro:'国联大品牌 低温液氮锁鲜 肉质脆弹 鲜甜味道', price:'89.00', oldPrice:'139.00'},
    {id: 6, imgPath:'aquatic-16', title:'【国产】正大生冻南美白对虾300g/盒30-40尾/kg(9-12只/盒)', intro:'正大大品牌 精挑细选 品质把控国产好虾 百搭好食材', price:'59.90', oldPrice:'69.90'},
    {id: 7, imgPath:'aquatic-17', title:'【国产】正大生冻黑虎虾240g(26-30尾/kg)', intro:'正大全产业链 鲜甜口感 品质把控国产好虾 百搭好食材', price:'39.90', oldPrice:'69.90'},
    {id: 8, imgPath:'aquatic-18', title:'国联 龙霸海湾甜白虾300g/袋(21-25只/500g)', intro:'国联大品牌 严守国家生产标准 海水养殖 纯净鲜甜', price:'49.90', oldPrice:'59.90'},
    {id: 9, imgPath:'aquatic-19', title:'KING OSCAR生冻黑虎虾300g/盒 (20-30/kg)', intro:'个大肥美、海水养殖、味道鲜甜 肉质紧实鲜美', price:'59.90', oldPrice:'79.90'},
    {id: 10, imgPath:'aquatic-20', title:'海天下北极甜虾200g', intro:'', price:'35.80', oldPrice:''}
]
var str = "";
aquatic.forEach(function(item) {
    str += `
    <div class="commodity-card">
        <div class="card_cart-icon">
            <?xml version="1.0" encoding="UTF-8"?><svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39 32H13L8 12H44L39 32Z" fill="#fff"/><path d="M3 6H6.5L8 12M8 12L13 32H39L44 12H8Z" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="13" cy="39" r="3" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="39" cy="39" r="3" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 22H30" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M26 26V18" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>        
        </div>
        <a href="../detail/detail.html">
            <div class="card_img">
                <img src="./img/aquatic/${item.imgPath}.jpg" alt="">
            </div>
        </a>
        <div class="card_info">
            <span class="card_intro">${item.intro}</span>
            <h3 class="card_title">${item.title}</h3>
            <span class="card_price">
                <?xml version="1.0" encoding="UTF-8"?><svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39 7H9C6.23858 7 4 9.23858 4 12V36C4 38.7614 6.23858 41 9 41H39C41.7614 41 44 38.7614 44 36V12C44 9.23858 41.7614 7 39 7Z" fill="#1ba784" stroke="#fff" stroke-width="4" stroke-linejoin="round"/><path d="M18 15L24 21L30 15" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 23H31" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 29H31" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 23V34" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                ${item.price}
            </span>
            <span class="card_oldprice">${item.oldPrice}</span>
        </div>
    </div>
    `
})
document.querySelector(".aquatic-container").innerHTML = str;
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------
//  肉禽蛋奶
var meat = [
    { id: 1, imgPath:'meat-11', title:'棋盘村雷猪 通脊肉400g', intro:'清水涮着吃的黑猪肉', price:'32.90', oldPrice:'42.90'},
    { id: 2, imgPath:'meat-12', title:'棋盘村雷猪 带皮五花肉400g', intro:'清水涮着吃的黑猪肉', price:'39.90', oldPrice:'49.90'},
    { id: 3, imgPath:'meat-13', title:'棋盘村雷猪 去皮五花肉块400g', intro:'清水涮着吃的黑猪肉', price:'35.90', oldPrice:'45.90'},
    { id: 4, imgPath:'meat-14', title:'棋盘村雷猪 腿肉400g', intro:'清水涮着吃的黑猪肉', price:'29.90', oldPrice:'39.90'},
    { id: 5, imgPath:'meat-15', title:'棋盘村雷猪 70%瘦肉馅400g', intro:'清水涮着吃的黑猪肉', price:'19.90', oldPrice:'29.90'},
    { id: 6, imgPath:'meat-16', title:'棋盘村雷猪 肋排400g', intro:'清水涮着吃的黑猪肉', price:'79.90', oldPrice:'99.90'},
    { id: 7, imgPath:'meat-17', title:'棋盘村雷猪 肘子块500g', intro:'清水涮着吃的黑猪肉', price:'35.90', oldPrice:'45.90'},
    { id: 8, imgPath:'meat-18', title:'棋盘村雷猪 棒骨500g', intro:'清水涮着吃的黑猪肉', price:'19.90', oldPrice:'49.90'},
    { id: 9, imgPath:'meat-19', title:'娱大厨 西班牙伊比利亚黑猪五花肉(去皮)400g', intro:'雪花纹理，肉质鲜嫩，看得见的美味', price:'59.90', oldPrice:'69.90'},
    { id: 10, imgPath:'meat-20', title:'娱大厨 西班牙伊比利亚黑猪肋排500g', intro:'雪花纹理，肉质鲜嫩，看得见的美味', price:'39.90', oldPrice:'69.90'},
]
var str = "";
meat.forEach(function(item) {
    str += `
    <div class="commodity-card">
        <div class="card_cart-icon">
            <?xml version="1.0" encoding="UTF-8"?><svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39 32H13L8 12H44L39 32Z" fill="#fff"/><path d="M3 6H6.5L8 12M8 12L13 32H39L44 12H8Z" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="13" cy="39" r="3" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="39" cy="39" r="3" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 22H30" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M26 26V18" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>        
        </div>
        <a href="../detail/detail.html">
            <div class="card_img">
                <img src="./img/meat/${item.imgPath}.jpg" alt="">
            </div>
        </a>
        <div class="card_info">
            <span class="card_intro">${item.intro}</span>
            <h3 class="card_title">${item.title}</h3>
            <span class="card_price">
                <?xml version="1.0" encoding="UTF-8"?><svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39 7H9C6.23858 7 4 9.23858 4 12V36C4 38.7614 6.23858 41 9 41H39C41.7614 41 44 38.7614 44 36V12C44 9.23858 41.7614 7 39 7Z" fill="#1ba784" stroke="#fff" stroke-width="4" stroke-linejoin="round"/><path d="M18 15L24 21L30 15" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 23H31" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 29H31" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 23V34" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                ${item.price}
            </span>
            <span class="card_oldprice">${item.oldPrice}</span>
        </div>
    </div>
    `
})
document.querySelector(".meat-container").innerHTML = str;
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 居家优选
var home = [
    {imgPath:'home-11', title:'李玉双五常有机稻花香大米5kg', intro:'本来买手亲赴五常 为您直供五常真米', price:'118.00', oldPrice:'138.00'},
    {imgPath:'home-12', title:'金龙鱼乳玉皇妃稻香贡米5kg', intro:'其米粒晶莹剔透，口感柔软滑润', price:'99.90', oldPrice:''},
    {imgPath:'home-13', title:'【本来工坊】五常稻花香大米5kg', intro:'五常稻花香2号 五常民乐朝鲜族乡产区', price:'99.00', oldPrice:'119.00'},
    {imgPath:'home-14', title:'【产地直发】伊古道雪花小麦粉5kg', intro:'俄罗斯进口原粮', price:'135.80', oldPrice:'135.90'},
    {imgPath:'home-15', title:'君稻五常稻花香大米5kg', intro:'品质优选，健康饮食', price:'69.90', oldPrice:'119.90'},
    {imgPath:'home-16', title:'恒大兴安珍珠米一号大米5kg', intro:'精选大兴安岭生态圈珍珠香米', price:'79.90', oldPrice:'88.00'},
    {imgPath:'home-17', title:'恒大兴安长粒香一号5kg', intro:'东北大米，品质可口', price:'79.90', oldPrice:'89.00'},
    {imgPath:'home-18', title:'鲁花低芥酸特香菜籽油5L', intro:'非转基因原料 纯物理压榨 充分保留营养', price:'109.90', oldPrice:'119.00'},
    {imgPath:'home-19', title:'【供货商直发】鑫贵红花籽油500ml', intro:'低温压榨，品质保证', price:'89.00', oldPrice:''},
    {imgPath:'home-20', title:'【供货商直发】鑫贵核桃油500ml', intro:'低温压榨，品质保证', price:'158', oldPrice:''},
]
var str = "";
for(var i = 0, len = home.length; i < len; i++) {
    str += `
    <div class="commodity-card">
        <div class="card_cart-icon">
            <?xml version="1.0" encoding="UTF-8"?><svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39 32H13L8 12H44L39 32Z" fill="#fff"/><path d="M3 6H6.5L8 12M8 12L13 32H39L44 12H8Z" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="13" cy="39" r="3" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="39" cy="39" r="3" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 22H30" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M26 26V18" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>        </div>
        <a href="../detail/detail.html">
            <div class="card_img">
                <img src="./img/home/${home[i].imgPath}.jpg" alt="">
            </div>
        </a>
        <div class="card_info">
            <span class="card_intro">${home[i].intro}</span>
            <h3 class="card_title">${home[i].title}</h3>
            <span class="card_price">
                <?xml version="1.0" encoding="UTF-8"?><svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39 7H9C6.23858 7 4 9.23858 4 12V36C4 38.7614 6.23858 41 9 41H39C41.7614 41 44 38.7614 44 36V12C44 9.23858 41.7614 7 39 7Z" fill="#1ba784" stroke="#fff" stroke-width="4" stroke-linejoin="round"/><path d="M18 15L24 21L30 15" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 23H31" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 29H31" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 23V34" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                ${home[i].price}
            </span>
            <span class="card_oldprice">${home[i].oldPrice}</span>
        </div>
    </div>
    `
}
document.querySelector(".home-container").innerHTML = str;

// 熟食面点
var pastry = [
    { id: 1, imgPath:'pastry-11', title:'年轻传说红烧狮子头220g', intro:'加热即食 方便可口', price:'13.90', oldPrice:'23.90'},
    { id: 2, imgPath:'pastry-12', title:'年轻传说香菇鸡块220g', intro:'加热即食 方便可口', price:'19.90', oldPrice:'23.90'},
    { id: 3, imgPath:'pastry-13', title:'年轻传说金汤菌菇肥牛220g', intro:'加热即食 方便可口', price:'29.90', oldPrice:'32.90'},
    { id: 4, imgPath:'pastry-14', title:'年轻传说黑椒肥牛220g', intro:'', price:'19.90', oldPrice:'25.90'},
    { id: 5, imgPath:'pastry-15', title:'金锣玉米热狗40g', intro:'', price:'2.90', oldPrice:'3.90'},
    { id: 6, imgPath:'pastry-16', title:'金锣小烤肠(原味)45g*4', intro:'', price:'15.90', oldPrice:'21.90'},
    { id: 7, imgPath:'pastry-17', title:'金锣无淀粉加钙金锣王380g', intro:'', price:'23.90', oldPrice:'35.90'},
    { id: 8, imgPath:'pastry-18', title:'金锣特级王中王380g', intro:'', price:'23.90', oldPrice:'29.90'},
    { id: 9, imgPath:'pastry-19', title:'金锣肉粒多台湾风味香肠260g', intro:'', price:'19.90', oldPrice:'26.90'},
    { id: 10, imgPath:'pastry-20', title:'金锣清真脆脆肠(原味)120g', intro:'', price:'19.90', oldPrice:'12.90'},
]
var str = "";
pastry.forEach(function(item) {
    str += `
    <div class="commodity-card">
        <div class="card_cart-icon">
            <?xml version="1.0" encoding="UTF-8"?><svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39 32H13L8 12H44L39 32Z" fill="#fff"/><path d="M3 6H6.5L8 12M8 12L13 32H39L44 12H8Z" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="13" cy="39" r="3" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="39" cy="39" r="3" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 22H30" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M26 26V18" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>        
        </div>
        <a href="../detail/detail.html">
            <div class="card_img">
                <img src="./img/pastry/${item.imgPath}.jpg" alt="">
            </div>
        </a>
        <div class="card_info">
            <span class="card_intro">${item.intro}</span>
            <h3 class="card_title">${item.title}</h3>
            <span class="card_price">
                <?xml version="1.0" encoding="UTF-8"?><svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39 7H9C6.23858 7 4 9.23858 4 12V36C4 38.7614 6.23858 41 9 41H39C41.7614 41 44 38.7614 44 36V12C44 9.23858 41.7614 7 39 7Z" fill="#1ba784" stroke="#fff" stroke-width="4" stroke-linejoin="round"/><path d="M18 15L24 21L30 15" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 23H31" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 29H31" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 23V34" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                ${item.price}
            </span>
            <span class="card_oldprice">${item.oldPrice}</span>
        </div>
    </div>
    `
})
document.querySelector(".pastry-container").innerHTML = str;
// 乳品烘焙
var milk = [
    { id: 1, imgPath:'milk-11', title:'三元利乐砖纯牛奶250ml*24', intro:'奶香清新，滋味美', price:'67.50', oldPrice:'74.90'},
    { id: 2, imgPath:'milk-12', title:'伊利金典纯牛奶250ml*12', intro:'源自甄选牧场，高蛋白高品质', price:'49.90', oldPrice:'79.00'},
    { id: 3, imgPath:'milk-13', title:'光明 一只椰子牛乳饮品 250ml', intro:'清新椰香 香醇可口', price:'5.90', oldPrice:'9.90'},
    { id: 4, imgPath:'milk-14', title:'维他奶原味豆奶(250ml*24)', intro:'营养早餐维他奶，每天给你好开始 植物蛋白饮品', price:'65.00', oldPrice:'72.00'},
    { id: 5, imgPath:'milk-15', title:'德亚 低脂高钙牛奶 200ml*12礼盒 德国进口', intro:'莱茵河畔牧场奶', price:'69.00', oldPrice:'79.00'},
    { id: 6, imgPath:'milk-16', title:'光明 荔志桃桃 荔枝白桃牛乳饮品 250ml', intro:'荔枝粘白桃 鲜甜好滋味', price:'6.80', oldPrice:'9.90'},
    { id: 7, imgPath:'milk-17', title:'Movenpick瑞享 草莓风味酸奶100g', intro:'', price:'11.90', oldPrice:'12.00'},
    { id: 8, imgPath:'milk-18', title:'Movenpick瑞享 芒果杏风味酸奶100g', intro:'', price:'11.90', oldPrice:'12.80'},
    { id: 9, imgPath:'milk-19', title:'Movenpick瑞享 蓝莓风味酸奶100g', intro:'', price:'11.90', oldPrice:'12.80'},
    { id: 10, imgPath:'milk-20', title:'Movenpick瑞享 清甜原味风味酸奶100g', intro:'', price:'9.90', oldPrice:'12.80'},
]
var str = "";
milk.forEach(function(item) {
    str += `
    <div class="commodity-card">
        <div class="card_cart-icon">
            <?xml version="1.0" encoding="UTF-8"?><svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39 32H13L8 12H44L39 32Z" fill="#fff"/><path d="M3 6H6.5L8 12M8 12L13 32H39L44 12H8Z" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="13" cy="39" r="3" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="39" cy="39" r="3" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 22H30" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M26 26V18" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>        
        </div>
        <a href="../detail/detail.html">
            <div class="card_img">
                <img src="./img/milk/${item.imgPath}.jpg" alt="">
            </div>
        </a>
        <div class="card_info">
            <span class="card_intro">${item.intro}</span>
            <h3 class="card_title">${item.title}</h3>
            <span class="card_price">
                <?xml version="1.0" encoding="UTF-8"?><svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39 7H9C6.23858 7 4 9.23858 4 12V36C4 38.7614 6.23858 41 9 41H39C41.7614 41 44 38.7614 44 36V12C44 9.23858 41.7614 7 39 7Z" fill="#1ba784" stroke="#fff" stroke-width="4" stroke-linejoin="round"/><path d="M18 15L24 21L30 15" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 23H31" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 29H31" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 23V34" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                ${item.price}
            </span>
            <span class="card_oldprice">${item.oldPrice}</span>
        </div>
    </div>
    `
})
document.querySelector(".milk-container").innerHTML = str;




































// // 休闲零食
// var pastry = [
//     { id: 1, imgPath:'-11', title:'', intro:'', price:'', oldPrice:''},
//     { id: 2, imgPath:'-12', title:'', intro:'', price:'', oldPrice:''},
//     { id: 3, imgPath:'-13', title:'', intro:'', price:'', oldPrice:''},
//     { id: 4, imgPath:'-14', title:'', intro:'', price:'', oldPrice:''},
//     { id: 5, imgPath:'-15', title:'', intro:'', price:'', oldPrice:''},
//     { id: 6, imgPath:'-16', title:'', intro:'', price:'', oldPrice:''},
//     { id: 7, imgPath:'-17', title:'', intro:'', price:'', oldPrice:''},
//     { id: 8, imgPath:'-18', title:'', intro:'', price:'', oldPrice:''},
//     { id: 9, imgPath:'-19', title:'', intro:'', price:'', oldPrice:''},
//     { id: 10, imgPath:'-20', title:'', intro:'', price:'', oldPrice:''},
// ]
// // 酒水茶饮
// var pastry = [
//     { id: 1, imgPath:'-11', title:'', intro:'', price:'', oldPrice:''},
//     { id: 2, imgPath:'-12', title:'', intro:'', price:'', oldPrice:''},
//     { id: 3, imgPath:'-13', title:'', intro:'', price:'', oldPrice:''},
//     { id: 4, imgPath:'-14', title:'', intro:'', price:'', oldPrice:''},
//     { id: 5, imgPath:'-15', title:'', intro:'', price:'', oldPrice:''},
//     { id: 6, imgPath:'-16', title:'', intro:'', price:'', oldPrice:''},
//     { id: 7, imgPath:'-17', title:'', intro:'', price:'', oldPrice:''},
//     { id: 8, imgPath:'-18', title:'', intro:'', price:'', oldPrice:''},
//     { id: 9, imgPath:'-19', title:'', intro:'', price:'', oldPrice:''},
//     { id: 10, imgPath:'-20', title:'', intro:'', price:'', oldPrice:''},
// ]
// // 厨房用品
// var pastry = [
//     { id: 1, imgPath:'-11', title:'', intro:'', price:'', oldPrice:''},
//     { id: 2, imgPath:'-12', title:'', intro:'', price:'', oldPrice:''},
//     { id: 3, imgPath:'-13', title:'', intro:'', price:'', oldPrice:''},
//     { id: 4, imgPath:'-14', title:'', intro:'', price:'', oldPrice:''},
//     { id: 5, imgPath:'-15', title:'', intro:'', price:'', oldPrice:''},
//     { id: 6, imgPath:'-16', title:'', intro:'', price:'', oldPrice:''},
//     { id: 7, imgPath:'-17', title:'', intro:'', price:'', oldPrice:''},
//     { id: 8, imgPath:'-18', title:'', intro:'', price:'', oldPrice:''},
//     { id: 9, imgPath:'-19', title:'', intro:'', price:'', oldPrice:''},
//     { id: 10, imgPath:'-20', title:'', intro:'', price:'', oldPrice:''},
// ]
// // 周末集市
// var pastry = [
//     { id: 1, imgPath:'-11', title:'', intro:'', price:'', oldPrice:''},
//     { id: 2, imgPath:'-12', title:'', intro:'', price:'', oldPrice:''},
//     { id: 3, imgPath:'-13', title:'', intro:'', price:'', oldPrice:''},
//     { id: 4, imgPath:'-14', title:'', intro:'', price:'', oldPrice:''},
//     { id: 5, imgPath:'-15', title:'', intro:'', price:'', oldPrice:''},
//     { id: 6, imgPath:'-16', title:'', intro:'', price:'', oldPrice:''},
//     { id: 7, imgPath:'-17', title:'', intro:'', price:'', oldPrice:''},
//     { id: 8, imgPath:'-18', title:'', intro:'', price:'', oldPrice:''},
//     { id: 9, imgPath:'-19', title:'', intro:'', price:'', oldPrice:''},
//     { id: 10, imgPath:'-20', title:'', intro:'', price:'', oldPrice:''},
// ]