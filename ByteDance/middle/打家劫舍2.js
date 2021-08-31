// 打家劫舍2
// 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这
// 个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。
// 同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。
// 给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额。

// 打家劫舍拓展版：房间是环形排列的
// 环状排列，意味着第一个房子和最后一个房子中只能选择一个偷窃.把环形分成两个单排列
// 1.在不偷窃第一个房子的情况下(nums[1]), 最大金额是p1;
// 2.在不偷窃最后一个房子的情况下(nums[n-1]), 最大金额是p2;
// 然后选最大的金额:max(p1, p2);

function rob(nums) {
  if (nums.length == 0) {
    return 0;
  }
  if (nums.length == 1) {
    return nums[0];
  }
  function myRob(nums) {
    let pre = 0;
    let cur = 0;
    let temp = 0;
    for (let num of nums) {
      temp = cur;
      cur = Math.max(pre + num, cur);
      pre = temp;
    }
    return cur;
  }
  // 偷最后一家[1, len]
  // 不偷最后一家[0, len - 1)
  return Math.max(myRob(nums.slice(0, nums.length - 1)), myRob(nums.slice(1)));
}
