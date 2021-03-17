// // Nth Smallest Function

// function nthSmallest(arr, num){
//     let newArray = arr.sort(compare)
//     function compare(a,b) {
//         return a - b
//     }
//     return newArray[num]-1
// }
    
// console.log(nthSmallest([15,20,7,10,4,3],3))

// // Even Odd
  
// // function evenOrOdd(str) {
// //     let evenSum = 0
// //     let oddSum = 0
// //     for (i=0; i < str.length; i++){
// //         if (Number(str[i] % 2 === 0){
// //             evenSum = evenSum + Number(str[i]);
// //             console.log(str[i])
// //         } if (Number(str[i] % 2 !== 0){
// //             oddSum = oddSum + Number(str[i])}
// //         if (oddSum > evenSum){
// //             return "Odd is greater"
// //         } if (evenSum > oddSum){
// //             return "Even is greater"
// //             }   else 
// //             { return "Odd and Even is same"}
    

// // console.log(evenOrOdd("5442"))

function printArray(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}
    printArray(["some","for"])

    function average(arr){
        let sum = 0
        for(let i = 0; i < arr.length; i++){
            sum = arr[i] + sum;
        } return sum/arr.length
    }

    console.log(average([4,1,3,5]))

    console.log("4" + 4)