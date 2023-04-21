var address = [
    { id: 1, username:'本来', address:'广东省 广州市 荔湾区 茶滘街道', phone:'19822323223', type:'1', active:'true'},
    { id: 2, username:'luxim', address:'上海市 市辖区 松江区 永丰街道', phone:'16660662345', type:'1', active:'false'},
    { id: 3, username:'oppjiz', address:'浙江省 台州市 天台县 白鹤镇', phone:'15432698745', type:'0', active:'false'},
]
// 
var ul = document.querySelector("ul.list"),
    dialog = document.querySelector(".dialog"),
    form = document.forms["address-dialog"];
// console.log(ul, dialog, form);
// 封装
function generateItemHtml(item) {
    return`
    <div class="prof">
        <h3>${item.username}</h3>
        <p>${item.address}</p>
        <span>手机号：${item.phone}</span>
        <span>${parseInt(item.type) === 1 ? '家庭地址' : '公司地址'}</span>
    </div>
    <div class="option">
        <!-- <h3>编辑</h3> -->
        <button data-id="${item.id}" class="btn-update">修改</button>
        <button data-id="${item.id}" class="btn-remove">删除</button>
        <!-- <p><a>设为默认</a></p> -->
    </div>
    `
}
// 函数
// 删除
function removeHandler(e) {
    // 是否删除
    if(!confirm("Delete confirm")) return;
    // 删数组address中的指定的对象
    var i = parseInt(e.target.dataset.id); // data-index="${index}"
    address.splice(i, 1);
    // 删button的li
    e.target.parentNode.parentNode.remove();
    // 提示
    // alert;
}
// 开始添加
function beginAddHandler() {
    // 修改模式
    form.id.value = 0;
    // 打开
    dialog.classList.add("show");
}
// 取消
function cancelHandler() {
    // 关闭dialog, 并重置表单
    dialog.classList.remove("show");
    form.reset();
}
// 开始更新
function beginUpdateHandler(e) {
    var i = parseInt(e.target.dataset.id);
    console.log(i);
    form.id.value = i;
    dialog.classList.add("show"); //打开
    // 回显
    form.username.value = address[i].username;
    form.address.value = regionPicker.set(address[i].address);
    form.phone.value = address[i].phone;
    console.log(address[i].type);
    form.type.value =  parseInt(address[i].type) === 1 ? '家庭地址' : '公司地址';
}
// save
function saveHandler() {
    console.log(2332);
    // 获取模式 ? -1 : 0/1/2/3...
    var i = parseInt(form.index.value);
    var newItem = {
        username: form.username.value,
        address: regionPicker.get(),
        phone: form.phone.value,
        type: form.type.value ? '家庭地址' : '公司地址',
    };
    console.log(newItem);
    // 更新数组
    i === 0 ? address.push(newItem) : address.splice(i, 1, newItem);
    // 更新页面li
    var newLi = document.createElement('li');
    newLi.innerHTML = generateItemHtml(newItem, i === -1 ? address.length - 1 : i);
    i === -1 ? ul.appendChild(newLi) : ul.children[i].replaceWith(newLi);
    // 关闭表单
    // alert(111);
    dialog.classList.remove("show");
    // alert(222);
    // 重置表单
    form.reset();
    // 提示成功
    console.log(newLi);
    console.log(address);
    alert(i === -1 ? '新增成功' : '修改成功');
}
function showData() {
    var str = '';
    address.forEach(function(item, i) {
        str += `<li>${generateItemHtml(item, i)}</li>`;
    });
    ul.innerHTML = str;
}

// 动态展示数据
showData();

// gsng
ul.onclick = function(e) {
    if(e.target.classList.contains("btn-remove")) removeHandler(e);
    if(e.target.classList.contains("btn-update")) beginUpdateHandler(e);
};
// document.querySelector("button.btn-add").onclick = beginAddHandler;
document.querySelector("div.btn-add").onclick = beginAddHandler;
document.querySelector("button.btn-cancel").onclick = cancelHandler;
document.querySelector("button.btn-save").onclick = saveHandler;
// console.log(beginAddHandler);
// console.log(cancelHandler);
// console.log(saveHandler);