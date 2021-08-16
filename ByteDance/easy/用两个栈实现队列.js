// 用两个栈实现队列
// 原理：两个栈 来回倒入，倒出。
function CQueue() {
  this.stack1 = [];
  this.stack2 = [];
}

CQueue.prototype.appendTail = function (value) {
  this.stack1.push(value);
};

CQueue.prototytpe.deleteHead = function () {
  if (this.stack1.length === 0) {
    return -1;
  }
  while (this.stack1.length !== 0) {
    this.stack2.push(this.stack1.pop());
  }
  const val = this.stack2.pop();
  while (this.stack2.length !== 0) {
    this.stack1.push(this.stack2.pop());
  }

  return val;
};
