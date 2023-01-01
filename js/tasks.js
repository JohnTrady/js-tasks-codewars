'use strict';

// Task-7  Sort the odd (from codeewars.com)

/**
* You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their      original positions.
*/

/**
 * 
 * {Examples
 * [7, 1]  =>  [1, 7]
 * [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
 * [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]} 
 *  
 */


const sortArray = array => {
    
    for(let i = 0; i < array.length -1; i ++) {
       let min = i;
       if(array[i]%2 !== 0){
       for(let j = i + 1; j<array.length; j++ ) {
           if (array[j]  < array[min] && array[j]%2 !== 0) {
               min =  j;
              
           }
       }
    }

       let temp = array[i];
       array[i] = array[min];
       array[min] = temp;
       
       

    }
    return array;
};

console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
console.log(sortArray([5, 8, 6, 3, 4]));