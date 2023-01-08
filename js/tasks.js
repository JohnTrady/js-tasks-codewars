'use strict';

// Task-11 Rot13 from codewars.com (5kyu)

/**
 * ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
 */

/**
 * 
 * @param {string} message 
 * @return {string}
 */
 
const  rot13 = message => {
  const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
  let encode = '';
  for(let i = 0 ; i < message.length; i ++) {
     const index = input.indexOf(message[i]);
     if(input[index] === undefined) {
      encode += message[i];
    } else encode += output[index];  
  }
  return encode;
};

console.log(rot13('Hello World!')); // Uryyb Jbeyq!


