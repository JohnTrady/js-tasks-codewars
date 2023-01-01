'use strict';

// Task - 4 Vowel Count (from codewars.com)

/**
 * Return the number (count) of vowels in the given string.
   We will consider a, e, i, o, u as vowels for this Kata (but not y).
   The input string will only consist of lower case letters and/or spaces.
 */

 const getCount = str => {
    str = str.toLowerCase();
    let result = '';
    for( const symbol of str) {
        switch (symbol) {
            case 'a':
            case 'e':
            case 'i': 
            case 'o':
            case 'u': {
                result += symbol;
            }   
        }
      
    }
    return result.length;
 };

 console.log(getCount('California'));

