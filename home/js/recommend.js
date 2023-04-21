// 新品上线
var newonline = [
    {imgPath:'newonline-1', title:'乌拉圭原切牛腩1kg', intro:'精细加工 天然草饲 醇香绵长', price:'89.90', oldPrice:'99.90'},
    {imgPath:'newonline-2', title:'百年渔港大连冷冻即食海参90g(4只)盒装', intro:'肉壁肥厚、参刺坚挺，解冻即食省事便利', price:'79.00', oldPrice:'108.00'},
    {imgPath:'newonline-3', title:'沃隆每日坚果A款25g*30袋', intro:'扁桃仁、腰果、核桃仁、蔓越莓干、蓝莓干、榛子仁', price:'118.00', oldPrice:'148.00'},
    {imgPath:'newonline-4', title:'【产地直发】湖北洪湖粉藕/2.5kg', intro:'洪湖青泥种植丨选用深水区莲藕 藕粉汤鲜', price:'59.00', oldPrice:'68.00'},
    {imgPath:'newonline-5', title:'谷饲雪花牛排(5片装)1kg', intro:'品质保证 肉嫩味香', price:'109.00', oldPrice:'219.00'},
]
var str = "";
newonline.forEach(function(item) {
    str += `
    <div class="recommend-card">
        <div class="r-c-great">
            <!-- <div class="rec-card_cart-icon">
                <?xml version="1.0" encoding="UTF-8"?><svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39 32H13L8 12H44L39 32Z" fill="#fff"/><path d="M3 6H6.5L8 12M8 12L13 32H39L44 12H8Z" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="13" cy="39" r="3" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="39" cy="39" r="3" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 22H30" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M26 26V18" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>        
            </div> -->
            <a href="../detail/detail.html">
                <div class="rec-card_img">
                    <img src="./img/newonline/${item.imgPath}.jpg" alt="">
                </div>
            </a>
            <div class="rec-card_info">
                <span class="rec-card_intro">${item.intro}</span>
                <h3 class="rec-card_title">${item.title}</h3>
                <span class="rec-card_price">
                    <?xml version="1.0" encoding="UTF-8"?><svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39 7H9C6.23858 7 4 9.23858 4 12V36C4 38.7614 6.23858 41 9 41H39C41.7614 41 44 38.7614 44 36V12C44 9.23858 41.7614 7 39 7Z" fill="#1ba784" stroke="#fff" stroke-width="4" stroke-linejoin="round"/><path d="M18 15L24 21L30 15" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 23H31" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 29H31" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 23V34" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    ${item.price}
                </span>
                <span class="rec-card_oldprice">${item.oldPrice}</span>
                <span class="rec-card_cart">
                    <?xml version="1.0" encoding="UTF-8"?><svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39 32H13L8 12H44L39 32Z" fill="#fff"/><path d="M3 6H6.5L8 12M8 12L13 32H39L44 12H8Z" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="13" cy="39" r="3" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="39" cy="39" r="3" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 22H30" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M26 26V18" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>        
                </span>
            </div>
        </div>
    </div>
    `
})
document.querySelector(".newonline").innerHTML = str;

// 好评如潮
var greatonline = [
    {imgPath:'greatonline-1', title:'西鲜记宁夏盐池滩羊羔羊蝎子500g', intro:'弹嫩鲜香 爽口无膻', price:'59.90', oldPrice:'69.90'},
    {imgPath:'greatonline-2', title:'西鲜记宁夏盐池滩羊羔羊肉片300g', intro:'弹嫩鲜香 爽口无膻', price:'59.00', oldPrice:'65.90'},
    {imgPath:'greatonline-3', title:'澳洲安格斯雪花牛排1kg(5片装)', intro:'品质保证 肉嫩味香', price:'159.00', oldPrice:'259.00'},
    {imgPath:'greatonline-4', title:'维他奶原味豆奶(250ml*24)', intro:'营养早餐维他奶，每天给你好开始 植物蛋白饮品', price:'65.00', oldPrice:'72.00'},
    {imgPath:'greatonline-5', title:'屈臣氏 苏打汽水 330ml*24', intro:'潮流之选，够汽才过瘾', price:'89.00', oldPrice:'129.00'},
]
var str = "";
for(var i = 0, len = greatonline.length; i < len; i++) {
    str += `
    <div class="recommend-card">
        <div class="r-c-great">
            <!-- <div class="rec-card_cart-icon">
                <?xml version="1.0" encoding="UTF-8"?><svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39 32H13L8 12H44L39 32Z" fill="#fff"/><path d="M3 6H6.5L8 12M8 12L13 32H39L44 12H8Z" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="13" cy="39" r="3" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="39" cy="39" r="3" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 22H30" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M26 26V18" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>        
            </div> -->
            <a href="../detail/detail.html">
                <div class="rec-card_img">
                    <img src="./img/greatonline/${greatonline[i].imgPath}.jpg" alt="">
                </div>
            </a>
            <div class="rec-card_info">
                <span class="rec-card_intro">${greatonline[i].intro}</span>
                <h3 class="rec-card_title">${greatonline[i].title}</h3>
                <span class="rec-card_price">
                    <?xml version="1.0" encoding="UTF-8"?><svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39 7H9C6.23858 7 4 9.23858 4 12V36C4 38.7614 6.23858 41 9 41H39C41.7614 41 44 38.7614 44 36V12C44 9.23858 41.7614 7 39 7Z" fill="#1ba784" stroke="#fff" stroke-width="4" stroke-linejoin="round"/><path d="M18 15L24 21L30 15" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 23H31" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 29H31" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 23V34" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    ${greatonline[i].price}
                </span>
                <span class="rec-card_oldprice">${greatonline[i].oldPrice}</span>
                <span class="rec-card_cart">
                    <?xml version="1.0" encoding="UTF-8"?><svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39 32H13L8 12H44L39 32Z" fill="#fff"/><path d="M3 6H6.5L8 12M8 12L13 32H39L44 12H8Z" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="13" cy="39" r="3" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="39" cy="39" r="3" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 22H30" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M26 26V18" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>        
                </span>
            </div>
        </div>
    </div>
    `
}
document.querySelector(".greatonline").innerHTML = str;