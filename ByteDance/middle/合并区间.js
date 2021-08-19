// 合并区间
// 以数组intervals表示若干个区间的集合，其中单个区间为intervals[i] = [starti, endi];
// 请合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。
function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let rows = intervals.length;
  let res = [intervals[0]];
  for (let i = 1; i < rows; i++) {
    if (
      intervals[i][0] > res[res.length - 1][1] ||
      intervals[i][1] < res[res.length - 1][0]
    ) {
      res.push(intervals[i]);
    } else {
      let min = Math.min(intervals[i][0], res[res.length - 1][0]);
      let max = Math.max(intervals[i][1], res[res.length - 1][1]);
      res.pop();
      res.push([min, max]);
    }
  }
  return res;
}
console.log(
  merge([
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9],
    [1, 10],
  ])
);
