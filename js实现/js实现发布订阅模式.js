// 发布订阅模式
// 发布者，订阅者，事件调度中心
// 通过调度中心实现了发布者和订阅者的完全分离
// 发布订阅模式本身就是观察者模式的一种
let events = (function () {
  // 存储事件
  let topics = {};
  return {
    // 订阅事件
    subscribe: function (topic, handler) {
      if (!topics.hasOwnProperty(topic)) {
        topics[topic] = [];
      }
      topics[topic].push(handler);
    },
    // 发布事件
    publish: function (topic, info) {
      if (topics.hasOwnProperty(topic)) {
        topics[topic].forEach(function (handler) {
          handler(info);
        });
      }
    },
    // 移除事件的一个订阅者的回调事件
    remove: function (topic, handler) {
      if (!topics.hasOwnProperty(topic)) {
        return;
      }
      let handlerIndex = topics[topic].findIndex((item) => {
        return item === handler;
      });
      if (handlerIndex >= 0) {
        topics[topic].splice(handlerIndex, 1);
      }
    },
    // 移除事件所有的观察者的回调事件
    removeAll: function (topic) {
      if (topics.hasOwnProperty(topic)) {
        topics[topic] = [];
      }
    },
  };
})();