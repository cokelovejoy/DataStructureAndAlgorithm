// 1. 首先创建了一个新的空对象
// 2. 设置原型，将对象的原型设置为函数的prototype对象。
// 3. 让函数的this指向这个对象，执行构造函数的代码。为这个新对象添加属性
// 4. 判断函数的返回值类型，如果是值类型，返回创建的空对象。如果是引用类型，就返回这个引用类型的对象。

// 构造函数的执行，没有return时会，默认会返回一个新对象。显式写return时，返回return的东西. 
// objectFactory(构造函数, 初始化参数)
function objectFactory() {
   let newObject = null;
   let constructor = Array.prototype.shift.call(arguments);
   let result = null;

   // 参数判断
   if (typeof constructor !== 'function') {
    console.error("type error");
    return;
   }
   // 新键一个空对象，对象的原型为构造函数的prototype对象
   newObject = Object.create(constructor.prototype);

   // 执行构造函数, 将this指向新对象，为这个新对象添加属性
   result = constructor.apply(newObject, arguments);
   // 判断返回对象
   let flag = result && (typeof result === "object" || typeof result === "function");

   // 判断返回结果
   return flag ? result: newObject;
}