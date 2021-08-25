// 最多可以参加的会议数目
// 扫描算法.
// 每个时间点最多参加一个会议, 从1开始遍历所有时间,对于每一个时间点,所有在当前时间及之前时间开始,并且在当前时间还未结束的会议都可以参加.
// 在所有可参加的会议中,选择结束时间最早的会议是最优的,因为其他会议还有更多的机会可以参加

// 使用小根堆记录所有当前可参加会议的结束时间，动态获取当前结束时间最早的会议。
// 在每一个时间点，首先将当前时间点开始的会议加入小根堆，再把当前已经结束的会议移除小根堆（无法参加），然后从剩下的会议中选择一个结束时间最早的去参加。
/**
 * @param {number[][]} events
 * @return {number}
 */
 var maxEvents = function(events) {
  let mx = 0;// 记录最大天数
  let start = new Array(100005); // start存储每一天对应的开始event下标
  for (let i = 0; i < events.length; i++) {
      if (start[events[i][0]] === undefined) {
          start[events[i][0]] = [i]
      } else {
          start[events[i][0]].push(i);
      }
      mx = Math.max(mx, events[i][1]);
  }
  let ans = 0;
  // 维护当前可执行会议的endDay endDay小的排在前面
  let minQ = new MinPriorityQueue(
      { 
          priority: (endDay) => {
              return endDay;
          }
      }
  );
  let getEndDay = (index) => {
      return events[index][1] + 1; // +1 代表这条在endDay时已经过期
  }
  // 按天遍历
  for (let i = 1; i <= mx; i++) {
      if (start[i] != undefined) { // 把当天开始的会议加入minQ
          for (let index of start[i]) {
              minQ.enqueue(getEndDay(index));
          }
      }
      while (minQ.size() != 0 && minQ.front()['element'] <= i) { 
          //这部分数据一定在小顶堆顶部
          minQ.dequeue();
      }
      if (minQ.size() != 0){ // endDay最早的会议选为当天的会议 选择并踢出minQ
          minQ.dequeue();
          ans++;
      }
  }
  return ans;
};
