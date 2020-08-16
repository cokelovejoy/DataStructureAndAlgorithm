// 实现Event bus - 面试版
class EventEmitter {
    constructor () {
        this._events = this._events || new Map
        this._maxListeners = this._maxListeners || 10
    }
}

EventEmitter.prototype.emit = function (type, ...args) {
    let handler
    handler = this._events.get(type)
    // 如果是一个数组说明有多个监听者，需要依次触发里面的函数
    if (Array.isArray(handler)) {
        for (let i = 0; i < handler.length; i++) {
            if (args.length > 0) {
                handler[i].apply(this, args)
            } else {
                handler[i].call(this)
            }
        }
    } else {
        // 单个函数的情况，直接触发
        if (args.length > 0) {
            handler.apply(this, args)
        } else {
            handler.call(this)
        }
    }
    return true
}

EventEmitter.prototype.addListener = function (type, fn) {
    // 获取对应事件名称的函数list
    const handler = this._events.get(type)

    if (!handler) {
        // 没有处理函数
        this._events.set(type, fn)
    } else if (handler && typeof handler === 'function') {
        // 如果handler是函数说明只有一个监听者, 用数组存储
        this._events.set(type, [handler, fn]) 
    } else {
        handler.push(fn)  // 多个监听者，存储到数组
    }
}

EventEmitter.prototype.removeListener = function (type, fn) {
    const handler = this._events.get(type)

    // 如果是函数，只被监听了一次
    if (handler && typeof handler == 'function') {
        this._events.delete(type, fn)
    } else {
        // handler 是数组，找到对应的fn删掉
        let postion
        for (let i = 0; i < handler.length; i++) {
            if (handler[i] === fn) {
                postion = i
            } else {
                postion = -1
            }
        }
        if (postion !== -1) {
            // 在数组中删除fn
            handler.splice(postion, 1)
            // 如果handler数组中只有一个函数，取消数组，使用函数形式保存
            if (handler.length === 1) {
                this._events.set(type, handler[0])
            }
        } else {
            return this
        }
    }
}