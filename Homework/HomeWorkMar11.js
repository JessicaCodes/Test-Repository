// // Greeting

// function greet (name, owner) {
//   if (name === owner){
//       return "Hello boss"
//   } return "Hello guest"
// }

// console.log(greet("Daniel", "Daniel"))
// console.log(greet("Rebecca", "Jessica"))

// // Refactored: 
// // function greet (name, owner) {
// //   return name === owner ? 'Hello boss' :  'Hello guest';
// // }

// //Double Integer

// function doubleInteger(i) {
//     return i * 2;
// }

// console.log(doubleInteger(20))

// // Stringy Strings == Could not get it to work

function stringy(size) {
    for(let i = 0; i < size.length; i++)
    for(let j = 0; j < size.length; j++)
    if (!i % 2 == 0){
        return 1
    } return 0
  }
  
  console.log(stringy("what the F"))

// //Responsible Drinking == Could not get it to work


// function hydrate(s){
//   let splitString = s.split(' ');
//   let sum = 0;
//   for(i = 0; i < splitString.length; i++){
//     if (Number(splitString[i])){
//       sum = sum + (Number(splitString[i]))
//    } 
//   } if (sum > 1){
//     return sum + " glasses of water";
//   } 
//     return sum + " glass of water";
//   }



// // console.log(hydrate("3 shots and 2 drinks"))


// function solve(arr){

//  let reverseArray = arr.reverse()
//  let direction = reverseArray[0].slice(0,5)
//  let lastElement = reverseArray.pop()
//  let begin = lastElement.slice(0,6)

//  console.log(direction)
//  console.log(lastElement, "<==")
//  console.log(begin)
//  return reverseArray
// }
 
// // ).slice(0,6)


// function solve(arr){

//   let reverseArray = arr.reverse()
//   let direction = reverseArray[0].slice(0,5)
//   let lastElement = reverseArray.pop()
//   let begin = lastElement.slice(0,6)
//   if (direction === 'Left'|| direction === 'Right'){
//     reverseArray
//   }

 
//   console.log(direction)
//   console.log(lastElement, "<==")
//   console.log(begin)
//   return reverseArray
//  }

// console.log(solve(['Begin on 3rd Blvd', 'Right on First Road', 'Left on 9th Dr']))




function evenOrOdd(str) {
  let arr = str.split('')
  let even = arr.filter(a => a%2 === 0)
  let evenSum = even.map(a => Number(a => Number(a)).reduce((a,b) => a+b)
  let oddSum = 0
  for (i=0; i < str.length; i++){
      if (Number(str[i] % 2 === 0){
          evenSum = evenSum + Number(str[i]);
          console.log(str[i])
      } if (Number(str[i] % 2 !== 0){
          oddSum = oddSum + Number(str[i])}
      if (oddSum > evenSum){
          return "Odd is greater"
      } if (evenSum > oddSum){
          return "Even is greater"
          }   else 
          { return "Odd and Even is same"}
  