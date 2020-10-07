// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
// var fizzz = ();
// fizzBuzz(100);
// console.log(i);
// var fizzy = 100;
// make a loop 1 to 100
// what opertor will allow you to do this?
// log i to get ever 'number' to print.
for(var i = 1; i <= 100; i++){
    // if % 3 & 5 === 0 print 'FizzBuzz' could use (3*5 =) 15%
if(i % 3 === 0 && i % 5 === 0){
// console.log(('@@@@@@@@@@', i % 3)
console.log('FizzBuzz');
 } 
//  if % 3 === 0 print 'Fizz'
else if(i % 3 === 0 ){
console.log('Fizz');
  
}
// if % 5 === 0 print 'Buzz'
else if(i % 5 === 0 ){
    console.log('Buzz');
} else {
    console.log(i);
}
}    
 
 
// console.log(fizzy );
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}