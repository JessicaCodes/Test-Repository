function arrayMadness(a, b) {
    let aSquared = 0;
    let bCubed = 0
    for (i = 0; i < a.length; i++){
      aSquared += a[i] * a[i]
    } for (j = 0; j < b.length; j++){
      bCubed += (b[j] * b[j]) * b[j]
    }
      if (aSquared < bCubed){
        return false
      } else true
  }

  console.log(arrayMadness([2,4,6,8,10,12,14],[1,3,5,7,9,11,13]))


  var arr = [1,2] 

  function swapValues(a,b) {
    var args = a.slice(a);
    var temp = args[0];
    args[0] = args[1];
    args[1] = temp;
}

console.log(swapValues(arr[1], 1)