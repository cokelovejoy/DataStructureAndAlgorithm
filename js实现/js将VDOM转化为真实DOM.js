// vnode结构：
// {
//   tag:"div",  当前节点的标签
//   attrs:{}, 当前节点的属性
//   children: [] 当前节点子节点数组
// }
// 将虚拟Virtual DOM转化为真实DOM
// Virtual DOM => DOM
function render(vnode, container) {
  container.appendChild(_render(vnode)); // 将真实dom添加容器里
}
function _render(vnode) {
  // 如果是数字类型转化为字符串
  if (typeof vnode === "number") {
    vnode = String(vnode);
  }
  // 字符串类型直接就是文本节点
  if (typeof vnode === "string") {
    return document.createTextNode(vnode);
  }
  // 普通DOM
  const dom = document.createElement(vnode.tag);
  if (vnode.attrs) {
    // 遍历属性
    Object.keys(vnode.attrs).forEach((key) => {
      const value = vnode.attrs[key];
      dom.setAttribute(key, value);
    });
  }
  // 子数组进行递归操作
  vnode.children.forEach((child) => render(child, dom));
  return dom;
}
