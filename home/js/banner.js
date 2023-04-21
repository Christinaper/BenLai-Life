// swiper
// 2s切换到下一张，鼠标进入停止，鼠标移开重新开始
// setInterval, 去掉原来的li(lis[index])的show, 给li加show
// 设置索引index++，标识第几个是show,三目0
var lis = document.querySelectorAll("ul.swiper>li");
// 找---指示器
var indics = document.querySelectorAll("ul.swiper-indicator>li");

var interval = 2000,
    timer = null,
    index = 0,
    maxIndex = lis.length - 1;
    minIndex = 0;
    // console.log(maxIndex);
    // console.log(lis.length);
    // console.log(swiperContainer);
timer = setInterval(function() {
    // console.log(lis[index]);
    lis[index].classList.remove("banner-show");
    // 灭灯
    indics[index].classList.remove("banner-active");
    // 三目判断是否到头
    index = index === maxIndex ? 0 : index + 1;
    // console.log(index);
    lis[index].classList.add("banner-show");
    // 亮灯
    indics[index].classList.add("banner-active");
    // console.log("没有被划过");
}, interval)

// 鼠标进入停止
// 找sc
// var swiperContainer = document.querySelector(".swiper-container");
var swiperContainer = document.querySelector(".prevnext");

swiperContainer.onmouseenter = function() {
    clearInterval(timer);
    // console.log("enter");
}
// swiperContainer.onmouseenter = clearInterval(timer);

// 移开重新开始
swiperContainer.onmouseleave = function() {
    // console.log('out');
    timer = setInterval(function() {
        // console.log(lis[index]);
        lis[index].classList.remove("banner-show");
        // 灭灯
        indics[index].classList.remove("banner-active");
        index = index === maxIndex ? 0 : index + 1;
        // console.log(index);
        lis[index].classList.add("banner-show");
        // 亮灯
        indics[index].classList.add("banner-active");
    }, interval)
}
// 绑定点击事件
for(var i = 0, len = indics.length; i < len; i++) {
    indics[i].indexNum = i;
    indics[i].onclick = function() {
        // 去掉
        indics[index].classList.remove("banner-active");
        lis[index].classList.remove("banner-show");
        // 全局变量index
        index = this.indexNum;
        indics[index].classList.add("banner-active");
        lis[index].classList.add("banner-show");
    }
}

// 两个耳朵的点击事件
// next
document.querySelector(".next").onclick = function() {
    console.log("next");
        // console.log(lis[index]);
        lis[index].classList.remove("banner-show");
        // 灭灯
        indics[index].classList.remove("banner-active");
        // 三目判断是否到头
        index = index === maxIndex ? 0 : index + 1;
        // console.log(index);
        lis[index].classList.add("banner-show");
        // 亮灯
        indics[index].classList.add("banner-active");
        // console.log("没有被划过");
}
// prev
document.querySelector(".prev").onclick = function() {
    console.log("prev");
        // console.log(lis[index]);
        lis[index].classList.remove("banner-show");
        // 灭灯
        indics[index].classList.remove("banner-active");
        // 三目判断是否到头
        index = index === minIndex ? maxIndex : index - 1;
        // console.log(index);
        lis[index].classList.add("banner-show");
        // 亮灯
        indics[index].classList.add("banner-active");
        // console.log("没有被划过");
}