// const reverseSeq = n =>(n){
//     let arrayInt = []
//     for (let i = n; i <= n; i--){
//     arrayInt.push(i);
//     } return arrayInt
//   } 

  function highAndLow(numbers){
      let low = 0
      let high = 0
      let arr = numbers.split(" ")
      for (let i = 0; i < arr.length; i++){
          let currentNum = Number(arr[i])
          if (low ===null || currentNum < low){
              low = currentNum
          }
          if (high === null || current > high){
              high = currentNum
          }
      }
    return high + " " + low
  }

console.log(highAndLow("4 9 0 7 2 5"))


function highAndLow(numbers){
    let numbersOrd = numbers.split(" ")
    numbersOrd.sort((a,b))=> a-b);
    let firstele = numbersord[0]
    let lastele =  numbersOrd[numbersOrd.length-1]
        return '${lastEle}' 
    
}

return'${numbersord[numberord.length-1]numbersOrd}

styleog oh lord
