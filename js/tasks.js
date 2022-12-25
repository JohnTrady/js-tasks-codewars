'use strict';

// Task-2 from codewars.com
//   Split Strings

/**
 * Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
 */


/**
* Examples:
* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
 */


const splitStrings = str => {
    let result = [];
    if(str.length % 2 !== 0) {
        str += '_';
    }
    for(let i = 0; i < str.length; i+= 2 ) {
      
        result.push(str[i]+ str[i + 1]);
    }

    return result;

    
};
console.log(splitStrings('abc')); // [ 'ab', 'c_' ]
console.log(splitStrings('abcd')); // [ 'ab', 'cd' ]
console.log(splitStrings('abcdef'));// [ 'ab', 'cd', 'ef' ]
console.log(splitStrings('abcdefg')); // [ 'ab', 'cd', 'ef', 'g_' ]
console.log(splitStrings('')); // []