// js 实现深拷贝
function deepCopy(object) {
  // 判断是否为对象
  if (!object || typeof object !== "object") {
    return;
  }
  let newObject = Array.isArray(object) ? [] : {};
  for (let key in object) {
    if (object.hasOwenProperty(key)) {
      newObject[key] = typeof object[key] === "object" ? deepCopy(object[key]): object[key];
    }
  }
  return newObject;
}


// 使用以下方法也能进行深拷贝， 但如果有key的值为undefined, 这个值会被过滤掉。
// JSON.parse(JSON.stringify(object));