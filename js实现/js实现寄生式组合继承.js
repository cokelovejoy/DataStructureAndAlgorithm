// 寄生式组合继承
// 构造函数 为实例增加属性 使用 this
function Person(obj) {
  this.name = obj.name;
  this.age = obj.age;
}
// 增加实例方法 使用原型
Person.prototype.add = function (value) {
  console.log(value);
}

let p1 = new Person({name: 'coke', age:18});

function Sub(obj) {
  Person.call(this, obj); // 继承父类上 为实例声明的属性 
  this.sex = obj.sex; // 子类上为 实例声明的新的属性
}
// 继承的关键步骤
// 1. 子类的原型对象要指向父类的原型对象，Object.create(obj)会创建一个新的对象，新创建的对象的 prototype 指向现有的对象obj。
// 2. 子类的原型对象的构造函数constructor属性要指向自身。
Sub.prototype = Object.create(Person.prototype);
Sub.prototype.constructor = Sub;

// 子类声明 自己的实例方法
Sub.prototype.play = function (value) {
  console.log(value);
}

// 使用子类
let p = new Sub({name:'jack', age:20, sex: 'boy'});
console.log(p.name);