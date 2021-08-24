// 跳跃游戏
// 给定一个非负整数数组nums，你最初位于数组的第一个下标。
// 数组中的每个元素代表在该位置可以跳跃的最大长度。判断是否能够到达最后一个下标。
function canJump(nums) {
  let len = nums.length - 1;
  let jump = 0;
  let pointer = 0;
  while (pointer < len) {
    console.log(pointer);
    jump = nums[pointer]; // 记录要跳的步数
    pointer = pointer + jump; // 下一个位置
    if (jump == 0) {
      return pointer == len ? true: false;
    }
  }

  return pointer >= len ? true : false;
}
console.log(canJump([2,0]));
