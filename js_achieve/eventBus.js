class EventEmitter {
    constructor () {
        this._events = this._events || new Map() // 存储事件/回调键值对
        this._maxListeners = this._maxListeners || 10 // 设置监听上限 
    }
}

// 触发名为type的事件
EventEmitter.prototype.emit = function (type, ...args) {
    let handler 
    handle = this._enents.get(type) // 获取事件函数
    if (args.length > 0) {
        handler.apply(this, args)   // 执行事件函数
    } else {
        handler.call(this)          // 执行事件函数
    }
    return true
}

// 监听名为type的事件
EvemtEmitter.prototype.addListener = function (type, fn) {
    // 将type事件以及对应的fn函数放入this._events存储
    if (!this._events.get(type)) {
        this._events.set(type, fn)  // 设置监听名为type 和 事件函数fn 的map实例
    }
}