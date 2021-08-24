// 跳跃游戏
// 给定一个非负整数数组nums，你最初位于数组的第一个下标。
// 数组中的每个元素代表在该位置可以跳跃的最大长度。判断是否能够到达最后一个下标。
// 贪心算法局部最优解： 每次取最大跳跃步数，（取最大覆盖范围），
// 整体最优解：最后得到整体最大覆盖范围
// 贪心算法，每一个位置的数代表了当前位置所能达到的最远的位置，所以在其之间的位置都可以达到。
// 如x位置，能到达的最远的位置为x+nums[x]
function canJump(nums) {
  let len = nums.length;
  let index = 0; // 记录最大的可到达位置
  for (let i = 0; i < len; i++) {
    if (i <= index) { //覆盖范围内
      // 在index范围内， 是可到达的。需要去看i的可到达的位置是否超越了index，就需要更新index
      index = Math.max(index, i + nums[i]); // i + nums[i] 为当前位置所能达到的最远位置
      if (index >= len - 1) {
        return true;
      }
    }
  }
  return false;
}
console.log(canJump([2, 3, 1, 1, 4]));
