'use strict';

// Task-13 Moving Zeros To The End (5kyu)


/**
 * Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
 */


/**
 * 
 * @param {*} arr 
 * @returns {Array}
 */

 const moveZeros = arr => {
   for(let i = 0; i < arr.length; i++) {
      let zeros = [];
      for(const el of arr) {
         if(el === 0) {
            zeros.push(el);
         }
      }
      arr = arr.filter(el => el !== 0);
      arr = [...arr , ...zeros];
      return arr;
   }
    return arr;
 };

 console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));