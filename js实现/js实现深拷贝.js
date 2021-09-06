// js 实现深拷贝
// 深拷贝 克隆出一个对象，数据相同，但是引用地址不同。对于浅拷贝来说，引用类型赋值后获得的是对象的引用地址，而深拷贝是数据。
// 深拷贝可以拆分为：浅拷贝 + 递归

// 简单版
// 使用 JSON.parse(JSON.stringify(object)); 原理是序列化（变成字符串）和反序列化（变成对象）
// 使用这种方式有很多弊端：
// 时间对象拷贝之后的结果是字符串形式；
// RegExp、Error对象，拷贝之后的结果是空对象；
// 函数，undefined，拷贝之后会被丢弃；
// NaN、Infinity和-Infinity，拷贝之后的结果会变成null；
// 只能拷贝对象的可枚举的自有属性，例如 如果obj中的对象是有构造函数生成的， 则使用JSON.parse(JSON.stringify(obj))深拷贝后，会丢弃对象的constructor；
// 存在循环引用的情况也无法正确实现深拷贝；
function cloneDeep1(source) {
  return JSON.parse(JSON.stringify(source));
}

// 递归版
function cloneDeep2(source) {
  // 如果输入的是基本类型，直接返回
  if (!(source !== null && typeof source === "object")) {
    return source;
  }
  // 判断输入的为数组、函数，对象，进行相应的构建
  const target = Array.isArray(source) ? [] : {};
  for (let key in source) {
    // 判断是否为自身属性
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      // 如果值又是引用类型，递归处理
      if (typeof source === "object" && source !== null) {
        target[key] = cloneDeep2(source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
}
// 循环版
function cloneDeep3(source) {
  // 如果输入的是基本类型，直接返回
  if (!(source !== null && typeof source === "object")) {
    return source;
  }
  // 使用root 保存克隆结果
  const root = Array.isArray(source) ? [] : {};
  // 定义一个栈，先将source保存进去
  const loopList = [
    {
      parent: root,
      key: undefined,
      data: source,
    },
  ];
  while (loopList.length > 0) {
    // 深度优先
    const node = loopList.pop();
    const parent = node.parent;
    const key = node.key;
    const data = node.data;
    // 初始化赋值目标，key为undefined则拷贝到父元素，否则拷贝到子元素
    let res = parent;
    if (typeof key !== "undefined") {
      res = parent[key] = Array.isArray(data) ? [] : {};
    }
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        // 引用数据类型 数组和对象
        if (data !== null && typeof data[key] === "object") {
          loopList.push({
            parent: res,
            key: key,
            data: data[key],
          });
        } else {
          res[key] = data[key];
        }
      }
    }
  }
  return root;
}
// 使用以下方法也能进行深拷贝，
/**
 * 判断类型，正则和日期直接返回新对象
 * 空或者非对象类型，直接返回原值
 * 考虑循环引用，判断如果hash中含有直接返回hash中的值
 * 新建一个相应的new obj.constructor加入hash
 * 遍历对象递归（普通key和key是symbol情况）
 *
 */
function deepClone(obj, hash = new WeakMap()) {
  if (obj instanceof RegExp) return new RegExp(obj); // 正则对象直接返回新对象
  if (obj instanceof Date) return new Date(obj); // 日期对象直接返回新对象
  if (obj === null || typeof obj !== "object") return obj; // 非引用类型数据直接返回
  // 循环引用的情况
  if (hash.has(obj)) {
    return hash.get(obj);
  }
  //new 一个相应的实例
  //obj为Array，相当于new Array()
  //obj为Object，相当于new Object()
  let newObj = new obj.constructor();
  // 记录循环引用obj为key， newObj为值
  hash.set(obj, newObj);
  // 循环引用类型的key
  for (let key in obj) {
    // 自身属性，递归处理
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key], hash);
    }
  }
  //考虑symbol的情况
  let symbolObj = Object.getOwnPropertySymbols(obj);
  for (let i = 0; i < symbolObj.length; i++) {
    if (obj.hasOwnProperty(symbolObj[i])) {
      newObj[symbolObj[i]] = deepClone(obj[symbolObj[i]], hash);
    }
  }
  return newObj;
}
console.log(cloneDeep3({ a: "1", b: "2" }));
