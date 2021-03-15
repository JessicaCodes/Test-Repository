// Greeting

function greet (name, owner) {
  if (name === owner){
      return "Hello boss"
  } return "Hello guest"
}

console.log(greet("Daniel", "Daniel"))
console.log(greet("Rebecca", "Jessica"))

// Refactored: 
// function greet (name, owner) {
//   return name === owner ? 'Hello boss' :  'Hello guest';
// }

//Double Integer

function doubleInteger(i) {
    return i * 2;
}

console.log(doubleInteger(20))

// Stringy Strings == Could not get it to work

function stringy(size) {
    for(let i = 0; i < size.length; i++)
    for(let j = 0; j < size.length; j++)
    if (!i % 0){
        return 1
    } return 0
  }
  
  console.log(stringy("what the F"))

//Responsible Drinking == Could not get it to work


function hydrate(s){
    let splitString = s.split(' ');
    let sum = 0
    for(i = 0; i < splitString.length; i++){
      if (!isNaN(Number(splitString[i]))){
        sum = sum + (Number(splitString[i]))
     } if (sum > 1){
      return sum + " glasses of water"
    } return sum + " glass of water"}}
  


console.log(hydrate("1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"))
