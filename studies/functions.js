/*
 * function:
 *
 * 
 * Code that contains place holders (parameters) arugments that are passed into the code to return a value.
 The word function can declare a function.
 *  function name(parameter){
     function body
     return statement;
 }
 *  
 */

// 1. first we must define a function then we can execute the function by calling it.

/* 2. Parameters are just place holders (values)
Arguments are the values that are passed into the function.
*/

// 3. Syntax for a function: function name, parameters holding arguments. then the functions is called.
function count(number1, number2){
    return number1 + number2;
}
count();
// 4. to assign a function to a vaiable by delcaring the variable and then assign it to the function.
var assignAFunctionToVariable = function(number1, number2) {
return number1 - number2;
};
assignAFunctionToVariable();
/* 5. Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value.
Functions use parameters (value holders) to take inputs.
Functions use 'return' to get outputs(values out).
*/ 

// 6. scope: can determine the access of variables within different parts of the code.

// Local scope: inside of function
function local() {
    local();
}
// Global scope: outside of function
 
var globalScope;
function global(){};

/* 7. Closures: work as functions inside a function. This gives the inner function power, it access 
global scopes and the local scope it is in by the outer function
*/