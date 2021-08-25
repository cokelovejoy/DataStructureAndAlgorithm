// js 实现 jsonp
function jsonp(url, params, callback) {
    // 判断 是否含有参数
    let queryString = url.indexOf("?") === "-1" ? "?" : "&";
    // 添加参数
    for (let k in params) {
        if (params.hasOwnProperty(k)) {
            queryString += k + "=" + params[k] + "&";
        }
    }
    // 处理回调函数名
    let random = Math.random().toString().replace(".", "");
    let callbackName = "myJsonp" + random;
    // 添加回调函数
    queryString += "callback=" + callbackName;
    // 构建请求
    let scriptNode = document.createElement("script");
    scriptNode.src = url + queryString;

    window[callbackName] = function() {
        // 调用回调函数
        callback(...arguments);
        // 删除引入的脚本
        document.getElementsByTagName("head")[0].removeChild(scriptNode);
    };
    // 发起情求
    document.getElementsByTagName("head")[0].appendChild(scriptNode);
}

// 
const jsonp = function (url, data) {
    return new Promise((resolve, reject) => {
        // 初始化url
        let dataString = url.indexOf('?') === -1 ? '?' : ''
        let callbackName = `jsonpCB_${Date.now()}`
        url += `${dataString}callback=${callbackName}`
        if (data) {
            // 有请求参数，依次添加到url
            for (let k in data) {
                url += `${k}=${data[k]}`
            }
        }
        let jsNode = document.createElement('script')
        jsNode.src = url
        // 触发callback，触发后删除js标签和绑定在window上的callback
        window[callbackName] = result => {
            delete window[callbackName]
            document.body.removeChild(jsNode)
            if (result) {
                resolve(result)
            } else {
                reject('没有返回数据')
            }
        }
        // js加载异常的情况
        jsNode.addEventListener('error', () => {
            delete window[callbackName]
            document.body.removeChild(jsNode)
            reject('JavaScript资源加载失败')
        }, false)
        // 添加js节点到document上时，开始请求
        document.body.appendChild(jsNode)
    })
}
jsonp('http://192.168.0.103:8081/jsonp', {
    a: 1,
    b: 'heiheihei'
})
.then(result => {
    console.log(result)
})
.catch(err => {
    console.error(err)
})