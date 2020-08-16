function deepClone(parent) {
    // 判断输入数据类型，是否为对象
    const isType = (obj, type) => {
        if (typeof obj !== "object") return false
        const typeString = Object.prototype.toString.call(obj)
        let flag
        switch (type) {
            case "Array":
                flag = typeString === "[object Array]"
                break
            case "Date":
                flag = typeString === "[object Date]"
                break
            case "RegExp":
                flag = typeString === "[object RegExp]"
                break
            default:
                flag = false
        }
        return flag
    }
    // 处理正则
    const getRegExp = re => {
        let flags = ""
        // 是否有global
        if (re.global) flags += "g"
        if (re.ignoreCase) flags += "i"
        if (re.multiline) flags += "m"
        return flags
    }
    // 维护两个储存循环引用的数组
    const parents = []
    const children = []
    const clone = parent => {
        if (parent === null) return null
        if (typeof parent !== "object") return parent
        let child, proto
        if (isType(parent, "Array")) {
            // 传入的是数组  
            child = []
        } else if (isType(parent, "RegExp")) {
            // 传入的是RegExp
            // parent.source 就是 正则表达式的文本 字符串
            // getRegExp(parent) 返回匹配的模式的字符串， 'g' 'i' 'm'
            // 创建一个新的正则实例
            child = new RegExp(parent.source, getRegExp(parent))
            // 正则对象lastIndex属性表示下一次匹配开始的位置
            if (parent.lastIndex) child.lastIndex = parent.lastIndex
        } else if (isType(parent, "Date")) {
            // 传入的是Date对象
            // 通过getTime() 获取Date实例的时间字符串。
            child = new Date(parent.getTime())
        } else {
            // 普通对象
            // getPrototypeOf()获取对象的原型
            proto = Object.getPrototypeOf(parent)
            // create(xx) 创建一个对象，该对象以传入的参数作为原型。
            child = Object.create(proto)
        }
        // 处理循环引用
        const index = parents.indexOf(parent)
        if (index != -1) {
            // 如果父数组存在本对象，说明之前已经被引用过，直接返回此对象
            return children[index]  
        }
        // parent 用来存传入的对象，可能被重复引用了。
        parents.push(parent)
        // children用来存返回的新对象。
        children.push(child)
        console.log(child)
        for (let i in parent) {
            // 递归
            console.log(i)
            child[i] = clone(parent[i])
        }
        return child
    }
    return clone(parent)
}
let parent = new RegExp(/\w/, 'g')
const a = deepClone(parent)

console.log(a)