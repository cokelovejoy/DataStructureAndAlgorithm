// js 实现类型判断函数
function getType(value) {
  if (value === null) {
    // 判断null
    return 'null';
  }
  // 判断数组和对象（引用类型的数据）使用toString方法，会返回内置类型如[object Object];
  if (typeof value === "object") {
    let valueClass = Object.prototype.toString.call(value);
    let type = valueClass.split(" ")[1].split("");
    type.pop();
    return type.join("").toLowerCase();
  } else {
    return typeof value; // 判断基础数据类型和函数，undefined -> undefined; NaN -> number; function -> function
  }
}

getType([1,2,3]);