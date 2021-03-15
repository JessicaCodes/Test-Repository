let numArray = [9, 12, 3, 0, 8, 50, 101, 8, 4, 15, 3, 2];

// 1. Using the array above create a function that loops through the array and returns a new array with all the numbers multiplied by 10.

function newArray(array){
    let array2 = []
    for (i = 0; i < array.length; i++){
        array2.push(array[i] * 10)
    }
    return array2
}

console.log(newArray(numArray))

// 2. Using the array above create a function that returns the sum of all numbers within.

function sumArray(array){
    let sum1 = 0
    for (i = 0; i < array.length; i++){
        sum1 = array[i] + sum1
    }
    return sum1
}

console.log(sumArray(numArray)) 
/* 
3. Create a function that accepts an array and a search value. This function will return true if the search value is an element in the array.
 Otherwise, it will return false. Don't use any built in array methods to do this. Ie: 
doesItInclude([23, 24, "kale"], "kale")  -> should return true
*/

function doesItInclude(array,search){
    for (let i = 0; i < array.length; i++){
        if (search === array[i]){
            return true
        } 
    } 

    return false
}
    console.log(doesItInclude([23, "ten", 25], "10"))



// 4. Create a function that accepts an array. This function will return a new array with the elements in reverse order.

function reverseFunction(array){
    let reversedArray = []
    for (i = array.length-1; i > -1; i--){
        reversedArray.push(array[i])

    } 
    return reversedArray
}

console.log(reverseFunction(numArray))

// 5. Create another function that adds the numbers in the array that are NOT divisible by 3 and return the total.

function findSum(array){
    let sum = 0
    for (let i = 0;i < array.length; i++){
        if (!array[i] % 3 === 0){
            sum = array[i] + array[i]
        }
    }return sum
}

console.log(findSum(numArray))


// Use the following array for the questions below (you might need to find examples of "nested loops" using good ol' google):

const nestedArr = ['full', 'stack', ['node', 'react'], [], ['redux'], ['html', 'css'], 'sql'];

// 6. Create a function that logs every word that has the letter 'a' in the word in the array and the nested arrays. Return "Done!" at the end.

function searchArray(array){
    let a = []
    let b = []
    for (i = 0;i < array.length; i++);
    for (j = 0;j < array.length; j++);{
        if (array.includes('a')){
            a = array[i]
            console.log(a)
        } else if (array[i]){
            b = array[j]
            console.log(b)
        }
        return "Done!"
    
    }
}

console.log(searchArray(nestedArr))

// 7. Create a function that logs every word that has a length of 4 in the array and in the nested arrays. Return "Done!" at the end.

// 8. Create a function that logs every word that has the letter 'a' in the word in the array and nested arrays
