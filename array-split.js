const nums = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(nums);

// const part = nums.slice(1, 4);
// console.log(part);

// const together = nums.join();
// console.log(together);

const removed = nums.splice(2,3, 77, 88, 99);
console.log(removed);
console.log(nums);
