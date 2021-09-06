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

// example
let a = { key1: "1", key2: "2" };
let b = shallowCopy(a);
console.log(b);
let c = shallowCopy([1, 2, 3]);
console.log(c);
