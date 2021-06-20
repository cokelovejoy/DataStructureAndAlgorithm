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
