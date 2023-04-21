var list = [
    // id只要唯一就可以
    { id: 2, imgPath:"1", title:"【产地直发】湖北秭归中华红橙2.5kg (单果70-80)", price: 55, count: 5, maxCount: 5, stock: 23, shipping: 30, merchant: 25 },
    { id: 23, imgPath:"2", title:"Driscoll's怡颗莓-云南“巨无霸”蓝莓3盒装(125g/盒 果径18mm+)", price: 89, count: 1, maxCount: 15, stock: 50, shipping: 35, merchant: 25 },
    { id: 24, imgPath:"3", title:"【产地直发】秭归中华红橙2.5kg(60-70mm)", price: 45, count: 1, maxCount: 20, stock: 23, shipping: 25, merchant: 25 },
]

// ---------------------------------------------------------------------
// 购物车功能实现的辅助函数
function updateAmountAndTotal() {
    // 找出tbody中所有选中的checkbox
    var checkedItems = document.querySelectorAll("tbody i.checkbox.checked");
    // 循环遍历每条勾选购物记录的购买数量和
    var amount = 0, total = 0;
    checkedItems.forEach(function(item) {
        // 找出勾选的购物记录对应的id
        // console.log(item);
        var id = parseInt(item.parentNode.parentNode.dataset.id);
        // 用id找出list中对应的购物记录
        var target = list.find(function(item) {
            return item.id === id;
        });
        // 购物记录的count值进行累加
        amount += target.count;
        total += target.count * target.price;
    })
    // 把和显示在页面中的amount上
    document.querySelector("span.amount").innerText = amount;
    document.querySelector("span.total").innerText = total;
}
// -----------------------------------------------------------------------------------
// 动态渲染
var htmlStr = "";
list.forEach(function(item) {
    htmlStr += `
        <tr data-id=${item.id}>
            <td><i class="iconfont icon-tick checkbox checked"></i></td>
            <td><img src="./img/cart-${item.imgPath}.jpg" alt=""></td>
            <td class="cart-listTitle">
                <span>${item.title}</span>
                <p class="stock">${item.stock} stocks remaining</p>
                <span class="shipping tag">
                    <?xml version="1.0" encoding="UTF-8"?><svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 39C14.2091 39 16 37.2091 16 35C16 32.7909 14.2091 31 12 31C9.79086 31 8 32.7909 8 35C8 37.2091 9.79086 39 12 39Z" stroke="#759693" stroke-width="4" stroke-linejoin="round"/><path d="M35 39C37.2091 39 39 37.2091 39 35C39 32.7909 37.2091 31 35 31C32.7909 31 31 32.7909 31 35C31 37.2091 32.7909 39 35 39Z" stroke="#759693" stroke-width="4" stroke-linejoin="round"/><path d="M8 35H2V11H31V35H16" stroke="#759693" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M31 35V18H39.5714L46 26.5V35H39.8112" stroke="#759693" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>                    
                    ${item.shipping}% Shipping Discount
                </span>
                <span class="merchant tag">
                <?xml version="1.0" encoding="UTF-8"?>
                    <svg width="14" height="14" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M42.1691 29.2451L29.2631 42.1511C28.5879 42.8271 27.6716 43.2069 26.7161 43.2069C25.7606 43.2069 24.8444 42.8271 24.1691 42.1511L8 26V8H26L42.1691 24.1691C43.5649 25.5732 43.5649 27.841 42.1691 29.2451Z" fill="#ffffff" stroke="#94896a" stroke-width="4" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18.5 21C19.8807 21 21 19.8807 21 18.5C21 17.1193 19.8807 16 18.5 16C17.1193 16 16 17.1193 16 18.5C16 19.8807 17.1193 21 18.5 21Z" fill="#94896a"/></svg>
                    ${item.merchant}% Merchant Discount
                </span>
            </td>
            <td>￥${item.price}.00</td>
            <td>
                <button class="btn-decrease" ${item.count === 1 ? 'disabled' : ''}>-</button>
                <span class="count">${item.count}</span>
                <button class="btn-increase" ${item.count === item.maxCount ? 'disabled' : ''}>+</button>
            </td>
            <td class="total-sub">￥${item.price * item.count}.00</td>
            <td>
                <button class="btn-delete">
                </button>
            </td>
    </tr>
    `
})
document.querySelector("table.cart>tbody").innerHTML = htmlStr;
// ---------------------------------------------------------------------
updateAmountAndTotal();
// ---------------------------------------------------------------------
// 全选框
document.querySelector('thead i.checkbox').onclick = function() {
    // 切换自己的checked
    this.classList.toggle("checked");
    // 一致
    document.querySelectorAll("tbody i.checkbox").forEach(function(item) {
        // toggle的第二个参数定向切换，true只加不去，false只去不加
        // 一开始checked true
        item.classList.toggle("checked", this.classList.contains("checked"));
    }, this)
    // 更新
    updateAmountAndTotal();
}
// 下面的checkbox
document.querySelector('tbody').addEventListener("click", function(e) {
    if(!e.target.classList.contains("checkbox")) return;
    // 切换自己状态
    e.target.classList.toggle("checked");
    // 更新thead中checkbox（全选）的状态
    var isAllChecked = document.querySelectorAll("tbody i.checkbox:not(.checked)").length === 0;
    document.querySelector("thead i.checkbox").classList.toggle("checked", isAllChecked)
    updateAmountAndTotal();
})
// --------------------------------------------------------------
// 删除
// 把tbody里面的btn-delete按钮的点击事件委托到tbody上进行集中处理
document.querySelector('tbody').addEventListener("click", function(e) {
    if(!e.target.classList.contains("btn-delete")) return;
    // 询问
    if(!confirm("delete!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!↓↓↓↓↓↓↓")) return;
    // 删除数组list中对应的购物记录数据 e.target是"<button></button>"
    // 获取藏值的id
    var id = parseInt(e.target.parentNode.parentNode.dataset.id);
    console.log(e.target);
    // find找到对应的下标
    var i = list.findIndex(function(item) {
        // 找id所在的下标
        return item.id === id;
    });
    console.log(i);
    list.splice(i, 1);
    // 删除页面中点击的删除按钮对应的那行tr
    e.target.parentNode.parentNode.remove();
    // 更新thead中checkbox的选中状态
    var isAllChecked = document.querySelectorAll("tbody i.checkbox:not(.checked)").length === 0;
    document.querySelector("thead i.checkbox").classList.toggle("checked", isAllChecked)
    // 更新总金额和总数量
    updateAmountAndTotal();
    // 提示成功
    alert('你做得好啊');
})
// ---------------------------------------------------------------------
// 减--
document.querySelector('tbody').addEventListener("click", function(e) {
    if(!e.target.classList.contains("btn-decrease")) return;
    // 获取id
    var id = parseInt(e.target.parentNode.parentNode.dataset.id);
    // console.log(id);
    // 更新数组中对应购物记录的count
    var target = list.find(function(item) { return item.id === id })
    target.count -= 1;
    console.log(target);
    // 更新页面tr, 更新小计, 禁用状态, 控制加号禁用状态
    // console.log(target.count);
    e.target.nextElementSibling.innerText = target.count;
    e.target.parentNode.nextElementSibling.innerText = `￥${target.count * target.price}.00`;
    e.target.disabled = target.count === 1;
    e.target.nextElementSibling.nextElementSibling.disabled = false;
    // 更新总金额和总数量
    updateAmountAndTotal();
});
// 加++
document.querySelector('tbody').addEventListener("click", function(e) {
    if(!e.target.classList.contains("btn-increase")) return;
    // 获取id
    var id = parseInt(e.target.parentNode.parentNode.dataset.id);
    var target = list.find(function(item) { return item.id === id });
    // 更新count
    target.count += 1;
    // 改tr, 改小计, 临界禁用, 解除另一个按钮的禁用
    e.target.previousElementSibling.innerText = target.count;
    e.target.parentNode.nextElementSibling.innerText = `￥${target.count * target.price}.00`
    e.target.disabled = target.count === target.maxCount;
    e.target.previousElementSibling.previousElementSibling.disabled = false;
    updateAmountAndTotal();
})