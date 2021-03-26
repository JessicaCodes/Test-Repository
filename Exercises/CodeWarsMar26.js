function sumOfDifferences(arr) {
    let revArr = arr.reverse()
    console.log(revArr)
    for (let i = 0; i< revArr.length; i++)
   return (revArr[i] - revArr[i++]) + (revArr[i++] - revArr[i++])
}

console.log(sumOfDifferences([1,2,10]))

// arr.reduceRight((_, item) => console.log(item), null);


// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.


function digitize(n){
    return (n + '').split('').map(digit=>Number(digit)).reverse()
}

