// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  // loop -->, then print the values. 
  // the values is 'i' or (cvould be) 'value'
  for(var i = 0; i < array.length; i++){
  console.log(array[i]);
  } 
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  // loop <---, then print the (values) (i)
  for (var i = array.length -1; i >= 0; i--){
     console.log(array[i]);
  } 
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // console.log(object, 1234);
  // return an array
  // research returning object keys
  // use Object.keys() have input inside the ()
  return Object.keys(object);
  // var array = [getObjectKeys];
  
  // return array.push(Object.keys(getObjectKeys));
  // console.log(Object.keys(getObjectKeys));
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // for(var i = 0; i < object.length; i++){
  //   console.log(Object.keys(getObjectKeys));
  // }
  // console.log(Object.keys(object));
  // just like function getObjectKeys(object) 
  // loop over the perviouse function and print keys
  var arrayOfKeeys = Object.keys(object);
  for(var i = 0; i < arrayOfKeeys.length; i++){
    
  console.log(arrayOfKeeys[i]);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // research how to find the object values 
  // Object.values(object)
  // return
  // var array = [];
  return Object.values(object);
  // Object.values(object));
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // same as before functions just print
  var arrayOfValues = Object.values(object);
  for (var i = 0; i < arrayOfValues.length; i++){
    
  console.log(arrayOfValues[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  // key and value are one pair!!!
  //return one or the other
  // just like the peverious functions but find length (.length)
  var arrayOfValues = Object.values(object);
  return arrayOfValues.length;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  // loop over the object in reverese 
  // declare a variable names reverseObjectValues
  // assign the variable to Object.values();
  var objectValues = Object.values(object);
  for(var i = objectValues.length -1; i >= 0; i--){
    console.log(objectValues[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
