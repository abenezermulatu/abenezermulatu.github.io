/*
 * control flow:
 *
 * 
 * The sequence of flow the program executes the code typed. Sometimes this code can be manipulated 
 but majority of the time the code is run from top to bottom. Control flow is changed with loops and or conditonal statements
 *  
 *
 */           
 
// 1. If statements: has the job to return a value based on if the given statment is one option or the other.

var shoeSize = 12;
    if (shoeSize > 10){ // ---> if statement
    return "clownShoes";
}


// 2. Else-if: the if statment's bestfriend. This is used each time after the if statment when we want to continue our if statment.
// console.log(actvity);
var jerseyNumber = 7;
    if (jerseyNumber < 10){
    console.log('single digit');
}
else if (jerseyNumber > 9){ // ---> else if statement
    console.log('double digit'); 
}

// 3. Else: has the job of finsihing or being the default statment. If all other statements are not true this last statment is the excuted value.
 var busNumber = 30;
     if(busNumber < 10 ){
 console.log('old bus');
 } 
 else if(busNumber <= 20){
    console.log('new bus');
 } else{ // else statement 
     console.log('eletric bus');
 
 }
 
 
//  4. switch: has the job of giving selected options to pick from (usually similar).
var shoes;
switch (shoes) {
    case 'hikingBoot':
        alert ('buy');
        break;
    case 'sneaker':
        alert ('dont buy');
        break;
    case 'tennisShoe':
         break;
        // default:
    
}
