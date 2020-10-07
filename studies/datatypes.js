/*
 * Datatypes:
 *
 * 
 * To exucute/operate variables the computer will need to know the type of data that is 
 being thrown into JavaScript. Datatypes can be a Number, String, Boolean, Array, Object, 
 Function, undefined, null, NaN. 
 *  
 *  
 *
 * 1. To use a datatype we place a declaration and any datatype afterwards.
 *
 * 2. one type of declaration is a variable, a variable can hold many datatypes. 
 datatypes can be reassigned to different variaables.
 */                                     

// 1. Number: numeric data //
var myHeight = 6;

/*
 * 
 * 
 */
console.log(myHeight); // prints => 6 //a number

// 2. String: data in both single and double qutoes //
 var myName = 'john'; // a string
console.log(myName); // prints => john 

// 3. Boolean: consist of a true or false statement //
var curlyBraketsAreTheBest = true; // boolean
return curlyBraketsAreTheBest;
// 4. Array: an array is used to store a list of data //
var arrayStudyList = ['read eloquent javascript', 'redo checkpoints', 
'improve studies page']; // my collection of simliar variables (study material)
return arrayStudyList;
// 5. Object: where properties or methods are placed ex: functions & key:value pairs//
var aboutME = {likes: "running", dislikes: 'strawberry milk', age: 20};

// 6. function: have paramters(place holders) and arguments( values being used in the function) //
function meHappy(good, food){
    var joinStrings = meHappy();
    joinStrings.join(good + food);
    return joinStrings;
}

// 7. undefined: variable is not assigned a value
// ex: var me;

// 8. null: a sub for an intetended absence of a value assigned to an object
var who = null;

// 9. NaN: Not-A-Number
var tvSize = "TLC" // not-a-number(NaN)

// 10. Infinity and -Infinity: Infinity is the numeric that never ends (infinity), - Infinity is the negative version.
var galaxyLength = 1 * Infinity; 

/* 11. primitive/simple and complex data: primitive cannot be reassigned very short, used for declarations and contains text. Complex data types 
include immutable values too: null, undefined, numbers, strings, booleans. And also objects arrays and functions which contain many types elements, text  and values
*/

/* 12 Primitive values are passed to a function BY COPY, complex values are BY REFERENCE.: Complex data types 
have objects, arrays, and functions which can help munipulate the code  
*/

