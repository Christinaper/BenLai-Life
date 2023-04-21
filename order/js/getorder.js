var list = [
    { id: 1, username:'本来', address:'广东省 广州市 荔湾区 茶滘街道 成华路', phone:'138****0660', type:'1', active:'true'},
    { id: 2, username:'BIOS', address:'上海市 市辖区 松江区 永丰街道 正阳中路', phone:'188****5678', type:'1', active:'false'},
    { id: 3, username:'PNT', address:'浙江省 台州市 天台县 白鹤镇 白鹤路', phone:'187****2351', type:'0', active:'false'},
]
var cards = document.querySelectorAll(".getOrder-info-card");
cards.forEach(function(item) {
    item.onclick = function() {
        // 去掉上一个active，添加active
        if(this.classList.contains("active")) return;
        document.querySelector(".getOrder-info-card.active").classList.remove("active");
        this.classList.add("active");
        console.log(document.querySelector(".getOrder-info-card.active").dataset.id);
        var id = document.querySelector(".getOrder-info-card.active").dataset.id;
        // list.forEach(function(item) {
        document.querySelector(".getOrder-info-card.active").parentElement.nextElementSibling.innerText = list[id - 1].username + ' ' + list[id - 1].address + ',' + list[id - 1].phone;
        // })
    }
})