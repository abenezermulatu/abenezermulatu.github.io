/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob


// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
myVariable = true;
myVariable = "someString";
return myVariable;
// 4. var, let, const //

var variableExample = 1;
console.log(variableExample);// prints => var
let reading =   'books;';
console.log(reading); // prints => books
const heightInFeet = 'five feet';
console.log(heightInFeet); // prints => five feet

// NOTE: We can assign var, let, & const values
// var: is hoiseted to the top & reahable in both global and local scopes can be reassign.
// let: is also hoiseted to the top but reachable in only it's local scope can be reassign.
// const: is not hoisted to the top & reachable in only it's local scope and also cannot be reassign.

// 5. Hoisting //
function hisName(name) {
  console.log("My name is " + name);
}

hisName();

//  NOTE: hoisting helps store/put declarded functions & variables into memory. This only brings the code (in memory, to the top of the block) does not initialize the code.
// console.log(num);
// num = 6; // => this will give a ReferenceError
// The attempt of using the code before it is declared will result in a ReferenceError.
