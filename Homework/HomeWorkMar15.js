 // Nth Smallest Function
 
 function nthSmallest(arr, pos){
    let newArray = arr.sort(compare)
    function compare(a,b) {
        return a - b
    }
    return newArray[pos-1]
}
    
    
// console.log(nthSmallest([15,20,7,10,4,3],3))

//  Even Odd
  
function evenOrOdd(str) {
    let evenSum = 0
    let oddSum = 0
    for (let i=0; i < str.length; i++){
        let num = Number(str[i])
        if (num % 2 === 0){
            evenSum += num;
        } else if (num % 2 !== 0){
            oddSum += num;
        }
    }
        if (oddSum === evenSum){ 
            return  "Even and Odd are the same"
        }
        else if (evenSum > oddSum){
            return "Even is greater than Odd"
            }   
        else if (oddSum > evenSum){
            return "Odd is greater than Even"
        }                  
    }
 
    
console.log(evenOrOdd("112"))

