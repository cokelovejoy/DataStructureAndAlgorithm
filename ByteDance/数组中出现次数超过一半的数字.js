// 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
function majorityElement(nums) {
    let recoder = {};
    let len = nums.length;
    for (let i = 0; i < len ;i++) {
        if (!recoder[nums[i]]) { // 没有这个数字
            recoder[nums[i]] = 1;
        } else {
            recoder[nums[i]] += 1; // 有这个数字
        }
        if(recoder[nums[i]] >= len/2) {
            return nums[i];
        }
    }
}