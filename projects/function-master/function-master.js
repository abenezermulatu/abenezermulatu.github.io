//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
let objVals =[];

for(let keys in object) {
    objVals.push(object[keys]);
}
    return objVals;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
let keyIsKey = [];
for(let key in object){
    // if(typeof object[keys] === object){
        keyIsKey.push(key);
    }
        return keyIsKey.join(" ");
}


//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var value = [];
for (let key in object){
    if (typeof object[key] === "string"){
    value.push(object[key]);
    }
}
return value.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)){        
    return 'array';
}
    else if (typeof collection === 'object'){
}
    return 'object';
}
//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    let capWord = [];
for (let i = 0; i <= string.length; i ++){
 capWord.push(string[0].toUpperCase() + string.slice(1).toLowerCase());
        
return capWord;
 }       
    
     }       
    

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
var stringTwo = string.split(" ");
    var capWords = [];
for (var i = 0; i < stringTwo.length; i ++){
    capWords.push(stringTwo[i][0].toUpperCase() + stringTwo[i].slice(1));
    
}
    return capWords.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {

var nameTwo = object['name'];
return ("Welcome " + nameTwo[0].toUpperCase() + nameTwo.slice(1).toLowerCase() + "!");
}


//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
// console.log(object);
var name = object.name[0].toUpperCase() + object.name.slice(1).toLowerCase();

var species = object.species[0].toUpperCase() + object.species.slice(1).toLowerCase();

return(name + " is a " + species);
}
//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// get help on this one!!!!!
function maybeNoises(object) {
   if (object && object.noises) { 
         
        if (Array.isArray(object.noises)) { 
            
            if (object.noises.length > 0) { 
                return object.noises.join(' ');
            }
        }
    }
    return 'there are no noises';
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
for(let i = 0; i < string.length; i ++)
if (string.includes(word)){
    return true;
}else{
    return false;
}
}
//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
object["friends"].push(name);
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
if(Array.isArray(object.friends) && object.hasOwnProperty("friends")){
    for(var j = 0; j < object.friends.length; j ++){
        if(name === object.friends[j]){
            return true;
        }
    }
}
return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
// create a nonFriends array to be returned at the end after my logic
// input: name <string> && array <full of objects
// output: array full of all the non friends of the name argument
// Constraints: must look through array of objects and find that name argument
// useing the friends array, use that and loop again through the array
// of objects and see who isnt in the friends of array of that person

// edge case
let notFriends = [];


for(let i = 0; i < array.length; i ++)

// must look through array of objects and find that name argument
// check the object name does not match the name and loop with includes method through 
if(!(array[i]['name'] === name) && !array[i]['friends'].includes(name) ){
    // push the not friends into not friends 
    notFriends.push(array[i]['name']);
}


return notFriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

if(object.hasOwnProperty(key) === Object.keys(object)){
    return object[key];
} else {
    object[key] = value;
}
return object;
}
//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
for (var key in object) {
    for (let i = 0; i < array.length; i++){
        if (key === array[i]){
            delete object[key];
        }
    }
}
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
return array.filter((a,b) => array.indexOf(a) === b);
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}