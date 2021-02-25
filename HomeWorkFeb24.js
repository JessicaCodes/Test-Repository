/*Create a variable and assign the string: "we are software engineers at nebula academy"
Using the string…*/

let whoAreWe = "We are Software Engineers at Nebula Academy!";

//Log the index of 'software'

//console.log(whoAreWe.length)

//length is 44

/*const whatEngineer = whoAreWe.indexOf("Software");<--- This didn't work
    console.log(whatEngineer);*/

console.log(whoAreWe.indexOf("S"));
console.log(whoAreWe.indexOf("o"));
console.log(whoAreWe.indexOf("f"));
console.log(whoAreWe.indexOf("t"));
console.log(whoAreWe.indexOf('w', 6));
console.log(whoAreWe.indexOf('a', 6));
console.log(whoAreWe.indexOf("r", 6));
console.log(whoAreWe.indexOf("e", 6));

//Log the index of 's'

console.log(whoAreWe.indexOf("s"))

//Log the index of 'web'

let spider1 = "web";
    console.log(spider1.indexOf('w'))
    console.log(spider1.indexOf('e'))
    console.log(spider1.indexOf('b'))

//Extract the word 'software' and log it

let word3 = whoAreWe.slice(7,16)
    console.log(word3)

//Extract the word 'academy' and log it

let word7 = whoAreWe.slice(36,43);
    console.log(word7)


/*
Create a variable and assign the string: "we are learning new string methods"
Using the string…*/

let newstring = "we are learning new string methods";

//Log the length of the string

console.log(newstring.length);

//Log the last character of the string

console.log(newstring.slice(33));


//Log the character at index 5

console.log(newstring[5]);

//Uppercase everything in the string

console.log(newstring.toUpperCase());

//Lowercase everything in the string

console.log(newstring.toLowerCase());

//Create a new variable with your favorite ice cream flavor

let myFaveIceCream = "Chocolate";

//Log the string, 'My favorite ice cream flavor is (your favorite ice cream flavor)'*/
 
console.log("My favorite icecream is"+ " " + myFaveIceCream);