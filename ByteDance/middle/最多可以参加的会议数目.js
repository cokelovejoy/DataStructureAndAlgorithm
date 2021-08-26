// 最多可以参加的会议数目
// 贪心法
// 对于某一天我们优先选择一个结束时间最早的会议，这是因为结束时间更晚的会议后面还有机会选中
// 实现:S
// 获取最多的天数：需要遍历events获得
// 构建一个映射【开始天】 和 【结束天】，多个会议会在同一天开始，但可能不同的天结束
// 维持一个小顶堆的优先级队列
// 按照天数开始遍历，队列里插入从这i天开始会议结束时间
// 清空队列结束时间小于i的
// 去队列里顶部（就是结束时间最小）就是那天选择
// 整个过程中记录取到时间的天数，就是结果

/**
 * @param {number[][]} events
 * @return {number}
 */
// 实现一个小根堆。
 class Pq {
    constructor(arr) {
      if (arr && arr.length) {
        this.tree = arr;
        return;
      }
      this.tree = [];
    }

    // 入队 , 将小的放在队头
    enqueue(val) {
     
    }

    // 出队
    dequeue() {
   
    }

    // 取队首
    top() {
      return this.tree[0];
    }
    empty() {
      return this.tree.length == 0 ? true : false;
    }
  }
function maxEvents(events) {
  // 优先队列，每次弹出最小的
  let max = 1e5 + 1;
  let left = Array(max)
    .fill(0)
    .map(() => []);
  // left [start] [] 记录了 第几天天开始的会议有哪些 即events中的下标
  // events 的下标代表不同的会议
  for (let i = 0; i < events.length; i++) {
    left[events[i][0]].push(i);
  }
  let ans = 0;
  let priorityQueue = new Pq();
  for (let i = 1; i < max; i++) {
    // 扫描 时间点 ，i 代表 第一天
    for (let j of left[i]) {
      // 遍历 第 i 天开始的会议的下标
      // 将该会议的结束时间入队
      priorityQueue.enqueue(events[j][1]);
    }
    // 将最早的会议出队列
    // 队列不为空，并且队列的对头元素要 小于 当前时间点
    while (!priorityQueue.empty() && priorityQueue.top() < i) {
      priorityQueue.dequeue();
    }
    // 队列不为空，继续出队列
    if (!priorityQueue.empty()) {
      priorityQueue.dequeue();
      ans++;
    }
  }
  return ans;
}

console.log(
  maxEvents([
    [1, 2],
    [1, 2],
    [1, 6],
    [1, 2],
    [1, 2],
  ])
);
