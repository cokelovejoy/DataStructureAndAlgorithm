// 设计一个支持push，pop，top操作，并能在常数时间内检索到最小元素的栈。
const MinStack = function () {
    this.list = [];
    this.minVal = 0;
};
MinStack.prototype.push = function (val) {
    this.minVal = this.list.length === 0 ? val : Math.min(val, this.minVal);
    this.list.push(val);
}
MinStack.prototype.pop = function () {
    let val = this.list.pop();
    if (val === this.minVal) {
        let len = this.list.length-1;
        let min = this.list[len];
        while(len > 0) {
            if (this.list[len-1] < min) {
                min = this.list[len-1];
            }
            len--;
        }
        this.minVal = min;
    }
    return val;
}

MinStack.prototype.top = function () {
    return this.list[this.list.length-1];
}
MinStack.prototype.getMin = function () {
    return this.minVal;
}

let stack = new MinStack();
stack.push(1);
stack.push(2);
console.log(stack.getMin());