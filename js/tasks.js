'use strict';


// Task - 8 RGB To Hex Conversion (from codewars.com)

/**
 * The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
 Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
 The following are examples of expected output values:
 rgb(255, 255, 255) // returns FFFFFF
 rgb(255, 255, 300) // returns FFFFFF
 rgb(0,0,0) // returns 000000
 rgb(148, 0, 211) // returns 9400D3
*/



const rgb = (r, g , b) => {  
   const hex = [r, g , b];
   let result = [];
   for(let val of hex) {
      if( val  === 0) {
        val = '00';
      } else if ( val < 0) {
         val ='00';
      } else if (val > 255) {
        val = 'FF';
      } else if (val < 16) {
            val = `0${val.toString(16)}`;
      } else val = val.toString(16);
      result.push(val);       
    }   
   return result.join('').toUpperCase();
}
    


   
    
   


console.log(rgb(255, 255, 255));
console.log(rgb(0, 0, 0));
console.log(rgb(118, 139, 157));
console.log(rgb(148, 0, 211));
console.log(rgb(255, 255, 300));
console.log(rgb(0, 0, -20));
console.log(rgb( 6,14,20));







