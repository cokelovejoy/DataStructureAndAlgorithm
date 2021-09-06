// js 实现 jsonp
// 通过动态插入script脚本，去触发请求
// 返回的脚本文件中会将回调函数执行一次
const jsonp = function (url, data) {
  return new Promise((resolve, reject) => {
    // 初始化url
    let dataString = url.indexOf("?") === -1 ? "?" : "&";
    // 回调函数名
    let callbackName = `jsonpCB_${Date.now()}`;
    // src的url
    url += `${dataString}callback=${callbackName}`;
    // 有请求参数，依次添加到url
    if (data) {
      for (let k in data) {
        url += `&${k}=${data[k]}`;
      }
    }
    // 创建script标签
    let jsNode = document.createElement("script");
    // 设置src属性
    jsNode.src = url;
    // 触发callback，触发后删除js标签和绑定在window上的callback
    window[callbackName] = (result) => {
      // 删除回调函数
      delete window[callbackName];
      // 删除节点
      document.body.removeChild(jsNode);
      if (result) {
        resolve(result);
      } else {
        reject("没有返回数据");
      }
    };
    // js加载异常的情况
    jsNode.addEventListener(
      "error",
      () => {
        delete window[callbackName];
        document.body.removeChild(jsNode);
        reject("JavaScript资源加载失败");
      },
      false
    );
    // 添加js节点到document上时，开始请求
    document.body.appendChild(jsNode);
  });
};
jsonp("http://192.168.0.103:8081/jsonp", {
  a: 1,
  b: "heiheihei",
})
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });
