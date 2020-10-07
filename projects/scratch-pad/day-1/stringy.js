// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    // input and output is string //
    // return the length of string //
    return string.length;
    


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    // input and output is string //
    // return string in lowercase //
    return string.toLowerCase();


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    // input and output is string //
    // return string in lowercase //
return string.toUpperCase();


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
// input and output is sting //
// create an array to hold splited array string //
// string = string.toLowerCase();
var splittedArrayString = string.toLowerCase().split(" ")
// use .join method to join the array //
return splittedArrayString.join("-");

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
    // test if input string beings with the character 's'
    // string immutabillty (look it up)
    
    if(string[0].toLowerCase() === char.toLowerCase()) {
         return true;
     } else {
         return false;
     } 
  
    // else isnt needed 
   
    

    

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
    //  test if input string beings with the character 's'
    // string immutabillty (look it up)
    // else isnt needed 
    if(string[string.length-1].toLowerCase() === char.toLowerCase()) {
        return true;
    } 
        return false;
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // return stings concatenated 
    // what operator concatenates two stings
    var concatenateStrings;
    
    concatenateStrings = stringOne + stringTwo;
    
    return concatenateStrings;



    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(...args) {
    // YOUR CODE BELOW HERE //
    // return all strings and join them together
    // pulls out all the arguments, and passed to array called args
//  var strings; 
//  strings = concat(stringOne, stringTwo);
//  var args = [];
//  for(var i = )
 return args.join("");
 
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // if the length of stringOne is longer than stringTwo return stringOne
    // property is .length 
if(stringOne.length > stringTwo.length){
    return stringOne;
}else{
    return stringTwo;
}
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // compare [0] of both strings, see which is greater in abc's
    // return 1 is stringOne is greater
    // return 2 is stringTwo is greater


// if('a' < 'b'){
//     return true;
// }if('aa' < 'ab'){
//     return true;
// }if('aaa' < 'aab'){
//     return true;
// }else{ 
//     return false;
// }

// var compareAbc = stringOne.compareTo(stringTwo);
return stringTwo.localeCompare(stringOne);
// if(stringOne.localeCompare(stringTwo)){
//     return 1;
// }if(stringTwo.localeCompare(stringOne)){
//     return -1;
// }else{
//     return 0;
// }

// console.log(stringOne.localeCompare(stringTwo));


    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // &&&&&& find out what method to use and look back to review &&&&&
return stringOne.localeCompare(stringTwo);



    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
