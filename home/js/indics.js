// 点击事件
var indics = document.querySelectorAll("ul.indics>li");
for(var i = 0, len = indics.length; i < len; i++) {
    indics[i].onclick = function() {
        // 避免重复点击执行
        if(this.classList.contains("indicsActive")) return;
        console.log('只出现一次，避免重复点击');
        // 初始没有active，先判断再remove
        console.log(document.querySelector("ul.indics>li.indicsActive"));
        if(document.querySelector("ul.indics>li.indicsActive"))
        document.querySelector("ul.indics>li.indicsActive").classList.remove("indicsActive");
        this.classList.add("indicsActive");
    }
}
// 滚动
var commodity = document.querySelectorAll(".commodity");
console.log(commodity);
var ob = new window.IntersectionObserver(
    function(entry) {
        //监听器对象ob发现监听的目标元素达到临界位置
        console.log(entry[0].target.index);
        // 用isIntersectionObserve来判断上到下、下到上交叉；
        if(!entry[0].isIntersecting) return;
        // if(entry[0].isIntersecting) {
            var activeLi = document.querySelector("ul.indics>li.indicsActive");
            if(activeLi) activeLi.classList.remove("indicsActive");
            indics[entry[0].target.index].classList.add("indicsActive");
        // }
    },
    {
        root: null,
        // 上，右，下，左；注意加px， 中间一小缝
        rootMargin: "-30% 0px -50% 0px",
        threshold: [0] // 临界点，阈值 ———— 0到边界时触发上面的函数
    }
);
// 藏index, 为了知道是谁触发的
commodity.forEach(function(item, i) {
    item.index = i + 1;
    ob.observe(item);
    console.log();
})
// for(var i = 0, len = commodity.length; i < len; i++) {
//     commodity[i].index = i;
//     ob.observe(commodity[i]);
//     // console.log(ob.observe(commodity[i]));
// }

// 火箭
var rocket = document.querySelector(".rocket");
rocket.onclick = function() {
    // console.log(rocket);
    // console.log(document.querySelector(".rocket"));
    var timer = setInterval(function() {
        // console.log(123);
        var distance = document.documentElement.scrollTop || document.body.scrollTop;
        if(distance <= 40) { 
            window.scrollTo(0, 0); 
            clearInterval(timer); 
            rocket.classList.add("top");
            // console.log("消失");
        } else {
            rocket.classList.remove("top");
            // console.log("出现");
        }
        window.scrollTo(0, distance * 0.8);
        // console.log(distance);
    }, 20);
}
// 滚动到一定距离时显示侧边栏,并且当滚动到一定的位置的时候，消除激活
window.onscroll = function() {
    // console.log(document.documentElement.scrollTop || document.body.scrollTop);
    if((document.documentElement.scrollTop || document.body.scrollTop) > 600)
    rocket.classList.remove("top");
    if((document.documentElement.scrollTop || document.body.scrollTop) < 600) 
    rocket.classList.add("top");

};