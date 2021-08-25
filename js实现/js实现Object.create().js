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
