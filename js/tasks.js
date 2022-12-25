'use strict';

// Task-1 from codewars.com
//     Bit Counting

/**
 * Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
 */


const countBits = n => {
    // Program Me
      let result = 0;
      n =  n.toString(2);
    for(let i = 0; i < n.length; i++)  {
      if (n[i] === '1') {
        result += Number(n[i]);
      }
    }
    
    return result;
    
  };


  console.log(countBits(1234));
  console.log(countBits(975325652));
  console.log(countBits(39690874));
  console.log(countBits(288));
