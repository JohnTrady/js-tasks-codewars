'use strict';


// Task-10 Valid Parentheses from codewars.com (5 kyu)


/**
 * Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
 */

/**
 * 
 * @param {string} parens 
 * @returns {string}
 */

const  validParentheses = parens => {
  const stack= [];

  for(const bracket of parens) {
    if (bracket === '(') {
       stack.push(')');
    } else if ( stack.pop() !== bracket) {
      return false;
    }
  }

  return !stack.length;   
}

console.log(validParentheses('()'));  // true
console.log(validParentheses(')(()))')); // false
console.log(validParentheses('(')); // false
console.log(validParentheses('(())((()())())')); // true 