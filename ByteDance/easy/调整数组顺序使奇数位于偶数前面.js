// 调整数组顺序 使奇数位于偶数前面
// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有的偶数位于数组的后半部分。
function exchange(nums) {
    let odd = [];
    let event = []
    nums.forEach(item => {
        if (item % 2 === 0) {
            event.push(item)
        } else  {
            odd.push(item)
        }
    })
    return odd.concat(event);
}
console.log(exchange([1,2,3,4]));
