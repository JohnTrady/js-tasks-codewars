'use strict';

// Task - 5 Beginner Series #3 Sum of Numbers (from codewars.com)

/**
 * Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
 */


const getSum = (a, b) => {
    let result = 0;
    if (a > b) {
        let temp = a;
        a = b;
        b = temp;
    }
    for(let i = a; i <= b; i++) {
        result += i;
   }
   return result;
}
console.log(getSum(-1, 2));