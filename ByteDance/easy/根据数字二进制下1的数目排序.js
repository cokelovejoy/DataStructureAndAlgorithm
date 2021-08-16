// 根据数字二进制下1的数目排序
// 给你一个整数数组 arr 。请你将数组中的元素按照其二进制表示中数字 1 的数目升序排序。

// 如果存在多个数字二进制中 1 的数目相同，则必须将它们按照数值大小升序排列。

function sortByBits(arr) {
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    arr[i] = arr[i].toString(2);
  }
  arr.sort((a, b) => {
    let countA = a.split("").filter((item) => item === "1").length;
    let countB = b.split("").filter((item) => item === "1").length;
    if (countA > countB) {
      return 1;
    } else if (countA < countB) {
      return -1;
    } else {
        return parseInt(a, 2) - parseInt(b,2);
    }
  });
  return arr.map(item=> parseInt(item, 2));
}

console.log(sortByBits([0,1,2,3,4,5,6,7,8]))
