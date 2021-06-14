// 1. 工厂模式 
// 解决了创建多个对象的问题
// 缺点不能识别对象的类型
function createPerson(name, age) {
    let obj = new Object();
    obj.name = name;
    obj.age = age;
    obj.sayName = function () {
        alertzzzzzzzzzz('my name is ' + this.name);
    }
    return obj;
}

// 2. 构造函数模式
// 创建一个新的对象，并将构造函数的作用域赋给新对象（将this指向这个新对象）
// 给新对象增加属性和方法。
// 返回新对象。

// 构造函数解决了 识别对象类型的问题
// 缺点 每个方法都会在创建实例的时候重新创建一次，导致不同实例的同名方法是不相等的。
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function () {
        alert(this.name);
    }
}
let person1 = new Person('coke', 25);
let person2 = new Person('jack', 18)

// 3. 原型模式
// 所有对象实例共享相同的属性和方法
// 缺点 所有实例在默认情况下都取到的是相同的属性值，对于引用类型的值，修改会相互影响。
// 因为我们希望每个实例拥有自己的全部属性。
function Person() {}
Person.prototype.name = 'coke';
Person.prototype.age = 18;
Person.prototype.sayName = function() {
    alert(this.name);
}

// 4. 组合使用构造函数模式和原型模式
// 构造函数用于定义实例私有的属性，原型模式用于定义方法和共享的属性。
// 使用最广泛创建自定义类型的方法。
// 缺点构造函数和原型分开，封装性不好。
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype = {
    constructor: Person,
    sayName: function() {
        alert(this.name);
    }
}
let person1 = new Person('coke', 16);
let person2 = new Person('jack', 18);

// 5. 动态原型模式
// 解决封装性的问题，将所有的信息封装到构造函数中，通过检查某个应该存在的方法是否有效，来决定是否需要初始化原型。
function Person(name, age) {
    this.name = name;
    this.age = age;
    // 只会在 初次调用构造函数时才会执行。
    if (typeof this.sayName != 'function') {
        Person.prototype.sayName = function () {
            alert(this.name);
        }
    }
}
// 6. 寄生构造函数模式