var wine = [
    { id:'1', imgPath:'1', title:'【供货商直发】德国进口 凯尔特人(Barbarossa)小麦啤酒 500ml*24整箱装', intro:'顶部发酵全啤，酵母混浊的色泽和典型香味，带有水果风味的口感', price:'158', oldPrice:'168.00',sale:'69' },
    { id:'2', imgPath:'2', title:'【供货商直发】西班牙 银色活力半干白起泡葡萄酒 750ml', intro:'新鲜冰爽口感', price:'60', oldPrice:'128.00',sale:'50' },
    { id:'3', imgPath:'3', title:'【供货商直发】法国沙龙公爵干红葡萄酒750ml*6', intro:'性价比高，自饮送礼皆宜', price:'279', oldPrice:'',sale:'72' },
    { id:'4', imgPath:'4', title:'【供货商直发】英国 芝华士 12年苏格兰威士忌 700ml', intro:'苏格兰威士忌的名品之一，调和型威士忌的杰出代表', price:'236', oldPrice:'269',sale:'74' },
    { id:'5', imgPath:'5', title:'奥兰小红帽干红葡萄酒750ml', intro:'网红爆款，各大明星网红推荐款', price:'39', oldPrice:'99.00',sale:'57' },
    { id:'6', imgPath:'6', title:'【供货商直发】新西兰闪耀系列黑皮诺红葡萄酒750ml', intro:'入口顺滑', price:'199', oldPrice:'232.00',sale:'36' },
    { id:'7', imgPath:'7', title:'【供货商直发】西班牙王妃半甜白葡萄酒750ml', intro:'好喝的甜白葡萄酒，冰镇饮用', price:'79', oldPrice:'99.00',sale:'27' },
    { id:'8', imgPath:'8', title:'【供货商直发】西班牙王妃半甜红葡萄酒750ml', intro:'畅销款，扑克牌酒标设计，甜美', price:'79', oldPrice:'99.00',sale:'21' },
    { id:'9', imgPath:'9', title:'【供货商直发】德国进口 凯尔特人(Barbarossa)黑啤酒 500ml*24整箱装', intro:'特别强调麦芽的重口味，酒体饱满醇厚，入口柔顺', price:'158', oldPrice:'168.00',sale:'42' },
    { id:'10', imgPath:'10', title:'【供货商直发】西班牙 巴赫艾斯特吉摩半甜白 750ml ', intro:'畅销品，甜美，冰镇饮用', price:'118', oldPrice:'128.00',sale:'86' },
    { id:'11', imgPath:'11', title:'【供货商直发】澳大利亚 国王赤霞珠干红葡萄酒 750ml', intro:'巴罗萨谷单一园，异形瓶', price:'488', oldPrice:'499.00',sale:'93' },
    { id:'12', imgPath:'12', title:'【供货商直发】保加利亚 黑羊威士忌 700ml', intro:'口感柔和丰富', price:'159', oldPrice:'198.00',sale:'70' },
    { id:'13', imgPath:'13', title:'【供货商直发】法国 阿蒂侬之路干红葡萄酒750ml', intro:'来自法国酒厂，香气四溢果味十足', price:'78', oldPrice:'129.00',sale:'42' },
    { id:'14', imgPath:'14', title:'【供货商直发】智利忠诚的朋友葡萄酒礼盒套装', intro:'礼盒包装，里面有六款不同的酒', price:'398', oldPrice:'',sale:'35' },
    { id:'15', imgPath:'15', title:'【供货商直发】芝华士 18年苏格兰威士忌700ml', intro:'苏格兰威士忌的名品之一，调和型威士忌的杰出代表', price:'549', oldPrice:'599.00',sale:'14' },
    { id:'16', imgPath:'16', title:'【供货商直发】澳大利亚 史东美神霞多丽干白 750ml', intro:'好喝的干白 值得尝试', price:'128', oldPrice:'199.00',sale:'98' },
    { id:'17', imgPath:'0', title:'Driscolls怡颗莓-云南“巨无霸”蓝莓3盒装(125g/盒 果径18mm+)', intro:'顶部发酵全啤，酵母混浊的色泽和典型香味，带有水果风味的口感', price:'89', oldPrice:'99.00',sale:'1169' },
]

var listShow = wine;
var ul = document.querySelector("ul.wine-container");
var ob = null;
function showData() {
    var str = '';
    listShow.forEach(function(item) {
        str += `
        <div class="recommend-card">
            <div class="r-c-great">
                <!-- <div class="rec-card_cart-icon">
                    <?xml version="1.0" encoding="UTF-8"?><svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39 32H13L8 12H44L39 32Z" fill="#fff"/><path d="M3 6H6.5L8 12M8 12L13 32H39L44 12H8Z" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="13" cy="39" r="3" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="39" cy="39" r="3" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 22H30" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M26 26V18" stroke="#1ba784" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>        
                </div> -->
                <div class="rec-card_img">
                    <a href="../detail/detail.html">
                        <img data-img="./img/wine-${item.imgPath}.jpg" alt="">
                    </a>
                </div>
                <div class="rec-card_info">
                    <span class="rec-card_intro">${item.intro}</span>
                    <h3 class="rec-card_title">${item.title}</h3>
                    <span class="rec-card_price">
                        <?xml version="1.0" encoding="UTF-8"?><svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39 7H9C6.23858 7 4 9.23858 4 12V36C4 38.7614 6.23858 41 9 41H39C41.7614 41 44 38.7614 44 36V12C44 9.23858 41.7614 7 39 7Z" fill="#1ba784" stroke="#fff" stroke-width="4" stroke-linejoin="round"/><path d="M18 15L24 21L30 15" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 23H31" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 29H31" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 23V34" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        ￥${item.price}.00
                    </span>
                    <span class="rec-card_oldprice">${item.oldPrice}</span>
                    <p class="rec-card_intro">销量：${item.sale}</p>
                </div>
            </div>
        </div>
        `
    })
    ul.innerHTML = str;
	// 监听所有图片的交叉情况，动态加载图片资源
	ob = new IntersectionObserver(function(entries) {
		entries.forEach(function(item){
			if(item.isIntersecting) {
				// 如果图片滚动到达指定位置，src请求加载图片
				item.target.src = item.target.dataset.img;
			}
			// console.log(entries);
		})
		
	}, {root:null, rootMargin:'0px 0px 0px 0px', threshold:[0]})
	document.querySelectorAll("ul.wine-container img").forEach(function(item) {
		item.onload = function() {
			// 取消监听
			ob.unobserve(this);
		}
		ob.observe(item);
	})
}

var sortType = null, sortSwitch = true, sortDir = "asc", 
    // sortDir = 'asc', 
    sortKey = 'id'; 
    document.querySelectorAll("li.sort-item").forEach(function(item) {
    item.onclick = function() {
        // active
        if(this.classList.contains("active")) {
            // sortSwitch = !sortSwitch;
            this.classList.toggle("asc");
            this.classList.toggle("desc");
            // toggle
            sortDir = sortDir === "asc" ? "desc" : "asc";
        }
        // 保持排序方向不变，改变排序策略
        else {
            var currentActive = document.querySelector("li.sort-item.active");
            // 初始一个都未选中的写法
            // currentActive && currentActive.classList.remove("active");
            currentActive.classList.remove("active", "desc", "asc");
            this.classList.add("active", sortDir);
            sortKey = this.dataset.key;
        }
        // 取消ob
        ob.disconnect();
        // console.log(wine);
        // 排序
        wine.sort(function(a, b) {
            sortType =  sortDir === "asc" ? a[sortKey] - b[sortKey] : b[sortKey] - a[sortKey];
            return sortType;
        })
        // 更新
        showData();
    }
})

// 首次进入页面
showData();
// 搜索
document.forms["search"].onsubmit = function(e) {
	// 取消ob当前的所有交叉监听
	ob.disconnect();
	// 获取用户输入的搜索条件
	var words = this.words.value.trim();
	console.log(words);
	// 根据用户搜索更新listShow
	listShow = wine.filter(function(item) {
		return item.title.indexOf(words) !== -1;
	})
	// 调用showData更新页面
	showData();
	// 阻止表单默认提交刷新页面行为
	e.preventDefault();
}

// 跳转
// document.querySelectorAll(".rec-card_img").forEach(function(item) {
//     item.onclick = function() {
//         window.location.href = "../detail/detail.html";
//     }
// })


