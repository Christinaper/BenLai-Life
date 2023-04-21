// --------------------------------------------------------------------------------
// 选项卡
// 找到所有li
var lis = document.querySelectorAll("div.recommend-aside>ul>li");
// console.log(document.querySelectorAll("div.recommend-aside>ul>li"));
for (var i = 0, len = lis.length; i < len; i++) {
    // 二级
    lis[i].index = i;
    // console.log(i);
    lis[i].onmouseover = function() {
        // 避免重复点击/滑动
        if (this.classList.contains("recAsideActive")) return;
        // console.log(123);
        // console.log(document.querySelector("li.recAsideActive"));
        // 后面的class没有点
        document.querySelector("li.recAsideActive").classList.remove("recAsideActive");
        this.classList.add("recAsideActive");

        // 二级卡片
        // console.log(document.querySelector(".recommend-card-container-box>div.recCardShow"));
        document.querySelector(".recommend-card-container-box>div.recCardShow").classList.remove("recCardShow");
        document.querySelectorAll(".recommend-card-container-box>div")[this.index].classList.add("recCardShow");
    }
}
