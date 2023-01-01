'use strict';

// Task - 3 Square Every Digit  (from codewars.com)

/**
 * Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, because 9**2 is 81 and 1**2 is 1.
Note: The function accepts an integer and returns an integer
 */


const  squareDigits = num => {
   let nums = num.toString().split('');
   let result = [];
   for(let i = 0; i < nums.length; i ++) {
       result.push(nums[i]**2);
   }
    result = result.join('');
    return Number(result);

  

   
   
};

console.log(squareDigits(9119 ));
