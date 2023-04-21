var countdown = document.querySelector("button.btn-captcha");
// 当前时间，x分钟后的时间
// 计算时间差毫秒
// 分钟 = 毫秒/60，秒钟 = 毫秒 % 60
// second -= 1;
// setInterval 1
// 判 0 ，
// ---------------------------------------------------------
// 差值
function startTimer() {
    // 获取当前时间戳
    var now = Date.now(); // 不要忘记括号
    // console.log(now);
    var seconds = 31;
    // 结束时间戳
    var then = now + seconds * 1000;
    var diff = 0;
    var timer = setInterval(function() {
        countdown.disabled = true;
        diff = parseInt((then - Date.now()) / 1000);
        minutes =  Math.floor(diff / 60);
        seconds = diff % 60;
        if(diff === 0) {
            clearInterval(timer);
            countdown.innerText = "重发验证码";
            countdown.disabled = false;
            return;
        }
        // console.log(diff);
        countdown.innerText = seconds + "s 后重发";
    }, 1000)
}
countdown.onclick = startTimer;

