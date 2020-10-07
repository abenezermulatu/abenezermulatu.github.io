/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// representing a String, the name of an animal on which to perform a search.

function search (animalsArray, stringName){



for (var i = 0; i < animalsArray.length; i++){
    if (animalsArray[i].name === stringName) {
        return animalsArray[i];
    }
}
        return null;
}
//     === Lola) {
//         return animalsArray[0];
//     } else {
// }       return null; 
//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
 function replace (animals, name, replacement) {
     for (var i = 0; i < animals.length; i++) {
         if(name === animals[i].name) {
             return animals.splice(i,1,replacement);
         }
}
}
 


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove (animals,name){
     for (var i = 0; i < animals.length; i++) {
         if(name === animals[i].name) {
             return animals.shift(i,1);
         }
}
}



//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add (animals,animal) {
     if(animal.name.length > 0 && animal.species.length > 0) {
        if(!search(animals, animal.name)) {
            animals.push(animal);
            }
    }
    }
function add(animals, animal) {
     if (animal.name.length > 0 && animal.species.length > 0) {
       if (!search(animals, animal.name)) {
           animals.push(animal);
       }
   }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
