let numArray = [9, 12, 3, 0, 8, 50, 101, 8, 4, 15, 3, 2];

// 1. Using the array above create a function that loops through the array and returns a new array with all the numbers multiplied by 10.

function createArray(array){
    let multipleArray = []
    for (let i = 0; i < array.length; i++){
        multipleArray.push(array[i]*10)
    }
    return multipleArray
}

console.log(createArray(numArray))

// 2. Using the array above create a function that returns the sum of all numbers within.

function sumOfArray(array){
    let sumArray = 0
    for (i = 0; i < array.length; i++){
        sumArray = sumArray + array[i]
    }
    return sumArray
}

console.log(sumOfArray(numArray))


/* 
3. Create a function that accepts an array and a search value. This function will return true if the search value is an element in the array.
 Otherwise, it will return false. Don't use any built in array methods to do this. Ie: 
doesItInclude([23, 24, "kale"], "kale")  -> should return true
*/

function searchArray(array, searchParameter){
    
    for (i=0;i < array.length; i++){
        if (array[i] === searchParameter){
        return true
        }
    }
    return false
}

console.log(searchArray(numArray, 6))

// 4. Create a function that accepts an array. This function will return a new array with the elements in reverse order.

function reverseArray(array){
    let newArray = []
    for (let i=array.length-1; i > -1; i--){
        newArray.push(array[i])
        }
        return newArray
}

console.log(reverseArray(numArray))


// 5. Create another function that adds the numbers in the array that are NOT divisible by 3 and return the total.

function numsNotDivisible(array){
    let sum = 0
    for (let i = 0; i < array.length; i++){
    if (array[i] % 3 === 0){
        sum = array[i] + array[i]
    }
} return sum
}

console.log(numsNotDivisible(numArray))


// Use the following array for the questions below (you might need to find examples of "nested loops" using good ol' google):

const nestedArr = ['full', 'stack', ['node', 'react'], [], ['redux'], ['html', 'css'], 'sql'];

// 6. Create a function that logs every word that has the letter 'a' in the word in the array and the nested arrays. Return "Done!" at the end.

function everyWord(array){
    for(let i = 0; i < array.length; i++){
        if (array[i])
    }
}

// 7. Create a function that logs every word that has a length of 4 in the array and in the nested arrays. Return "Done!" at the end.

// 8. Create a function that logs every word that has the letter 'a' in the word in the array and nested arrays.



