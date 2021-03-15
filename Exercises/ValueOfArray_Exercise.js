function arraySum(arr) {
    let sumArray = 0
   for (i = 0; i < arr.length; i++){
       const currentArray = arr[i]
       for (let j = 0; j < currentArray.length; j++){
           if(arr.isArray(currentArray)){
               const nestedArray = currentArray[j];
               sumArray = nestedArray + currentArray

           }
       }
   } return sumArray
  }

  console.log(arraySum([1, 2, [1, 2]]))


 function arraySum(arr){
     let sum = 0;
     for (let i = 0;
        i < arr.length; i ++) {
            if (Array.isArray(arr[i])) {
                sum += arraySum(arr[i])
            } else if (typeof arr[i] === "number") {
                sum += arr[i]
            }
        } 
        return sum

 }