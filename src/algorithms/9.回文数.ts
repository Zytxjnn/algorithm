
// 将整数转为字符串
// export default function isPalindrome(x: number): boolean {
//     const str1 = x.toString();
//     const str2 = str1.split("").reverse().join("");
//
//     return str1 === str2;
// };

// 进阶 1221
export default function isPalindrome(x: number): boolean {
   if (x < 0 || (x % 10 == 0 && x !== 0)) return false;

   let reverseNumber = 0;
   while (x > reverseNumber) {
       reverseNumber = reverseNumber * 10 + x % 10
       x = Math.floor(x / 10);  // 去掉数字最后一位
   }
    return x === reverseNumber || x === Math.floor(reverseNumber / 10);
};
