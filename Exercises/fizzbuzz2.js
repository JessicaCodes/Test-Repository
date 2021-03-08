/*Will I be able to solve FizzBuzz?

// The Problem:
  // Write a program that prints the numbers from 1 to 100. 
  // For multiples of three print “Fizz” instead of the number 
  // For the multiples of five print “Buzz” instead of the number 
  // For numbers which are multiples of both three and five print “FizzBuzz”

// The Solution:
  // Write a loop that checks each number for multiples of 3 and 5
  // print the number to the console
*/



function fizzbuzz(output){
    for (let number = 1; number <= 100; number++){
    if (number % 3 === 0 && number % 5 === 0){
    console.log("FizzBuzz")
    } else if (number % 3 === 0){
    console.log("Fizz");
    } else if (number % 5 === 0){
    console.log("Buzz")
    } else {
    console.log(number)
    }
    } 
    } 
    fizzbuzz()