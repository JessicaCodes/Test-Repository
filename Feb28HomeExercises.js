// 1. Log the bottom variables into a organized sentence using basic string concatenation
const word1 = "Hello";
const word2 = "my";
const word3 = "name";
const word4 = "is";
const name = "Jessica";

// Answer:
console.log(word1,", ", word2, " ", word3, " ", word4," ", name,".");

// 2. Log the above variables into a organized setence using a template literal

// Answer:
let template1 = `${word1}, ${word2} ${word3} ${word4} ${name}.`
console.log(template1)


// 3. 'Escape' the character to fix the string below. Log the answer. Note: remove the // to uncomment.
 const fixMe = 'Don\'t worry, you got this';

// Answer:
console.log(fixMe);


// 4. Log the character in the 3rd index of the string below
const animalPlanet = "Elephant Rock";

// Answer:
console.log(animalPlanet[3]);


// 5. Use a string method to save the substring "Rock" into a new variable, from the animalPlanet variable.
//    Log the new variable.
//console.log(animalPlanet.length) 

// Answer:
let newPlanet = (animalPlanet.slice(9,13))
console.log(newPlanet)


// 6. Using ONLY the shouldBeHello variable below, initialize the hello variable with the string "hello" using bracket
//    notation (indexing) and the slice method. Log the variable hello to the console -> it should log "hello".
const shouldBeHello = "jello";

// Answer

let hello = ("h"+ shouldBeHello.slice(1,5));
console.log(hello)


// 7. Using ONLY the aName variable, re-assign aName (on the next line) to be the same string except with the first letter capitalized.
//    When you log the variable, the terminal should display "John".


// Answer

let aName = "john"
console.log(aName.toUpperCas);


// 8. Put the below variable into the appropriate method to remove the decimals values when logging it to the console.
const floatingPointNumber = 5.1234;


// Answer

console.log(Math.round(floatingPointNumber))


// 9. Using the proper operator, store the value of the remainder of 10 divided by 3 in the variable ourRemainder.
//    It should go without saying at this point, log it to the console!

// Answer

let ourRemainder = 10 % 3;
console.log(ourRemainder)



// 10. Research the increment operator for JavaScript. When initializing 
//     our variables b & d, prepend / append the increment operator to variables a & c in the correct way to produce our desired output.

let a = 4;
let b = ++a;
let c = 5;
let d = c++;

// Answer (our desired output): 5 5 6 5
console.log(a, b, c, d);


// 11. If you uncomment the below code, why are we getting a Reference Error? How might we fix it?

if(true){
     let testing = "Log me";
     console.log(testing);
 }

