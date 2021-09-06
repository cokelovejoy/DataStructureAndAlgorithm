// js 实现ajax
// 使用promise
function ajax(url, method, body, headers) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    // 设置header
    for (let key in headers) {
      xhr.setRequestHeader(key, headers[key]);
    }
    xhr.onreadystatechange(() => {
      // readyState:Ajax请求服务的状态
      if (xhr.readystate == 4) {
        // status：页面的响应码
        if (xhr.status >= 200 && xhr.status <= 300) {
          // 返回的数据
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject(xhr.status);
        }
      }
    });
    xhr.open(method, url);
    xhr.send(body);
  });
}
