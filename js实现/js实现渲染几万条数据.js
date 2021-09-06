// 渲染大数据时，合理使用createDocumentFragment和requestAnimationFrame，将操作切分为一小段一小段执行。
/**
 * DocumentFragments 是DOM节点。它们不是主DOM树的一部分。
 * 通常的用例是创建文档片段，将元素附加到文档片段，然后将文档片段附加到DOM树。
 * 在DOM树中，文档片段被其所有的子元素所代替。
 * 因为文档片段存在于内存中，并不在DOM树中，所以将子元素插入到文档片段时不会引起页面回流（对元素位置和几何上的计算）。
 * 因此，使用文档片段通常会带来更好的性能。
 */

/**
 * window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画，
 * 并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。
 * 该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行
 * 回调函数执行次数通常是每秒60次，但在大多数遵循W3C建议的浏览器中，回调函数执行次数通常与浏览器屏幕刷新次数相匹配。
 */
setTimeout(() => {
  // 插入十万条数据
  const total = 100000;
  // 一次插入的数据
  const once = 20;
  // 插入数据需要的次数
  const loopCount = Math.ceil(total / once);
  // 已经插入的次数
  let countOfRender = 0;
  const ul = document.querySelector("ul");
  // 添加数据的方法
  function add() {
    // 创建文档片段
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < once; i++) {
      const li = document.createElement("li");
      li.innerText = Math.floor(Math.random() * total);
      // 将子元素插入文档片段中
      fragment.appendChild(li);
    }
    // 将片段插入dom
    ul.appendChild(fragment);
    // 插入的次数增加1
    countOfRender += 1;
    loop();
  }
  function loop() {
    if (countOfRender < loopCount) {
      window.requestAnimationFrame(add);
    }
  }
  loop();
}, 0);
