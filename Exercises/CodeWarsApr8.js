// function arrayPlusArray(arr1, arr2) {
//     let arr1Sum = 0
//     let arr2Sum = 0
//     for (let i = 0; i < arr1.length; i++){
//       arr1Sum += arr1[i]
//     }
//     for (let j = 0; j < arr1.length; j++){
//       arr2Sum += arr2[j]
//     }
//     return arr1Sum + arr2Sum; //something went wrong
//   }

//   function findOddDigits(n, k) {

//     let oddNums =  n.map(x => x % 2 !==0)
//     return oddNums
//     for (let i = 0; i < arr.length; i++){
//         console.log(i)
//     if (i % 2 !== 0 && oddNums.length !== k){
//         oddNums.push(i) 
//     }
// }}

// function solve(s){
//     let arr =[0,0,0,0];
//     var letters = s.split("")
//     for (let i = 0; i < letters.length; i++){
//     // we need to identify what the letter is.
//     if (typeof +letters[i]== "number" && !isNaN(+letters[i])){
//     console.log(letters[i])
//     arr[2]++
//     }
//     else if (letters[i].toUpperCase()==letters[i] && letters[i].toLowerCase()!==letters[i]){
//     arr[0]++
//     }
//     else if (letters[i].toLowerCase()==letters[i] && letters[i].toUpperCase()!==letters[i]){
//     arr[1]++
//     }
//     else
//     {arr[3]++
//     }
//     // then we need to add it to the sum of Array.
//     }
//     return arr
//     }


function sum(arr) {
  let nums1 = [];
  let nums2 = [];
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "+") {
      nums1.push(arr.slice(0, [i]));/*= arr.join(arr.slice(0,arr[i]));*/
      nums2.push(arr.slice([i + 1]));
      nums1 = nums1.join("").replace(/,/gi, '');
      nums2 = nums1.join("").replace(/,/gi, '');
      return total = parseInt(nums1) + parseInt(nums2);
      //console.log(nums1, "<<-- nums1", nums2, total)
    } else if (arr[i] == "-") {
      nums1.push(arr.slice(0, [i]));/*= arr.join(arr.slice(0,arr[i]));*/
      nums2.push(arr.slice([i + 1]));
      nums1 = nums1.join("").replace(/,/gi, '');
      nums2 = nums2.join("").replace(/,/gi, '');
      return total = parseInt(nums1) - parseInt(nums2);
    } else if (arr[i] == "x") {
      nums1.push(arr.slice(0, [i]));/*= arr.join(arr.slice(0,arr[i]));*/
      nums2.push(arr.slice([i + 1]));
      nums1 = nums1.nums1.join("").replace(/,/gi, '');
      nums2 = nums2.nums1.join("").replace(/,/gi, '');
      return total = parseInt(nums1) * parseInt(nums2);
    } else if (arr[i] == "/") {
      nums1.push(arr.slice(0, [i]));/*= arr.join(arr.slice(0,arr[i]));*/
      nums2.push(arr.slice([i + 1]));
      nums1 = nums1.nums1.join("").replace(/,/gi, '');
      nums2 = nums2.nums1.join("").replace(/,/gi, '');
      return total = parseInt(nums1) / parseInt(nums2);
    }
  }
}
      console.log(sum(["1", "2", "3", "-", "4","5","6", "="]))


// // THE JAVASCRIPT SLICING CHEAT SHEET
// let index = ["zero", "one", "two", "three", "four", "five", "six"]
// let ithElement = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh"]
// let nElements = ["one", "two", "three", "four", "five", "six", "seven"]

// // For any array, where `i` and/or `j` is an index, and `n` is a number of elements, 
// // you can remember a few common operations as follows:

// // #1: From i to the end
// function fromIthElementToEnd(i) {
//     console.log(0, `arr.slice(${i})`)
//     return index.slice(i) 
// }

// fromIthElementToEnd()