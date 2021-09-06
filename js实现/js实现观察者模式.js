// js 实现一个观察者模式
// 观察者模式
// 观察者模式：定义了对象间一种一对多的依赖关系，当目标对象Subject发生改变时，
// 所有依赖它的对象Observer都会得到通知。
// 被观察者和观察者之间存在松耦合

// Subject为被观察的目标，Subject中的状态（state）改变，就通知Observer更新
class Subject {
  constructor(name) {
    this.name = name;
    this.observers = [];
    this.state = "XXXX";
  }
  // 被观察者对外提供一个存储观察者的方法
  // this.observer 用来存储观察者
  attach(observer) {
    this.observers.push(observer);
  }
  // 被观察者的状态改变，就要去通知observer更新
  setState(newState) {
    this.state = newState;
    this.observers.forEach((ob) => {
      ob.update(newState);
    });
  }
}
// Observer为观察者，观察Subject的状态是否改变
class Observer {
  constructor(name) {
    this.name = name;
  }

  update(newState) {
    console.log(`${this.name}say:${newState}`);
  }
}

var sub = new Subject("被观察者");
var obs1 = new Observer("观察者1");
var obs2 = new Observer("观察者2");
sub.attach(obs1);
sub.attach(obs2);
// 被观察者的状态改变，触发观察者更新
sub.setState(true);
