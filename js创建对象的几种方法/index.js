// 1. 工厂模式 
// 解决了创建多个对象的问题
// 缺点不能识别对象的类型
function createPerson(name, age) {
    let obj = new Object();
    obj.name = name;
    obj.age = age;
    obj.sayName = function () {
        alert('my name is ' + this.name);
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
// 这个模式和工厂模式基本上是一摸一样的，只是采用 new 操作符最后来创建对象。
// 注意在构造函数不返回值的情况下，默认会返回新创建的对象，而通过在构造函数的末尾添加一个 return 语句，可以重写调用构造函数时返回的值。
// 缺点 和工厂模式一样，无法确定对象的类型。

function Person(name, age) {
    let obj = new Object();
    obj.name = name;
    obj.age = age;
    obj.sayName = function() {
        alert(this.name);
    };
    return obj;
}

let person = new Person("coke", 18);

// 7. 稳妥构造函数模式
// 所谓稳妥对象，指的就是，没有公共属性，而且其方法也不使用 this 的对象。稳妥对象最适合在一些安全的环境中（这些环境中会禁止使用 this 和 new），或者在防止数据被其他应用程序改动时使用。
// 不使用new操作符调用构造函数，也不引用this。
// 只能通过方法访问数据，这就是稳妥构造函数提供的安全性。
function Person(name, age) {
    let obj = new Object();
    obj.sayName = function() {
        console.log(name);
    }
    return obj;
}
