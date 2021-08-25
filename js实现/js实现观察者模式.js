// js 实现一个观察者模式
// subscribe注册事件，publish触发事件
let events = (function () {
  let topics = {};
  return {
    // 注册监听函数
    subscribe: function (topic, handler) {
      if (!topics.hasOwnProperty(topic)) {
        topics[topic] = [];
      }
      topics[topic].push(handler);
    },
    // 触发事件
    publish: function (topic, info) {
      if (topics.hasOwnProperty(topic)) {
        topics[topic].forEach(function (handler) {
          handler(info);
        });
      }
    },
    // 移除主题的一个观察者的回调事件
    remove: function (topic, handler) {
        if (!topics.hasOwnProperty(topic)) {
            return;
        }
        let handlerIndex =  topics[topic].findIndex(item => {
            return item === handler;
        });
        if (handlerIndex >= 0) {
            topics[topic].splice(handlerIndex, 1);
        }
    },
    // 移除主题所有的观察者的回调事件
    removeAll: function(topic) {
        if (topics.hasOwnProperty(topic)) {
            topics[topic] = [];
        }
    }
  };
})();

// 观察者模式
class Subject{
  constructor(name){
    this.name = name
    this.observers = []
    this.state = 'XXXX'
  }
  // 被观察者要提供一个接受观察者的方法
  attach(observer){
    this.observers.push(observer)
  }

  // 改变被观察着的状态
  setState(newState){
    this.state = newState
    this.observers.forEach(o=>{
      o.update(newState)
    })
  }
}
class Observer{
  constructor(name){
    this.name = name
  }

  update(newState){
    console.log(`${this.name}say:${newState}`)
  }
}

// 被观察者 灯
let sub = new Subject('灯')
let mm = new Observer('小明')
let jj = new Observer('小健')
 
// 订阅 观察者
sub.attach(mm)
sub.attach(jj)
 
sub.setState('灯亮了来电了')