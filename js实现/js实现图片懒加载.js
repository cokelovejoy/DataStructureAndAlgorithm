// js 实现图片懒加载
// 1)首先，不要将图片地址放到src属性中，而是放到其它属性(data-original)中，data-original存放真实的图片地址。
// 2)页面加载完成后，根据scrollTop判断图片是否在用户的视野内，如果在，则将data-original属性中的值取出存放到src属性中。
// 3)在滚动事件中重复判断图片是否进入视野，如果进入，则将data-original属性中的值取出存放到src属性中。
// elementNode.getAttribute(name)：方法通过名称获取属性的值。
// elementNode.setAttribute(name, value)：方法创建或改变某个新属性。
// elementNode.removeAttribute(name)：方法通过名称删除属性的值。
// `data-`为H5新增的为前端开发者提供自定义的属性，这些属性集可以通过对象的 `dataset` 属性获取，
// `data-`之后的以连字符分割的多个单词组成的属性，获取的时候使用驼峰风格。
// 懒加载代码实现
var viewHeight = document.documentElement.clientHeight; // 可视化区域的高度

function lazyload() {
  // 获取所有要进行懒加载的图片
  let eles = document.querySelectorAll("img[data-original][lazyload]"); // 获取属性名中有data-original的
  // 循环遍历图片元素数组
  Array.prototype.forEach.call(eles, function (item, index) {
    let rect;
    // 获取original属性
    if (item.dataset.original === "") {
      return;
    }
    // 获取元素 top，bottom距离视窗上边的距离，left，right距离视窗左边的距离
    rect = item.getBoundingClientRect();

    // 图片一进入可视区，动态加载
    if (rect.bottom >= 0 && rect.top < viewHeight) {
      !(function () {
        // let img = new Image(); // 新建图片对象实例
        // img.src = item.dataset.original; // 获取 original 属性
        // 图片加载时， 替换图片的地址
        // img.onload = function () {
        //   item.src = img.src;
        // };
        item.src = item.dataset.original;
        // 移除属性data-original lazyload
        item.removeAttribute("data-original");
        item.removeAttribute("lazyload");
      })();
    }
  });
}
// 首页加载完成，要执行一次
lazyload();
// 每次滚动，要执行一次
document.addEventListener("scroll", lazyload);
