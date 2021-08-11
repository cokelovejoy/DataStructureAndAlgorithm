// 复原IP地址
/**
 * 给定一个只包含数字的字符串，用以表示一个 IP 地址，返回所有可能从 s 获得的 有效 IP 地址 。你可以按任何顺序返回答案。
 * 有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔
 */

// 求有效解有哪些，可能会要使用到回溯算法，回溯算法会使用到递归遍历。
// 总共4个区间，每个区间的数字大小为0-255。
// 1、一开始，字符串的长度小于 4 或者大于 12 ，一定不能拼凑出合法的 ip 地址（这一点可以一般化到中间结点的判断中，以产生剪枝行为）；
// 2、每一个结点可以选择截取的方法只有 3 种：截 1 位、截 2 位、截 3 位，因此每一个结点可以生长出的分支最多只有 3 条分支；
// 根据截取出来的字符串判断是否是合理的 ip 段，这里写法比较多，可以先截取，再转换成 int ，再判断。我采用的做法是先转成 int，是合法的 ip 段数值以后，再截取。
// 3、由于 ip 段最多就 4 个段，因此这棵三叉树最多 4 层，这个条件作为递归终止条件之一；
// 4、每一个结点表示了求解这个问题的不同阶段，需要的状态变量有：
// begin：截取 ip 段的起始位置；
// rest 记录还剩余多少段没有被分割；
// path：记录从根结点到叶子结点的一个路径（回溯算法常规变量，是一个栈）；
// res：记录结果集的变量，常规变量。
function restoreIpAddresses(s) {
  let len = s.length;
  let res = [];
  if (len < 4 || len > 12) {
    return res;
  }
  let path = [];
  // 深度优先遍历，递归
  function dfs(s, len, begin, rest, path, res) {
    // 递归退出的条件，起始位置== 字符串长度时。剩余的要被分割的字段 为 0，就将path拼接成字符串，存入结果。
    if (begin === len) {
      if (rest === 0) {
        res.push(path.join("."));
      }
      return;
    }
    // 从起始位置开始，只可以截取 1位，2位， 3位
    // begin为开始截取的位置，i为终止截取的位置
    for (let i = begin; i < begin + 3; i++) {
      // 剪枝条件：终止截取的位置大于等于字符串的长度，结束循环
      if (i >= len) {
        break;
      }
      // 剪枝条件：实际的剩余的 字符串长度 要大于 合法剩余的ip地址段的字符长度时，直接进入到下一次循环。
      if (rest * 3 < len - i) {
        continue;
      }
      // 判断begin 到 i 之间的字符串，是否合法，合法就加入path。
      if (judgeIpSegment(s, begin, i)) {
        let currentIpsegment = s.substring(begin, i + 1);
        path.push(currentIpsegment);
        dfs(s, len, i + 1, rest - 1, path, res); // 进入下一个层级的节点，i+ 1为最新的开始截取的位置，rest-1为还剩的ip段。
        path.pop(); // 回溯的地方
      }
    }
  }
  // 判断是否位Ip地址合法段
  function judgeIpSegment(s, left, right) {
    let len = right - left + 1;
    // 先导0 不合法
    if (len > 1 && s[left] === "0") {
      return false;
    }
    let res = 0;
    // 计算 该段数据的数值大小，必须在0-255之间
    while (left <= right) {
      res = res * 10 + Number(s[left]);
      left++;
    }
    return res >= 0 && res <= 255;
  }
  dfs(s, len, 0, 4, path, res);
  return res;
}
