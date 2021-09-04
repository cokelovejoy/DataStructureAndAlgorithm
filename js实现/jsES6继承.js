// ES6 继承
// class 相当于es5中的构造函数
// class 中定义方法时，前后不能加function，全部定义在class的prototype属性中。
// class 中定义的所有方法是不可枚举的
// class 中只能定义方法，不能定义对象，变量等
// class 和方法内默认都是严格模式
// es5 中 constructor 为隐式属性

// es5 继承先创建子类的实例对象，然后将父类的方法添加到this上，Parent.apply(this)。
// es6 继承是使用关键字 super先创建父类的实例对象，最后在子类class中修改this。
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
  constructor(name="jack", age="27") {
    // 继承父类属性
    super(name, age);
  }
  eat() {
    // 继承父类方法
    super.eat();
  }
}
let manObj = new Man('john', 18);
manObj.eat();