// 数组扁平化flat
let arr = [1, 2, [3, 4, [5, [6]]]];
console.log(arr.flat(Infinity)); //flat参数为指定要提取嵌套数组的结构深度，默认值为 1

//用reduce实现
function fn(arr) {
  return arr.reduce((prev, cur) => {
    return prev.concat(Array.isArray(cur) ? fn(cur) : cur);
  }, []);
}

// 使用迭代的方式实现flatten函数
/**
 * 使用递归的方式处理
 * wrap 内保存结果 ret
 * 返回一个递归函数
 */
function wrap() {
  var ret = [];
  return function flat(a) {
    for (var item of a) {
      if (item.constructor === Array) {
        ret.concat(flat(item));
      } else {
        ret.push(item);
      }
    }
    return ret;
  };
}
