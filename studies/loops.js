/*
* Loops:
*
* loops repeats over and over _ amout of times (as specified).
* Loops must have three important points: 1) starting condition, 
2) stopping condition, & an increment or decrement (iterator (i)).
* 
*1) While Loop:
* A while loop has the job of continuing while the condition is true,
once the condition is no longer returning true the stop executing and 
move on till the final statment.
*
*
*/
var myAge;
 ex: while (myAge < 100) {
    return myAge;
}

/* For Loops:
* A for loop has the job of repeating itself forever till it is no 
longer true(evaluates false).
*
*
*/
ex: 
var numberOfSchools = [];
for (var i = 0; i < 4; i++) {
    numberOfSchools.push(i);
}
console.log(numberOfSchools);



/* For-in Loops:
For-in Loops has the job to iterate over an object ({}).
*
*
*/
ex: var coding = {difficulty: "difficult", experinced: "zero"};

for (var x in coding) {
    console.log(coding[x]);
}
//2) Example: looping forward & looping backward
var loopingForward = [];
for (var i = 0; i < 20; i++){
    loopingForward.push(i);
}    
    console.log(loopingForward[i]); // --> looping forward

 var loopingBackWard = [];
for (var i = loopingBackWard.length -1; i >=0; i--){
    loopingBackWard.push(i);
}   
    console.log(loopingBackWard[i]); // --> looping backward
/*
*
*
*
3) Example: looping over an Array forward & backward
*/
var arrayForward = [];
for(var j = 0; j < arrayForward.length; j++) {
    arrayForward.push(i);
}
    console.log(arrayForward[i]); // --> looping over array forward
    
    var backward = ['me','myself','I'];
for(var l = backward.length -1; l >= 0; l--) {
    backward.push(i);
}
    console.log(backward[i]); // --> looping array backward
/*
*
*
*
*4) Example: loop over an Object
*/
ex: var tv = {color: "black", brand: "TCL"};

for (var y in tv) {
    console.log(tv[y]);
}

