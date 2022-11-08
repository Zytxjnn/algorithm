// 暴力算法
// export default function searchInsert(nums: number[], target: number): number {
//     if (nums[0] >= target) return 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (target === nums[i]) return i;
//         if (target > nums[i - 1] && target <= nums[i]) return i;
//     }
//     return nums.length;
// };


// 二分查找
export default function searchInsert(nums: number[], target: number): number {
   let middle = Math.floor(nums.length / 2),
       right = nums.length - 1,
       left = 0;

   while (right >= left) {
       if (target === nums[middle]) return middle;
       if (target > nums[middle]) {
           left = middle + 1;
           middle = Math.floor((left + right) / 2);
       } else {
           right = middle - 1;
           middle = Math.floor((left + right) / 2);
       }
   }
   return -1;
};

