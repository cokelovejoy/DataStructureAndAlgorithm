// 移动零
// 给定一个数组nums,编写一个函数将所有0移动到数组的末尾，同时保持非零元素的相对顺序

// 使用双指针
function moveZeroes(nums) {
    let len = nums.length - 1;
    let left = 0;
    let right = 0;
    while (right <= len) {
        if (nums[right] != 0) { // 右指针不等于0 就和左指针互换
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
        }
        right++;
    } 
    return nums;
}
console.log(moveZeroes([0,0,1]));
