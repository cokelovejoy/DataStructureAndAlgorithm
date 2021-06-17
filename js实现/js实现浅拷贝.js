// js 实现浅拷贝
function shallowCopy(object) {
  // 判断是否为对象, 只拷贝对象
  if (!object || typeof object !== "object") {
    return;
  }
  let newObject = Array.isArray(object) ? [] : {};
  // 只拷贝对象自己的属性
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      newObject[key] = object[key];
    }
  }
  return newObject;
}