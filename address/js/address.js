var list = [
    { id: 2, username:'本来', address:'广东省 广州市 荔湾区 茶滘街道', phone:'19822323223', type:'1', active:'true'},
    { id: 5, username:'luxim', address:'上海市 市辖区 松江区 永丰街道', phone:'16660662345', type:'1', active:'false'},
    { id: 10, username:'oppjiz', address:'浙江省 台州市 天台县 白鹤镇', phone:'15432698745', type:'0', active:'false'},
]
// 全局辅助变量
var ul = document.querySelector("ul.list"),
    dialog = document.querySelector("div.dialog")
    form = document.forms["address-dialog"];
// console.log(ul, dialog, form);
// 封装
{/* <span>${parseInt(item.type) === 1 ? '家庭地址' : '公司地址'}</span> */}
function generateItemHtml(item) {
    return`
    <div class="prof">
        <h3>${item.username}</h3>
        <p>${item.address}</p>
        <span>手机号：${item.phone}</span>

    </div>
    <div class="option">
        <!-- <h3>编辑</h3> -->
        <button data-id="${item.id}" class="btn-update">修改</button>
        <button data-id="${item.id}" class="btn-delete">删除</button>
        <!-- <p><a>设为默认</a></p> -->
    </div>
    `
}
// -------------------------------------------------------------------------------------------------
// 删除 + ADD + CANCEL + SAVE(UPDATE + ADD)
// 1. 删除
function removeHandler(e) {
    // 询问
    if(!confirm("delete???"));
    // 删除数组中
    var id = parseInt(e.target.dataset.id);
    // console.log(id);
    var i = list.findIndex(function(item) {
        return item.id === id;
    })
    list.splice(i, 1);
    // 删除所在li
    e.target.parentNode.parentNode.remove();
    // 提示成功
    alert("success!!!");
    // console.log(i, list);
    showData();
}
// 2. 开始添加
function beginAddHandler() {
    // 打开dialog
    dialog.classList.add("show");
    // dialog.style.opacity = 1;
    document.querySelector(".global-header-container").style.opacity = 0.3;
    document.querySelector(".add").style.opacity = 0.3;
    document.querySelector("ul.list").style.opacity = 0.3;
    document.querySelector(".footer").style.opacity = 0.3;
    document.body.style.overflow = "hidden";
    // 模式 0
    // <input type="hidden" name="id" value="0">
    form.id.value = 0;
}
// 3. 取消
function cancelHandler() {
    // 关闭dialog
    dialog.classList.remove("show");
    document.querySelector(".global-header-container").style.opacity = 1;
    document.querySelector(".add").style.opacity = 1;
    document.querySelector("ul.list").style.opacity = 1;
    document.querySelector(".footer").style.opacity = 1;
    document.body.style.overflow = "auto";
    // 清空重置表单
    form.reset();
}
// 4. 更新
function beginUpdateHandler(e) {
    // 找藏值id
    var id = parseInt(e.target.dataset.id);
    form.id.value = id; // 修改id的值
    // console.log(id);
    // 找下标 回显
    var i = list.findIndex(function(item) {
        return item.id === id;
    })
    console.log(i);
    // 回显
    dialog.classList.add("show")
    document.querySelector(".global-header-container").style.opacity = 0.3;
    document.querySelector(".add").style.opacity = 0.3;
    document.querySelector("ul.list").style.opacity = 0.3;
    document.querySelector(".footer").style.opacity = 0.3;
    document.body.style.overflow = "hidden";
    form.username.value = list[i].username;
    form.address.value = regionPicker.set(list[i].address);
    form.phone.value = list[i].phone;
}
// 5. save
function saveHandler() {
    // 判断模式
    var id = parseInt(form.id.value);
    console.log(id);
    // 获得index
    var i = list.findIndex(function(item) {
        return item.id === id;
    })
    // 检查数组是否为空，如果空则重置nextId的值为1
    nextId = (list.length === 0) ? 1 : list[list.length - 1].id;
    // 更新后的新数组 + 更新数组+++++++++
    var newItem = {
        id: id === 0 ? nextId + 1 : id, // 0 ? list[list.len - 1].id + 1 : id;
        username: form.username.value,
        address: regionPicker.get(),
        phone: form.phone.value
    }
    // console.log(newItem);
    //---------在尾部添加-------------替换
    id === 0 ? list.push(newItem) : list.splice(i, 1, newItem);
    // 更新li++++++++++++++++
    var newLi = document.createElement('li');
    newLi.innerHTML = generateItemHtml(newItem);
    id === 0 ? ul.appendChild(newLi) : ul.children[i].replaceWith(newLi);
    // 关闭dialog
    dialog.classList.remove("show");
    document.querySelector(".global-header-container").style.opacity = 1;
    document.querySelector(".add").style.opacity = 1;
    document.querySelector("ul.list").style.opacity = 1;
    document.querySelector(".footer").style.opacity = 1;
    document.body.style.overflow = "auto";
    // 重置表单
    form.reset();
    // 提示成功
    alert(id===0 ? "新增成功" : "修改成功");
    showData();
    console.log(list);
}


// -------------------------------------------------------------------------------------------------
// 渲染数据
function showData() {
    var htmlStr = '';
    // 缺省页
    // console.log(list.length);
    if(list.length === 0) {
        ul.innerHTML = `
        <li>
            <h3 class="error">暂无地址，请添加</h3>
            <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M49 180.12s-1.82 13.28 29.49 12.78c.09-1.08.07-10.63.07-14-5.14 0-23.94-.54-23.25-10.57.14-2.05-4.91-.78-4.91-.78L49 180.12ZM333.21 191.69l1.79 16.4c1 1.55 12.07 1.63 21.14 10.49v-11.5c-.01-8.47-17.87-14.24-22.93-15.39ZM359.82 233.38H42.52v18.41h317.3v-18.41Z" fill="#0C296E"/><path d="M199.23 92.6A140.782 140.782 0 0 0 58.45 233.38H340A140.78 140.78 0 0 0 199.23 92.6Z" fill="#F0F1F2"/><path d="M240.26 62.1v14.79a3.19 3.19 0 0 1-3.19 3.19h-15.85a3.09 3.09 0 0 1-3.09-3.09V58.91h18.94a3.192 3.192 0 0 1 3.19 3.19Z" fill="#FFC60A"/><path d="M225.48 72.21a5.763 5.763 0 0 0-5.88-5h-17.95V45.62h19.08a4.75 4.75 0 0 1 4.75 4.75v21.84Z" fill="#FFC60A"/><path d="m199.61 109.18-68.26 124.2H267.5l-67.89-124.2Z" fill="#0C296E"/><path d="M199.41 109.18c0 59.33-67.88 124.2-67.88 124.2v-56.31a67.884 67.884 0 0 1 67.88-67.89Z" fill="#fff" stroke="#0C296E" stroke-width=".8" stroke-linecap="round" stroke-linejoin="round"/><path d="M199.27 109.18c0 59.33 67.88 124.2 67.88 124.2v-56.31a67.883 67.883 0 0 0-41.901-62.722 67.878 67.878 0 0 0-25.979-5.168Z" fill="#fff" stroke="#0C296E" stroke-width=".8" stroke-linecap="round" stroke-linejoin="round"/><path d="M199.68 203.27c16.568 0 30-13.432 30-30 0-16.569-13.432-30-30-30-16.569 0-30 13.431-30 30 0 16.568 13.431 30 30 30Z" fill="#fff"/><path d="M199.68 203.27c16.568 0 30-13.432 30-30 0-16.569-13.432-30-30-30-16.569 0-30 13.431-30 30 0 16.568 13.431 30 30 30Z" stroke="#0C296E" stroke-width=".8" stroke-miterlimit="10"/><path d="M199.68 196.14c15.392 0 27.87-8.883 27.87-19.84s-12.478-19.84-27.87-19.84c-15.392 0-27.87 8.883-27.87 19.84s12.478 19.84 27.87 19.84Z" fill="#fff" stroke="#0C296E" stroke-width=".8" stroke-linecap="round" stroke-linejoin="round"/><path d="M199.6 157.68c14.53 0 26.46 7.88 27.84 18 .091-.707.138-1.418.14-2.13 0-12-12.53-23.41-28-23.41s-28 11.39-28 23.41c.003.712.049 1.423.14 2.13 1.41-10.12 13.35-18 27.88-18Z" fill="#00D6B9"/><path d="M170.27 184.87a4.239 4.239 0 0 1-4.22-4.22v-8.38a4.239 4.239 0 0 1 4.22-4.22 4.239 4.239 0 0 1 4.22 4.22v8.38a4.24 4.24 0 0 1-4.22 4.22ZM229.21 168.05h-.77a3.84 3.84 0 0 0-3.84 3.84v9.14a3.84 3.84 0 0 0 3.84 3.84h.77a3.84 3.84 0 0 0 3.84-3.84v-9.14a3.84 3.84 0 0 0-3.84-3.84Z" fill="#fff" stroke="#0C296E" stroke-width=".8" stroke-miterlimit="10"/><path d="M192.77 172.95a2.11 2.11 0 1 0 0-4.22 2.11 2.11 0 0 0 0 4.22ZM206.02 172.95a2.11 2.11 0 1 0 0-4.22 2.11 2.11 0 0 0 0 4.22Z" fill="#0C296E"/><path d="M160.15 173.63h-37.4v68.95h37.4v-68.95Z" fill="#fff" stroke="#0C296E" stroke-width=".8" stroke-miterlimit="10"/><path d="M155.02 177.93h-27.15v59.73h27.15v-59.73Z" fill="#00D6B9"/><path d="M272.28 173.63h-37.4v68.95h37.4v-68.95ZM197.48 250.82l-37.4-8.24v-68.95l37.4 8.24v68.95Z" fill="#fff" stroke="#0C296E" stroke-width=".8" stroke-miterlimit="10"/><path d="M267.16 177.93h-27.15v59.73h27.15v-59.73Z" fill="#00D6B9"/><path d="m197.48 250.82 37.4-8.24v-68.95l-37.4 8.24v68.95Z" fill="#fff" stroke="#0C296E" stroke-width=".8" stroke-miterlimit="10"/><path d="M274.59 191.69h-15.3a4.592 4.592 0 0 0-3.246 7.836 4.59 4.59 0 0 0 3.246 1.344h-3.15a4.592 4.592 0 0 0-3.246 7.836 4.59 4.59 0 0 0 3.246 1.344h.73a4.592 4.592 0 0 0-3.246 7.836 4.59 4.59 0 0 0 3.246 1.344H260a4.592 4.592 0 0 0-3.246 7.836A4.59 4.59 0 0 0 260 228.41H275.12a12.998 12.998 0 0 0 12.45-13v-10.72a13.001 13.001 0 0 0-12.98-13Z" fill="#fff" stroke="#0C296E" stroke-width=".8" stroke-linecap="round" stroke-linejoin="round"/><path d="M259.29 200.87h15.88M256.87 210.05h19.37M260.02 219.23h15.8" stroke="#0C296E" stroke-width=".8" stroke-miterlimit="10"/><path d="M123.43 191.69h15.3a4.592 4.592 0 0 1 3.246 7.836 4.59 4.59 0 0 1-3.246 1.344h3.15a4.592 4.592 0 0 1 3.246 7.836 4.59 4.59 0 0 1-3.246 1.344h-.73a4.592 4.592 0 0 1 3.246 7.836 4.59 4.59 0 0 1-3.246 1.344H138a4.592 4.592 0 0 1 3.246 7.836A4.59 4.59 0 0 1 138 228.41H122.88a12.998 12.998 0 0 1-12.45-13v-10.72a13 13 0 0 1 13-13Z" fill="#fff" stroke="#0C296E" stroke-width=".8" stroke-linecap="round" stroke-linejoin="round"/><path d="M138.73 200.87h-15.88M141.15 210.05h-19.37M138 219.23h-15.8" stroke="#0C296E" stroke-width=".8" stroke-miterlimit="10"/><path d="m193.2 244.86-27.16-6.01v-58.9l27.16 6v58.91ZM203.06 244.86l27.15-6.01v-58.9l-27.15 6v58.91Z" fill="#00D6B9"/><path d="M201.65 45.62h-4.32V92.6h4.32V45.62Z" fill="#0C296E"/><path d="M341.35 94.8h-84.29V154.53l9.67-10.13h74.62V94.8Z" fill="#fff" stroke="#0C296E" stroke-width=".8" stroke-miterlimit="10"/><path d="M313.66 94.8h-56.6V154.53l9.67-10.13h24.33l-.87-23.72 23.47-25.88Z" fill="#fff" stroke="#0C296E" stroke-width=".8" stroke-linecap="round" stroke-linejoin="round"/><path d="m306.31 95.14-19.9 19.84V144h9.95v-24.76l21.79-24.1h-11.84Z" fill="#FFC60A"/><path d="M301.03 114h40.32" stroke="#0C296E" stroke-width=".8" stroke-miterlimit="10"/><path d="M315.77 114v15.59l25.58 14.81" fill="#fff"/><path d="M315.77 114v15.59l25.58 14.81M286.41 114.75h-29.35M270.09 114.75v29.65" stroke="#0C296E" stroke-width=".8" stroke-miterlimit="10"/><path d="m291.47 122.37-6.91 14.41 6.87-3.42 6.85 3.42-6.81-14.41Z" fill="#0C296E"/><path fill-rule="evenodd" clip-rule="evenodd" d="M225.5 70.57a3.362 3.362 0 0 0-.285-1.276 3.362 3.362 0 0 0-1.857-1.77 3.348 3.348 0 0 0-1.288-.224h-3.94V77c0-3.62 3.94-3.12 3.94-3.12a3.35 3.35 0 0 0 3.43-3.31Z" fill="#0C296E"/><path d="M289.85 49.94A15.433 15.433 0 0 0 300 60.11a15.431 15.431 0 0 0-10.17 10.17 15.431 15.431 0 0 0-10.17-10.17 15.432 15.432 0 0 0 10.17-10.17h.02Z" fill="#FFC60A"/><path d="M146.7 173.63v-2" stroke="#00B798" stroke-width=".8" stroke-linecap="round" stroke-linejoin="round"/><path d="M146.7 169.75v-32.88" stroke="#00B798" stroke-width=".8" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3.76 1.88"/><path d="M146.7 135.93v-2h-2" stroke="#00B798" stroke-width=".8" stroke-linecap="round" stroke-linejoin="round"/><path d="M142.79 133.93h-39.17" stroke="#00B798" stroke-width=".8" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3.82 1.91"/><path d="M102.66 133.93h-2v-2" stroke="#00B798" stroke-width=".8" stroke-linecap="round" stroke-linejoin="round"/><path d="M100.66 130.04V96.87" stroke="#00B798" stroke-width=".8" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3.79 1.9"/><path d="M100.66 95.92v-2" stroke="#00B798" stroke-width=".8" stroke-linecap="round" stroke-linejoin="round"/><path d="M100.48 60.73a21.66 21.66 0 0 0-21.82 21.51A21.22 21.22 0 0 0 83 95.13h-.16l.72.71a21.804 21.804 0 0 0 3.13 3.09l10 9.91a5.272 5.272 0 0 0 7.38 0l9.75-9.62a21.841 21.841 0 0 0 2.92-2.69l.58-.67a21.24 21.24 0 0 0 4.91-13.6 21.658 21.658 0 0 0-21.75-21.53Zm.09 29.79a8.27 8.27 0 1 1 8.43-8.28 8.354 8.354 0 0 1-5.233 7.677 8.35 8.35 0 0 1-3.207.603h.01Z" fill="#0C296E"/><path d="M99.46 144c-16.85.07-37.11 5.3-44.33 10.47a13.61 13.61 0 0 0-5.76 9.92L49 180.88C49.63 169 72.48 160.81 99.43 159c0-7.06-.07-8.79.03-15ZM356.13 221.74c0 9.93-14.89 11.82-20.49 11.92-13 .24-40.43.21-55.36.07 45.71-6.36 56.58-11.07 64.94-15.14 4-1.94 10.91-6.78 10.91-11.69v14.84Z" fill="#3370FF"/></svg>
        </li>
        `
        return;
    }
    list.forEach(function(item) {
        htmlStr += `
            <li>${generateItemHtml(item)}</li>
        `
    });
    ul.innerHTML = htmlStr;
}


// 1. 动态展示数据
showData(); 
// 2. 实现所有按钮对应的功能
// ul里面的按钮————事件委托(删除 + 修改)处理多个
ul.onclick = function(e) {
    if(e.target.classList.contains("btn-delete")) removeHandler(e);
    if(e.target.classList.contains("btn-update")) beginUpdateHandler(e);
}
// // 新增
document.querySelector("div.btn-add").onclick = beginAddHandler;
// // 保存 + 取消
document.querySelector("button.btn-save").onclick = saveHandler;
document.querySelector("button.btn-cancel").onclick = cancelHandler;