// new 的实现
// new 操作符用来调用构造函数，创建其实例，本质返回了一个实例对象。
// 1. 首先创建了一个新的空对象
// 2. 设置原型，将对象的原型设置为构造函数的prototype对象。
// 3. 让函数的this指向这个对象，执行构造函数的代码。为这个新对象添加属性。
// 4. 判断函数的返回值类型，如果是值类型，返回创建的空对象。如果是引用类型，就返回这个引用类型的对象。

// 构造函数的执行，没有return时，默认会返回一个新对象。显式写return时，返回return的东西. 
// myNew(构造函数, 初始化参数)
function myNew(ctorFunc, ...args) {
   // 参数判断，第一个参数必须是函数
   if (typeof ctorFunc !== 'function') {
      throw 'the first param must be a function';
   }
   // 新建一个空对象，对象的原型为构造函数的prototype对象，这就是构造函数的默认返回值。
   let newObject = Object.create(ctorFunc.prototype);
   // 执行构造函数, 将this指向新对象，为这个新建对象添加实例属性
   let result = ctorFunc.apply(newObject, args);
   // 判断构造函数执行返回的结果，
   // 如果返回了数据并且是引用数据类型的结果，则直接返回这个结果
   // 否则没有返回（为undefined） 或 返回了 null， 基础数据类型，则直接返回构造函数新创建的实例对象。
   let flag = result && (typeof result === "object" || typeof result === "function");

   return flag ? result: newObject;
}