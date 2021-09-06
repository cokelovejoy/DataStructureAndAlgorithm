// ES6 继承
// class 相当于es5中的构造函数
// class 中定义方法时，前后不能加function，全部定义在class的prototype属性中。
// class 中定义的所有方法是不可枚举的
// class 中只能定义方法，不能定义对象，变量等
// class 和方法内默认都是严格模式
// es5 中 constructor 为隐式属性

// es5 继承先创建子类的实例对象，然后将父类的方法添加到this上，Parent.apply(this)。
// es6 继承是使用关键字 super先创建父类的实例对象，最后在子类class中修改this。
// 子类必须在constructor方法中调用super方法，否则新建实例时会报错。
// 如果不调用super方法，子类就得不到this对象。因此，只有调用super之后，才可以使用this关键字。
// super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。
// super作为函数调用时，代表父类的构造函数。作为函数时，super()只能用在子类的构造函数之中使用。
// super虽然代表了父类A的构造函数，但是返回的是子类B的实例，
// 即super内部的this指的是B的实例，因此super()在这里相当于A.prototype.constructor.call(this)。

/**
 * 大多数浏览器的 ES5 实现之中，每一个对象都有__proto__属性，指向对应的构造函数的prototype属性。
 * Class 作为构造函数的语法糖，同时有prototype属性和__proto__属性，因此同时存在两条继承链。
 *（1）子类的__proto__属性，表示构造函数的继承，总是指向父类。
 *（2）子类prototype属性的__proto__属性，表示方法的继承，总是指向父类的prototype属性。
 */
class People {
  constructor(name = "coke", age = 27) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(this.name + this.age);
  }
}

class Man extends People {
  constructor(name = "jack", age = "27") {
    // 继承父类属性, 拿到this，然后定义自己的属性
    super(name, age);
  }
  eat() {
    // 使用父类方法
    super.eat();
  }
}
let manObj = new Man("john", 18);
manObj.eat();
