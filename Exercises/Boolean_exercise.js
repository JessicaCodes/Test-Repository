//turn boolean value to string

function booleanToString(b){
    if (b === true){
      return "true"
    } 
    return "false"
  }

console.log(booleanToString(false))

//turn array to string

function transform(array){
     return array.join("")
 }

//console.log(transform(["string" , true, 77 , "100"]))

function arrayToString(array){
    let newString = ""
    for (let i = 0; i < array.length; i ++){
        newString += array[i]
    } return newString
}

console.log(arrayToString(["string" , true, 77 , "100"]))

// the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent term is the sum of the previous two terms. 
// In mathematical terms, the Nth term of Fibonacci numbers is defined by the recurrence relation:


function fibonacci(num) {
    if (num <= 2) {
        return 1;
        }
     return fibonacci(num-1) + fibonacci(num-2)
 }

 console.log(fibonacci(5))