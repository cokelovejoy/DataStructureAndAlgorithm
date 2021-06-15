// 1. 原型链
// 基本思想，利用原型让一个引用类型继承另一个引用类型的属性和方法。
// 2. 借用构造函数
// 在子类型的构造函数中调用父类型构造函数。
// 缺点：无法做到函数复用
function SuperType() {
  this.colors = ["red", "blue"];
}
function SubType() {
  // 继承了SuperType
  SuperType.call(this);
}
let sub1 = new SubType();
sub1.colors.push("green");
console.log(sub1.colors);

let sub2 = new SubType();
console.log(sub2.colors);

// 3. 组合继承
// 将原型链和借用构造函数组合到一起
// 使用原型链实现对原型属性和方法的继承。
// 借用构造函数来实现对实例属性的继承。

// 缺点：基类的原型对象中增加了不必要的父类的实例对象中的所有属性。
// 父类定义
function SuperType(name) {
  // 构造函数内部声明实例属性
  this.name = name;
  this.colors = ["red", "green"];
}
// 共享的方法放在原型上
SuperType.prototype.sayName = function () {
  console.log(this.name);
};

// 子类定义
function SubType(name, age) {
  // 继承父类属性，并传递参数
  SuperType.call(this, name);
}
// 利用原型链继承父类的方法
SubType.prototype = new SuperType();      // prototype对象指向父类的实例
SubType.prototype.constructor = SubType;  // 构造函数指向子类自己的构造函数
SubType.prototype.SayAge = function() {   // 定义子类自己的公用方法
  console.log(this.age);
}

// 4. 原型式继承
// 原型式继承的主要思路是可以基于已有的对象创建新的对象。
// 作用同Object.create(obj),传入一个对象，返回一个以该对象给原型对象的新对象。
// 优点 实现基于一个对象的简单继承，不必要创建构造函数。

function object(o) {
  function F() {}; // 定义一个新的构造函数
  F.prototype = o; // 指定构造函数的原型对象为新的对象。
  return new F();  // 返回这个构造函数的实例
}

// 5. 寄生式继承 实现简单的继承
// 创建一个仅用于封装继承过程的函数，该函数内部增强对象，最后返回该对象。
function createPerson(original) {
   let newobj = Object(original); // 创建一个新对象
   newobj.sayName = function () { // 增强对象
     console.log('coke');
   }
   return newobj;                 // 返回对象
}


// 6. 寄生式组合继承
// 继承原型时，继承的不是父类的实例对象，而是原型对象是父类原型对象的一个实例对象。
// 解决了基类的原型对象中保存了不必要的父类的实例对象中的所有属性的问题。
// 普遍认为寄生组合式继承是引用类型最理想的继承范式。
function inheritPrototype(subType, superType) {
  let prototype = Object(superType.prototype) // 创建父类原型对象的一个实例对象的副本
  prototype.constructor = subType;            // 重写constructor属性，指向子类自己。
  subType.prototype = prototype;              // 改变prototype的指向。
}