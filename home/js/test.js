var milk = [
    { 
        id: 1, 
        imgPath:'milk-11', 
        title:'三元利乐砖纯牛奶250ml*24', 
        subtitles: [
            { id: 1, title: '砖装牛奶' },
            { id: 2, title: '250ml*24装' },
            { id: 3, title: '奶香清新，滋味美' }
        ], 
        intro:'奶香清新，滋味美', 
        price:'67.50', 
        oldPrice:'74.90'
    },
    { 
        id: 2, 
        imgPath:'milk-12', 
        title:'伊利金典纯牛奶250ml*12', 
        subtitles: [
            { id: 1, title: '甄选牧场' },
            { id: 2, title: '250ml*12装' },
            { id: 3, title: '源自甄选牧场，高蛋白高品质' }
        ],
        intro:'源自甄选牧场，高蛋白高品质', 
        price:'49.90', 
        oldPrice:'79.00'
    },
    { 
        id: 3, 
        imgPath:'milk-13', 
        title:'光明 一只椰子牛乳饮品 250ml', 
        subtitles: [
            { id: 1, title: '椰子牛乳饮品' },
            { id: 2, title: '250ml装' },
            { id: 3, title: '清新椰香 香醇可口' }
        ],
        intro:'清新椰香 香醇可口', 
        price:'5.90', 
        oldPrice:'9.90'
    }
]

var str = "";
milk.forEach(function(item) {
    str += `
    <div class="commodity-card">
        <div class="card_img">
            <img src="./img/milk/${item.imgPath}.jpg" alt="">
        </div>
        <div class="card_info">
            <span class="card_subtitle">`;
                item.subtitles.forEach(function(subtitle) {
                    str += `<a href="#" data-id="${subtitle.id}">${subtitle.title}</a>`;
                });
                str += `
            </span>
            <h3 class="card_title">${item.title}</h3>
            <span class="card_intro">${item.intro}</span>
            <span class="card_price">${item.price}</span>
            <span class="card_oldprice">${item.oldPrice}</span>
        </div>
    </div>
    `;
});
document.querySelector(".milk-container").innerHTML = str;
