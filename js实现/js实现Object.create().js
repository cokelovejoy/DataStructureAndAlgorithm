// Object.create() 会将参数对象作为一个新创建的空对象的原型，然后返回这个空对象。
//简略版
function myCreate(obj) {
  // 新声明一个函数
  function C() {}
  // 将函数的原型指向obj
  C.prototype = obj;
  // 返回这个函数的实例化对象
  return new C();
}
//官方版Polyfill
if (typeof Object.create !== "function") {
  Object.create = function (proto, propertiesObject) {
    if (typeof proto !== "object" && typeof proto !== "function") {
      throw new TypeError("Object prototype may only be an Object: " + proto);
    } else if (proto === null) {
      throw new Error(
        "This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument."
      );
    }

    if (typeof propertiesObject !== "undefined")
      throw new Error(
        "This browser's implementation of Object.create is a shim and doesn't support a second argument."
      );

    function F() {}
    F.prototype = proto;

    return new F();
  };
}
// propertiesObject 为属性描述对象
Object.ObjectCreate = (proto, propertiesObject)=> {
  // 对输入进行检测
  if (typeof proto !== 'object' && typeof proto !== 'function' && proto !== null) {
      throw new Error(`Object prototype may only be an Object or null:${proto}`);
  }
  // 新建一个对象
  const result = {};
  // 将该对象的原型设置为proto
  Object.setPrototypeOf(result, proto);
  // 将属性赋值给该对象
  Object.defineProperties(result, propertiesObject);
  // 返回该对象
  return result;
}