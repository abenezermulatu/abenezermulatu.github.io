// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // return a entire function to compare the base and given value to check which is greater
    // base can be a string, can be a number
    return function (value){
        // if the value is greater than the compared base , return true
        if(value > base){
            return true;
        } else {
            return false;
    }
    };
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // the exact same as the above code(return a entire function to compare the base and given value to check which is greater(less for this one)
    // base can be a string, can be a number) but the coparsion is chaged the other way
    return function (value){
        // if the value is greater than the compared base , return true
        if(value < base){
            return true;
        } else {
            return false;
    }
    };
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    // console.log(startsWith, '$$$$$') this shows this will be case sensitve
    // find and use the at string, shoud be at [0] bc this is the beging of the string
    return function (string){
        // if the value is greater than the compared base , return true
        if(string[0].toUpperCase() === startsWith.toUpperCase()){
            return true;
        } else {
            return false;
    }
    };
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    // console.log(startsWith, '$$$$$') this shows this will be case sensitve
    // find and use the 'at' string, shoud be at [.length-1] bc this is all of the string
     return function (string){
    if(string[string.length -1].toUpperCase() === endsWith.toUpperCase()){
            return true;
        } else {
            return false;
    }
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    // input is an array of strings
    // and a function going into modify
    // return the array of strings after utilizing the modify funstion on them
    // start at beginning of the strings array, end at the ending of the array
    // need to create the array here to hold the modified strings? console.l
  var array = [];
     for(var i = 0; i < strings.length; i++){
        var upperCase = modify(strings[i]); // string
        array.push(upperCase);
     }


     return array;
        //  console.log(strings[i].);
     
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    //  console.log(strings, 6789876);
    //  console.log(test, 12345);
    // bang op. will help return the oppiste to help get to the next return
    // console.log(!true);
    for (var i = 0; i < strings.length; i++){
        if (!test(strings[i])){
            return false;
        }
    }
    return true;

    // array.push(tests);
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}