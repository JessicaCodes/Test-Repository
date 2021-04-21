//EXTRA CREDIT!!  

//1. Temperature Converter Lab

function tempConverter(temp){
let fahr = temp;
let fahrToCelc = (fahr - 32) / 1.8;
let fahrToKelv = (fahr + 459.67) / 1.8;
console.log(fahr + "° Fahrenheit converts to " + Math.round(fahrToCelc) + "° Celcius and " + Math.round(fahrToKelv) + "° Kelvin");


let kelv = (temp);
let kelvToCelc = kelv - 273.15;
let kelvToFahr = kelv * 1.8 - 459.67;
console.log(kelv + "° Kelvin converts to " + Math.round(kelvToCelc) + "° Celcius and " + Math.round(kelvToFahr) + "° Fahrenheit");


let celc = (temp);
let celcToFahr = (celc * 1.8 + 32);
let celcToKelv = (celc + 273.15);
console.log("Did you know that " + celc + "° Celcius converts to " + Math.round(celcToFahr) + 
"° Fahrenheit and " + Math.round(celcToKelv) + "° Kelvin?")

/*2. Ceate a variable and assign the string: "we are software engineers at nebula academy"
   then In ONE LINE - extract the word "software" and log it.*/
}

console.log(tempConverter(102))


   
// let whoAreWe = "We are Software Engineers at Nebula Academy";
// console.log(whoAreWe.slice(7,15))