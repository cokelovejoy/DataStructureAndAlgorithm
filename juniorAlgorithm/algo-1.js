/**
 * 删除排序数组中的重复项
 * 思路： 已经排完序的数组，相同项一定相邻，注意控制下标
 */

 function removeDuplicates(nums) {
    // 最后一个数后面没有数，所以不需要进循环比较。 
    for (let i=0; i < nums.length - 1; i++) {
        if (nums[i] == nums[i+1]) {
            nums.splice(i, 1)
            i--
        }
    }
    nums.forEach(i => console.log(i))
    return nums.length
 }


let list = [1, 1, 2, 2, 3,3]
console.log(removeDuplicates(list))