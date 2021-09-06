// js 实现Object.assign()
Object.assign2 = function (target, ...source) {
  // target 不能为undefined和null
  if (target === null || target === undefined) {
    throw new TypeError("Cannot convert undefined or null to object");
  }
  // 将target转换为对象
  let ret = Object(target);
  source.forEach(function (obj) {
    if (obj !== null && obj !== undefined) {
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          ret[key] = obj[key];
        }
      }
    }
  });
  return ret;
};
