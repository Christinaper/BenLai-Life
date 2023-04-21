// var usr = document.querySelector("input.usr"),
//     pwd = document.querySelector("input.pwd"),
//     login = document.querySelector("input.btn-login");

// function verify() {
//     // 非空验证 + 长度验证
//     if(this.value.length >= 2 && this.value.length <= 10) { 
//         this.nextElementSibling.nextElementSibling.innerText = '';
//         return;
//     }

//     this.nextElementSibling.nextElementSibling.innerText = (this.value.length === 0) ? "*不能输入为空" : "*请输入2-10位";
// }
var agreement = document.querySelector("input.agreement"),
    btnRegister = document.querySelector("input.btn-register"),
    validates =  document.querySelectorAll(".validate");


validates.forEach(function(item) {
    item.onblur = function() {
        var reg = new RegExp(this.dataset.reg);
        if(!reg.test(this.value)) {
            this.nextElementSibling.nextElementSibling.innerText = this.dataset.msg;
            this.classList.remove("valid");
            btnRegister.disabled = true;
        } else {
            this.nextElementSibling.nextElementSibling.innerText = '';
            this.classList.add("valid");
            console.log(agreement.checked);
            // console.log(document.querySelectorAll(".validate:not(.valid)").length === 0 && agreement.checked );
            btnRegister.disabled = document.querySelectorAll(".validate:not(.valid)").length === 0 && agreement.checked ? false : true; 
        }
    }
})