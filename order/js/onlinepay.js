var countdown = document.querySelector(".onlinepay-title>h3>span.countdown");
// 当前时间，x分钟后的时间
// 计算时间差毫秒
// 分钟 = 毫秒/60，秒钟 = 毫秒 % 60
// second -= 1;
// setInterval 1
// 判 0 ，
// ---------------------------------------------------------
// 获取当前时间戳
var now = Date.now(); // 不要忘记括号
console.log(now);
var seconds = 0.2 * 60; // 30分钟的秒数
// 结束时间戳
var then = now + seconds * 1000;
var diff = 0;
// 差值
var timer = setInterval(function() {
    diff = parseInt((then - Date.now()) / 1000);
    minutes =  Math.floor(diff / 60);
    seconds = diff % 60;
    // var countdown =  minutes + ":" + seconds;
    // if
    if(diff === 0) {
        clearInterval(timer);
        document.querySelector(".onlinepay-title").innerHTML = `
            <h3 class="error">订单已失效</h3>
            <p><a href="./order.html">返回订单页</a></p>
        `;
        document.querySelector(".onlinepay-main").innerHTML = `
        <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="a" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="35" y="31" width="331" height="238"><path d="M365.4 31H35v237.5h330.4V31Z" fill="#fff"/></mask><g mask="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M225.4 129.3c0-28-22.8-50.8-50.8-50.8-28 0-50.8 22.8-50.8 50.8 0 28 22.8 50.8 50.8 50.8 28 0 50.8-22.8 50.8-50.8Zm-86.6-.1c0 19.7 16.1 35.8 35.8 35.8 19.7 0 35.8-16.1 35.8-35.8 0-19.7-16.1-35.8-35.8-35.8-19.8 0-35.8 16.1-35.8 35.8Z" fill="#00D6B9"/><path fill-rule="evenodd" clip-rule="evenodd" d="m37.7 179.4 55.7 10.1-19-53.3-36.7 43.2Z" fill="#EBEBEB"/><path fill-rule="evenodd" clip-rule="evenodd" d="m44.4 177 43.6 7.9-14.9-41.7L44.4 177Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="m66.2 170.1 3.8.7 3.3-16.3-4.4-.8-2.7 16.4ZM68.951 176.583l.699-3.837-3.838-.699-.698 3.837 3.837.699Z" fill="#EBEBEB"/><path fill-rule="evenodd" clip-rule="evenodd" d="M111.701 36.3c-.2-.1-.3-.4-.3-.6-.1-.3-.4-.6-.6-.8-.2-.1-.3-.4-.5-.6l-.6-.6c0-.1-.3-.3-.5-.3 0-.1-.1-.2-.2-.2-.3-.2-.5-.4-.8-.5-.2-.1-.5-.3-.8-.6-.1 0-.4-.2-.6-.2-.4-.1-.8-.1-1-.3-.3 0-.6-.1-.8-.2h-2.8c-.1.2-.4.2-.6.2-.5.1-.8.1-1 .3-.3 0-.4.2-.6.5-.4 0-.7.1-1 .3-.2.1-.5.3-.7.5-.2.2-.5.4-.8.5-.1.2-.3.4-.5.6-.1.1-.1.3-.3.3L37 108.9c-.1.1-.2.2-.3.4-2.9 3.8-2.1 9.2 1.7 12.1 1.5 1.3 3.5 2 5.5 1.9h51v12.3c.1 4.7 3.9 8.5 8.6 8.6 4.9.2 9-3.7 9.1-8.6v-12.3H114.301c4.9 0 8.9-4 8.9-8.9 0-5-4.1-8.9-9-9h-1.6V39.7c0-.3-.2-.5-.2-.8 0-.4-.1-.7-.2-1 0-.1-.2-.4-.2-.6-.1-.4-.2-.7-.3-1ZM62.7 105.5h32.1V65.6l-32.1 39.9ZM325.2 81.9c0-28-22.8-50.8-50.8-50.8-28 0-50.8 22.8-50.8 50.8 0 28 22.8 50.8 50.8 50.8 28 0 50.8-22.8 50.8-50.8Zm-86.6-.1c0 19.7 16.1 35.8 35.8 35.8 19.7 0 35.8-16.1 35.8-35.8 0-19.7-16.1-35.8-35.8-35.8-19.8 0-35.8 16.1-35.8 35.8Z" fill="#00D6B9"/><path fill-rule="evenodd" clip-rule="evenodd" d="M364.7 244.9c0-.6-.4-1-1-1H49.4c-.6 0-1 .4-1 1s.4 1 1 1h314.3c.6 0 1-.4 1-1Z" fill="#142D6E"/><path d="M168.5 58.9c0 10.1 8.2 18.2 18.2 18.2 2.7 0 5.4-.6 7.7-1.7 5.9 4.4 13.7 3.4 13.7 3.4-2.9-.8-5.5-5.9-6.8-9.1 2.2-3 3.5-6.7 3.5-10.7 0-10.1-8.2-18.2-18.2-18.2s-18.1 8-18.1 18.1Z" stroke="#142D6E" stroke-width="2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M110.696 208.797c2.9 1 6.1 1 9 .1l6.1 3.9-.7-7.1c5.8-5.4 6.1-14.5.7-20.2-5.4-5.7-14.5-6.1-20.2-.7-1.8 1.5-3.1 3.5-3.8 5.8-2.6 7.5 1.4 15.6 8.9 18.2Z" fill="#FFC727"/><path fill-rule="evenodd" clip-rule="evenodd" d="m119.204 200.71 1.344-1.343-9.264-9.263-1.343 1.343 9.263 9.263Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="m111.353 200.638 9.263-9.263-1.343-1.344-9.263 9.263 1.343 1.344Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M185.8 62.2c.1-.4.3-.7.6-1 .3-.3.6-.5.9-.6.4-.2.7-.3 1.1-.4l1.2-.3c.4-.2.9-.3 1.3-.5s.8-.4 1.1-.7c.4-.3.7-.6.9-1 .3-.5.5-.9.6-1.4.3-.8.3-1.6.2-2.4-.1-.7-.4-1.3-.8-1.9-.4-.5-.8-.9-1.4-1.3-.6-.4-1.2-.6-1.8-.8-.5-.2-1.1-.3-1.7-.3-.6 0-1.2.1-1.7.2-.5.2-1 .4-1.5.7-.5.3-.9.7-1.3 1.1l1.8 2.1c.2-.2.5-.4.7-.6.2-.2.5-.4.8-.5.3-.1.6-.2.9-.2.4 0 .8 0 1.1.1.3.1.6.2.9.4.2.1.4.4.6.6.1.2.2.5.3.8 0 .3 0 .7-.1 1-.1.5-.4.9-.7 1.2-.4.3-.8.5-1.2.7-.4.2-.9.3-1.3.4-.4.1-.8.2-1.1.3-.8.1-1.5.6-2.1 1.2-.5.6-.8 1.3-1 2.1l2.7 1ZM184.3 67.9l1-3.5-2.8-.8-1 3.5 2.8.8Z" fill="#FFC727"/><path fill-rule="evenodd" clip-rule="evenodd" d="m88.1 216.9.2-13.2c0-.5-.4-1-1-1-.5 0-1 .4-1 1l-.2 13.2c0 .5.4 1 1 1 .5 0 1-.4 1-1ZM69.1 216.9c1.4-1.4 2.3-3.4 2.3-5.4 0-2.1-.8-4-2.2-5.5-2.9-3.1-7.8-3.1-10.8-.2-3.1 2.9-3.1 7.8-.2 10.8 1.4 1.4 3.4 2.3 5.4 2.3h.1c2 0 3.9-.7 5.4-2Zm-9.3-9.7c-2.2 2.2-2.3 5.8-.1 8 1.1 1.1 2.5 1.7 4 1.7s2.9-.5 4-1.6 1.7-2.5 1.7-4-.5-2.9-1.6-4-2.6-1.7-4.1-1.7c-1.4 0-2.9.5-3.9 1.6ZM71.901 238.201c.3-.5.2-1.1-.3-1.4l-29.9-18.3c-.5-.3-1.1-.2-1.4.3-.3.5-.2 1.1.3 1.4l29.9 18.3c.1.1.3.1.5.1.4 0 .7-.1.9-.4Z" fill="#FFC412"/><path fill-rule="evenodd" clip-rule="evenodd" d="M341.7 180.7c.4-.4.4-1 0-1.4l-10-10c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l10 10c.2.2.4.3.7.3.2 0 .5-.1.7-.3ZM346.504 205.404c-.2-.4-.6-.6-1-.5-.3 0-.5.2-.7.4-.1.1-.1.2-.1.5l-7.8 34.2c-.1.4.1.8.4 1 .3.2.8.2 1.1 0l21-13.2c.2-.1.3-.3.4-.6.1-.3 0-.6-.1-.8l-13.2-21ZM346 208.5l-6.8 29.5 18.2-11.4-11.4-18.1Z" fill="#03D5B7"/><path fill-rule="evenodd" clip-rule="evenodd" d="M218.1 192.5c-.5 2.2-1.3 36.5-1.3 36.5l84.5 6.8 8.3-46.3-29.5-52-37.3-4.8s-24.2 57.6-24.7 59.8Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="m280.2 136.501-37.3-4.8c-.4-.1-.8.2-1 .6-2.5 5.9-24.3 57.6-24.8 59.9-.5 2.3-1.2 33.2-1.3 36.7 0 .5.4 1 .9 1l84.6 6.8c.5 0 .9-.3.9-.7l8.3-46.3c.1-.3 0-.5-.1-.7l-29.5-52c-.1-.3-.4-.5-.7-.5Zm20.3 98.099 8-45-29.1-51.3-36-4.6c-9.7 23-24 57.1-24.4 58.9-.3 1.6-.9 21.7-1.2 35.4l82.7 6.6Z" fill="#142D6E"/><path fill-rule="evenodd" clip-rule="evenodd" d="M328.002 248.5c5.1-6.8-15-27.3-24.9-33-4.8-2.7-16.4-8.5-30.1-8.6-2.2 0-45.1 7.2-60.7 8.4 1.2-5.2 16-22.4 19.5-33.9l-2.6-45c-25.9 30.2-56.7 90.5-53.1 106.9.1 1 .4 1.9 1 2.8 7.2 11.8 53.1 9.5 58.2 9.2 14.3.7 20.1-.5 34.5-3.7 0 0 20.3 20.3 26.9 15.2 2.8-2.1 0-7-3.9-11.6 6 5.5 13 10.7 16.1 8.5 2.9-2.1 1.6-6.1-1.4-10.4 5.3 4.6 10.6 7.7 13.4 5 3.1-2.9-.2-8.5-4.6-13.8 4.8 3.9 9.7 6.7 11.7 4Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="m232.899 181.203-2.6-45c0-.4-.3-.8-.7-.9-.4-.1-.8 0-1.1.3-25.3 29.4-57.1 90.2-53.3 107.7.1 1.2.5 2.2 1.1 3.2 7.3 12.1 50.4 10.2 59.1 9.7 14.4.7 20.3-.5 34.2-3.6 3 2.9 16.6 15.9 24.6 15.9 1.2 0 2.3-.3 3.1-.8.9-.6 1.4-1.5 1.5-2.6.2-1.2-.2-2.6-1-4.3 5.6 4.3 9.5 5.5 11.8 3.9 2.2-1.6 2.6-4 1.3-7.4 5 3.5 8.6 4.1 10.9 1.9 2.3-2.2 2-5.6-.8-10.1 2.2 1.3 4.1 1.8 5.5 1.6 1.1-.2 1.9-.7 2.5-1.5.9-1.3 1.2-3 .7-5.1-1.9-9-17.4-24.4-26.1-29.4-4.5-2.6-16.5-8.6-30.5-8.8-.8 0-5.3.7-14.5 2.1-13.7 2.1-34.1 5.2-44.7 6.1 1.1-2.4 3.7-6.2 6.4-10.2 4.7-7 10.5-15.6 12.6-22.3v-.4Zm75.703 81.597c2-1.4 1.5-4.5-1.6-9-.3-.4-.2-1 .2-1.3.4-.299.9-.299 1.3 0 5.9 5.1 10.2 6.9 12.1 5.1 2.7-2.6-1.1-8.1-4.7-12.399-.3-.401-.3-1 0-1.301.4-.4.9-.4 1.3-.1 5.6 4.5 8.1 5 9.1 4.8.5-.1.8-.3 1.1-.7.6-.8.7-2 .4-3.5-1.8-8.3-17-23.4-25.2-28-4.4-2.5-16-8.3-29.6-8.5-.8 0-7 1-14.2 2.1-14.4 2.2-36.3 5.6-46.4 6.3-.3 0-.6-.1-.8-.3-.2-.2-.3-.6-.2-.9.6-2.4 3.5-6.7 7.2-12.2 4.6-6.8 10.3-15.2 12.3-21.6l-2.4-42.4c-26.2 31.5-54.6 88.9-51.2 104.2.1 1 .4 1.8.9 2.5 5.6 9.2 38.7 9.8 57.3 8.7h.1c14.3.7 20.1-.599 34.2-3.7 0-.1 0-.1.1-.1.3 0 .5.1.7.3 7.6 7.6 21.3 18.401 25.6 15.1.4-.3.6-.699.7-1.199.1-1-.3-3.601-4.7-8.901-.3-.4-.3-1 .1-1.4.4-.4 1-.4 1.4 0 10.5 9.601 13.9 9.101 14.9 8.4Z" fill="#142D6E"/><path fill-rule="evenodd" clip-rule="evenodd" d="M248.9 131.102c-5.7-1.6-26.6-6.8-32-1.7-6.5 6.1-28.8 40.3-29.8 52l34 20 32.9-68.9-5.1-1.4Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M221.1 202.296c.3 0 .6-.2.8-.3.2-.5.1-1.1-.4-1.4l-33.4-19.7c1.7-12 23.3-44.9 29.5-50.7 4.5-4.2 22.3-.6 31.1 1.9l5.1 1.4c.5.1 1-.2 1.2-.7.1-.5-.2-1-.7-1.2l-5.1-1.4c-4.4-1.3-26.9-7.3-33-1.5-6.6 6.2-29.1 40.5-30.1 52.6 0 .3.2.7.5.9l34 20c.2.1.3.1.5.1ZM316.8 244.8c.4-.4.4-1 0-1.4l-14-13.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l14 13.3c.2.2.5.3.7.3.2 0 .5-.1.7-.3ZM293.596 255.696c.3-.4.3-1-.1-1.4l-17.5-16.1c-.4-.3-1.1-.3-1.4.1-.3.4-.3 1 .1 1.4l17.5 16.1c.2.2.5.3.7.3.3 0 .6-.1.7-.4ZM308.4 253.9c.4-.4.4-1 0-1.4l-25.1-24c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l25.1 24c.2.2.5.3.7.3.3 0 .5-.1.7-.3Z" fill="#142D6E"/><path fill-rule="evenodd" clip-rule="evenodd" d="M242.295 80.197c-5 10.4-13.4 28.8-4.8 39.1 5.7 6.8 12 6.2 15.7 6.6l1.4 12.9s.5 13.2 8.8 16.3c8.9 2.5 14-6.6 14-6.6l-1.7-31.4s9.9 2.4 11-5.2c0 0 .7-3.2-1.1-5.1 0 0 10.3-24.9-8.4-34.3-18.7-9.4-29.9-2.7-34.9 7.7Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M236.798 119.897c5.1 6.2 10.9 6.6 14.7 6.8.3.1.5.1.8.1l1.3 12c0 .6.6 13.9 9.5 17.2 1.2.3 2.3.5 3.4.5 7.5 0 11.7-7.4 12-7.6.1-.1.1-.3.1-.5l-1.7-30.1c1.9.3 5.4.4 8-1.3 1.6-1.1 2.6-2.7 2.9-4.8.1-.2.8-3.3-.9-5.6 1.4-3.8 8.6-26.1-9.1-35-9-4.6-17-5.7-23.7-3.5-5.4 1.8-9.8 5.8-12.6 11.6-6.6 13.4-13.1 30.1-4.7 40.2Zm39.601 28.203-1.7-31.1c0-.3.1-.6.4-.8.2-.2.6-.3.9-.2 0 0 4.8 1.1 7.7-.8 1.2-.8 1.9-1.9 2.1-3.6 0-.1.6-2.8-.8-4.3-.3-.3-.3-.7-.2-1.1.4-1 9.7-24.2-8-33.1-5.9-2.7-11.2-4.2-15.9-4.2-2.3 0-4.4.3-6.4 1-6.1 2.1-9.6 6.9-11.4 10.6-3.7 7.6-13.6 27.6-4.9 38 4.6 5.6 9.6 5.9 13.3 6.1.6 0 1.2.1 1.7.1.5.1.8.4.9.9l1.4 12.9c0 .2.6 12.6 8.2 15.4 7.3 2.1 11.9-4.4 12.7-5.8Z" fill="#142D6E"/><path fill-rule="evenodd" clip-rule="evenodd" d="M219.2 102s7.1 11.3 15.9 14.1c0 0-3.7-12.7 2.8-27.2L219.2 102ZM273.4 102.103s-5.3 6.6-2.5 9.1c2.5 2.3 5.9 1.7 11.5-5.8 0 0 1.7.7 2.5 1.8 2.2 3.1 4.4 9.4-8.5 10.1v13.3s18 9.9 30.8 3.2c0 0 16.2-67.4-28.5-71.4-.1.1-23.3-14.9-39.9 12.3 0 0 13.2 12.4 27.9 3.3 0 0-7.2 19.7 6.7 24.1Z" fill="#142D6E"/><path fill-rule="evenodd" clip-rule="evenodd" d="M277.99 117.084a4.696 4.696 0 0 0 3.64 5.562 4.694 4.694 0 0 0 5.562-3.639 4.696 4.696 0 0 0-3.64-5.562 4.694 4.694 0 0 0-5.562 3.639Z" fill="#FFC412"/><path fill-rule="evenodd" clip-rule="evenodd" d="M234.975 87.203a6.594 6.594 0 0 0 5.111 7.81 6.593 6.593 0 0 0 7.81-5.111 6.593 6.593 0 0 0-5.111-7.81 6.594 6.594 0 0 0-7.81 5.11Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M248.796 89.998c.8-4.1-1.8-8.1-5.9-9-2-.4-4 0-5.7 1.1-1.7 1.1-2.9 2.8-3.3 4.8-.8 4.1 1.8 8.1 5.9 9 .6.1 1.1.2 1.6.2 3.5 0 6.7-2.4 7.4-6.1ZM236 87.4c-.6 3 1.3 6 4.3 6.6 3 .6 6-1.3 6.6-4.3.6-3-1.3-6-4.3-6.6-.5-.1-.8-.1-1.2-.1-1.1 0-2.1.3-3 .9-1.2.8-2.1 2.1-2.4 3.5Z" fill="#142D6E"/><path fill-rule="evenodd" clip-rule="evenodd" d="M240.288 86.2a1.699 1.699 0 1 0 .025 3.4A1.698 1.698 0 0 0 242 87.887a1.698 1.698 0 0 0-1.712-1.687ZM236.896 84.296c.4-.3.5-1 .2-1.4l-2.1-2.8c-.3-.4-1-.5-1.4-.2-.4.3-.5 1-.2 1.4l2.1 2.8c.2.3.5.4.8.4.2 0 .5-.1.6-.2ZM239.305 83.404c.5-.1.9-.7.8-1.2l-.8-4.6c-.1-.5-.7-.9-1.2-.8-.5.1-.9.7-.8 1.2l.8 4.6c.1.5.5.8 1 .8h.2Z" fill="#142D6E"/><path fill-rule="evenodd" clip-rule="evenodd" d="M251.596 94.88a6.593 6.593 0 0 0 5.111 7.809 6.594 6.594 0 0 0 7.81-5.11 6.594 6.594 0 0 0-5.111-7.81 6.593 6.593 0 0 0-7.81 5.11Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M265.498 97.696c.8-4.1-1.8-8.1-5.9-9-4.1-.8-8.1 1.8-9 5.9-.4 2 0 4 1.1 5.7 1.1 1.7 2.8 2.9 4.8 3.3.6.1 1.1.2 1.6.2 3.5 0 6.7-2.4 7.4-6.1ZM252.596 95.1c-.3 1.5 0 3 .8 4.2.8 1.2 2.1 2.1 3.5 2.4 3 .6 6-1.3 6.6-4.3.6-3-1.3-6-4.3-6.6-.3-.1-.7-.1-1.1-.1-2.6 0-4.9 1.8-5.5 4.4Z" fill="#142D6E"/><path fill-rule="evenodd" clip-rule="evenodd" d="M257.087 93.4a1.698 1.698 0 0 0-1.687 1.712 1.699 1.699 0 1 0 1.687-1.712ZM265.599 94.7l3.1-1.7c.5-.3.7-.9.4-1.4-.3-.5-.9-.7-1.4-.4l-3.1 1.7c-.5.3-.7.9-.4 1.4.2.3.5.5.9.5.2 0 .3-.1.5-.1ZM263.801 92.201l2.6-3.9c.3-.5.2-1.1-.3-1.4-.5-.3-1.1-.2-1.4.3l-2.6 3.9c-.3.5-.2 1.1.3 1.4.2.1.4.2.6.2.3 0 .6-.2.8-.5Z" fill="#142D6E"/><path fill-rule="evenodd" clip-rule="evenodd" d="M245.8 94.4s-3.4.1-3.6 1.8c-.2 1.7 1.1 2.7 3.4 2.9l3.4-10.3-3.2 5.6Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M241.195 95.999c-.1 1 .1 1.8.7 2.5.8.9 2 1.4 3.7 1.5.6 0 1-.4 1-.8.1-.6-.3-1.1-.9-1.1-1-.1-1.8-.4-2.2-.8-.3-.3-.3-.6-.3-1 .1-.5 1.5-.9 2.6-.9.3 0 .6-.2.8-.5l3.2-5.6c.3-.5.1-1.1-.4-1.4-.5-.3-1.1-.1-1.4.4l-2.9 5.1c-1.2.1-3.7.6-3.9 2.6ZM264.305 87.805c.09-.6-.41-1-.91-1.1-.09 0-3.5-.4-5-4.2-.2-.6-.8-.8-1.3-.6-.6.19-.79.8-.6 1.3 1.9 5 6.4 5.5 6.7 5.5.5 0 .9-.41 1.11-.9ZM248.801 80.301c.4-.3.6-.9.3-1.4-.3-.4-.9-.6-1.4-.3 0 0-3 1.8-6.5-.4-.5-.3-1.1-.2-1.4.3-.3.5-.2 1.1.3 1.4 1.7 1.1 3.3 1.4 4.7 1.4 2.3 0 3.8-.9 4-1ZM246.301 108.201c.5 0 .9-.3.9-.6.1-.3.6-2.4-.2-3.9-.4-.6-1-1.1-1.7-1.3-.5-.1-1.1.2-1.2.7-.1.5.2 1.1.7 1.2.3.1.4.2.5.4.4.6.1 1.9 0 2.3-.1.5.2 1 .7 1.2h.3Z" fill="#142D6E"/><path fill-rule="evenodd" clip-rule="evenodd" d="m281.8 64.1 1.1-1.7-3.5-1.7-2.3.9 4.7 2.5Z" fill="#E2A40A"/><path fill-rule="evenodd" clip-rule="evenodd" d="M283.1 105.201s15.9-9.5 10.5-39.8c0 0-3.7-8.2-14.2-4.7 0 0 18.5 20.8 3.7 44.5ZM199.32 192.907l32.379-70.742-14.548-6.659-32.38 70.742 14.549 6.659ZM231.5 103.997c-8.2-3.7-11.5 5.7-11.5 5.7l14.6 6.6s5.1-8.6-3.1-12.3Z" fill="#FFC412"/><path fill-rule="evenodd" clip-rule="evenodd" d="m233.751 121.023 1.873-4.091-17.003-7.783-1.873 4.092 17.003 7.782ZM231.613 125.568l1.873-4.091-17.004-7.783-1.872 4.092 17.003 7.782Z" fill="#A6A6A6"/><path fill-rule="evenodd" clip-rule="evenodd" d="m193.1 187.3-2.4 1.4-.5-2.8-2.4 1.4-.5-2.8c-.1.3-2.5 1.7-2.5 1.7l.7 12.9.2 4.3 3.4-2.6 10.3-8-.5-2.8s-2.4 1.4-2.4 1.5l-.5-2.8-2.4 1.4-.5-2.8Z" fill="#FFC727"/><path fill-rule="evenodd" clip-rule="evenodd" d="m185.5 199.1.2 4.3 3.4-2.6 10.3-8-.5-2.8s-2.4 1.4-2.4 1.5l-.5-2.8-2.4 1.4-.5-2.8-2.4 1.4-.5-2.8-2.4 1.4-.5-2.8c-.1.3-2.5 1.7-2.5 1.7l.7 12.9Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="m185.7 203.4 3.4-2.6-3.6-1.6.2 4.2Z" fill="#142D6E"/><path fill-rule="evenodd" clip-rule="evenodd" d="m315.799 163.103-22.4 33.5c-.4.2-14-9.1-26.4-18.1-7.4-5.4-14-11.9-19.4-19.2-5.7-7.6-12.4-16.3-15.8-18.7-6.7-4.8-22.2-11.6-26.3-8.2-4.1 3.5-.5 7.7-.5 7.7-2.4-.1-4.7.7-6.5 2.1-3.2 2.7-.3 8.9-.3 8.9-2.5.4-3.5.1-5.3 1.8-2.8 2.9-.7 9.5-.7 9.5-2 1.7-3.4 4-3.9 6.6-1 7 8.8 12.2 14 16.6 7.7 6.4 22.2 13.7 25.9 15.6 12.2 6.8 72.3 40 82.8 25.2 10.9-15.3 14.4-40.1 4.8-63.3Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M198.902 151.705c.1-.3.1-.6 0-.9-.7-1.6-2.1-5.9 0-7.7 1.7-1.3 3.8-2 5.9-1.9.4 0 .7-.2.9-.6.2-.4.2-.8-.1-1.1 0 0-1.3-1.6-1.2-3.5.1-1 .6-2 1.6-2.8 3.3-2.8 17.9 3.2 25 8.3 2.7 1.9 8 8.3 15.6 18.5 5.5 7.4 12.1 13.9 19.6 19.4 5.7 4.1 12.2 8.7 17.8 12.5 8.9 6.1 9.1 6 9.7 5.7.5-.2.7-.8.5-1.3-.1-.3-.4-.5-.7-.6-1.5-.7-13.8-8.9-26.1-17.9-7.4-5.4-13.8-11.8-19.2-19-7.8-10.5-13.1-16.8-16-18.9-6-4.3-22.6-12.3-27.5-8.2-1.4 1.2-2.2 2.6-2.3 4.2-.1 1.3.3 2.5.7 3.4-1.9.3-3.8 1.1-5.4 2.3-2.8 2.4-1.7 6.7-1 8.8h-.3c-1.5.2-2.7.3-4.3 1.9-2.6 2.8-1.6 8.1-1.1 9.9-1.9 1.8-3.2 4.2-3.7 6.8-.8 6.1 5.6 10.9 10.8 14.7 1.3.9 2.6 1.8 3.6 2.7 7.4 6.1 20.4 12.8 25.3 15.3l.7.4h.1c21.4 12 55.2 29.1 73.4 29.1 4.9 0 8.7-1.3 10.6-4.2 12.1-17 14.1-42.2 4.9-64.3-.2-.5-.8-.7-1.3-.5-.5.2-.7.8-.5 1.3 8.7 21.2 6.8 46.2-4.7 62.4-6.4 9-36.9-.6-81.5-25.5 0-.1-.1-.1-.1-.1l-.8-.4c-4.4-2.2-17.7-9-24.9-15-1.1-.9-2.4-1.8-3.7-2.8-5-3.7-10.7-7.9-10-12.8.4-2.4 1.6-4.5 3.5-6 .3-.3.4-.7.3-1.1-.5-1.7-1.4-6.5.5-8.5 1.1-1.1 1.7-1.1 3.1-1.3.4 0 1-.1 1.6-.2.3 0 .6-.2.7-.5Z" fill="#142D6E"/><path fill-rule="evenodd" clip-rule="evenodd" d="m293.2 173.4-1.5 19.2c3.5 11 32.3 15.2 32.3 15.2s6.2-33.5 3.5-46.2c-2.6-12.7-14.8-15.5-14.8-15.5l-35.7-9.8 16.2 37.1Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M293.501 172.401c-.6-.1-1.1.3-1.1.9l-1.5 19.2c-.1.1 0 .3 0 .4 3.6 11.5 31.9 15.7 33.1 15.9h.1c.4 0 .9-.3 1-.7.3-1.4 6.2-33.9 3.5-46.6-2.7-13.2-15.4-16.3-15.5-16.3l-35.7-9.8c-.5-.1-1.1.2-1.2.7-.1.5.2 1.1.7 1.2l35.7 9.8c.5.1 11.6 2.8 14.1 14.7 2.4 11.1-2.3 39.2-3.3 44.8-4.9-.8-27.3-5-30.5-14.1l1.5-19c.1-.6-.3-1.1-.9-1.1ZM227.405 154.305c.5-.3.5-1 .2-1.4-9.9-12.9-22-13.8-22.5-13.8-.6-.1-1 .3-1.1.9-.1.6.3 1.1.9 1.1.1 0 11.7.9 21 13 .2.3.5.4.8.4.2 0 .5-.1.7-.2ZM225.701 167.801c.4-.4.4-1 0-1.4-11-11.4-26.5-16-27.2-16.2-.5-.1-1 .2-1.2.7-.1.5.2 1 .7 1.2.1 0 15.6 4.7 26.3 15.7.2.2.4.3.7.3.2 0 .5-.1.7-.3ZM211.3 172.7c.4-.4.4-1 0-1.4-8-7.9-18.7-9.3-19.2-9.4-.5 0-1 .4-1.1.9 0 .5.4 1 .9 1.1.2 0 10.6 1.4 18.1 8.8.2.2.4.3.7.3.3 0 .5-.1.6-.3Z" fill="#142D6E"/><path fill-rule="evenodd" clip-rule="evenodd" d="m330.1 128.6 35.3-13.2-29.1-24-6.2 37.2Z" fill="#EBEBEB"/><path fill-rule="evenodd" clip-rule="evenodd" d="m333.1 125 27.7-10.4-22.9-18.8-4.8 29.2Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="m343.2 113.5 2.4-.9-3.7-10.4-2.8 1.1 4.1 10.2ZM344.637 117.264l2.434-.913-.914-2.435-2.434.914.914 2.434Z" fill="#EBEBEB"/><path fill-rule="evenodd" clip-rule="evenodd" d="M123.7 252c-11.76 0-21.3 1.79-21.3 4s9.54 4 21.3 4c11.76 0 21.3-1.79 21.3-4s-9.54-4-21.3-4Z" fill="#03D5B7"/><path fill-rule="evenodd" clip-rule="evenodd" d="m105.5 254.799 10.8 1.2 3.9-2.3-7.8-9.4c-.834-.749-5.087 7.149-6.468 9.713-.258.48-.416.773-.432.787Z" fill="#03D5B7"/><path fill-rule="evenodd" clip-rule="evenodd" d="M103.9 251.3c-.5.7-1.5 1-2.4.9-3.1-.6-7.2-.9-11.7-.9-9.9 0-17.9 1.7-17.9 3.8 0 2.1 8 3.8 17.9 3.8 9.4 0 17.1-1.6 17.8-3.5.1-.3 3.3-8.4 3.9-9.2.7-1 .7-2.2.7-2.2s-6.6 5-8.3 7.3Z" fill="#03D5B7"/><path fill-rule="evenodd" clip-rule="evenodd" d="m126.4 220.7-6.1 32.3 44.6 3c5.1-6.4 6.1-14 4.2-22.4l-42.7-12.9Z" fill="#FDFEFF"/><path fill-rule="evenodd" clip-rule="evenodd" d="M170.2 233.299c-.1-.3-.4-.6-.7-.7l-42.7-12.9c-.3-.1-.6 0-.8.1-.3.2-.4.4-.5.7l-6.1 32.3c0 .3 0 .6.2.8.2.2.4.4.7.4l44.6 3c.3 0 .6-.2.9-.5 5-6.3 6.5-14.1 4.4-23.2ZM164.4 255c4.3-5.7 5.6-12.4 3.8-20.6L127.1 222l-5.6 30.1 42.9 2.9Z" fill="#142D6E"/><path fill-rule="evenodd" clip-rule="evenodd" d="m123.397 222.4-3.3.3-7.6 23.8c-.2.6.1 1.3.6 1.7l4.8 2.7-.6 3.1 5.6 1.1c4.4-11.8 6.8-23.5 6.6-35l-5.5-1.1-.6 3.4Z" fill="#FDFEFF"/><path fill-rule="evenodd" clip-rule="evenodd" d="m123.002 218.8-.4 2.6-2.5.3c-.3.1-.7.3-.8.7l-7.6 23.8c-.4 1.1.1 2.3 1.1 2.9l4.2 2.4-.5 2.4c0 .2.1.5.2.7.1.2.3.4.6.4l5.6 1.1h.2c.4 0 .8-.2.9-.7 4.6-12.2 6.8-24.1 6.6-35.4 0-.5-.3-.9-.8-1l-5.6-1.1c-.3 0-.6 0-.8.2-.2.2-.4.4-.4.7Zm-4.501 31.2c.4.2.6.6.5 1.1l-.4 2.2 3.8.7c4.2-11.4 6.3-22.5 6.2-33.1l-3.8-.7-.4 2.3c-.1.4-.4.8-.9.8l-2.6.3-7.4 23.2c-.1.2 0 .4.2.5l4.8 2.7Z" fill="#142D6E"/><path fill-rule="evenodd" clip-rule="evenodd" d="M142 224.5c-.7 10.4-2.7 20.6-5.7 30.6l13.5 1.1c3-9.7 5-18.9 5.2-27.6l-13-4.1Z" fill="#FDFEFF"/><path fill-rule="evenodd" clip-rule="evenodd" d="M135.504 254.804c-.1.3-.1.6.1.9.1.2.4.4.7.4l13.6 1.1c.4 0 .8-.3 1-.7 3.3-10.6 5-19.7 5.2-27.9 0-.5-.3-.9-.7-1l-12.9-4.1c-.3-.1-.7-.1-.9.1-.2.2-.4.5-.4.8-.8 10.3-2.7 20.5-5.7 30.4Zm13.596.396c3-9.8 4.6-18.3 4.9-25.9l-11-3.5c-.8 9.6-2.6 19.1-5.3 28.4l11.4 1Z" fill="#142D6E"/><path fill-rule="evenodd" clip-rule="evenodd" d="m146.7 244.3 2-.5c1.5-.4 2.4-1.8 2.2-3.3l-7.7 2c.5 1.4 2 2.2 3.5 1.8ZM150.804 239.797c-.5-1.4-2.1-2.2-3.5-1.8l-2 .5c-1.5.4-2.5 1.8-2.3 3.3l7.8-2Z" fill="#03D5B7"/></g></svg>
        `
        return;
    }
    console.log(diff);
    countdown.innerText = minutes + ":" + seconds;
}, 1000)


