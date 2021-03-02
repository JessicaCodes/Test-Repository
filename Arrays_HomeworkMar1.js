// using this array: 
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

// log the length of the array
console.log(days.length)

// log the 4th element in the array 
console.log(days[4])

// remove the first element in the array. Log the new array and the element removed from the array

console.log(days.shift)
console.log(days)


// Add 'Sunday' at the beginning of the array and log the new array

days.unshift('Sunday')

console.log(days)


// Remove the last element in the array. Log the new array and log the element removed

console.log(days.pop())
console.log(days)

// Add 'Saturday' to the end of the array and log the new array

days.push('Saturday')
console.log(days)

// replace 'Thursday' with 'Friday Junior'

console.log(days.indexOf('Thursday'))

days.splice(5,1,'Friday Jr')

console.log(days)

// extract your favorite day from the array and log the string: 'My favorite day of the week is (day)'

console.log("My favorite day of the week is " + days.slice(7))

// combine these two arrays together

let phone = ['iphone', 'android']

let laptop = ['MacBook', 'HP', 'Dell']

const devices = phone.concat(laptop)

console.log (devices)


/*
    Given the string "What Time Is It", create a new string:
    "What-Time-Is-It" using string and array methods.
    Make sure you store that new string in a variable.
    Log that variable.

    Turn the saved variable from above back into an array and mutate it into:
    - ["It", "Is", "Time"]
    Use only array methods / a certain string method to do this.
*/


// Read up till (not including) page 50 in Eloquent JavaScript

const timeForDinner = "What Time Is It"

dinnerTime = timeForDinner.split(" ")

console.log(dinnerTime)

lateDinner = dinnerTime.join("-")

dinnerTime.shift()

console.log(lateDinner)

console.log(dinnerTime.reverse())
