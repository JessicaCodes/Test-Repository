// lamps "xxx" turn to "ooo" when drone flys by"==T"

function flyBy(lamps, drone){
    let lampOn = ""
    for (i = 0; i < lamps.length; i++){
        if (drone.length > i){
            lampOn += "o"
        } else lampOn += "x"
    }
    return lampOn
}

console.log(flyBy('xxxxxx', '====T'))


// mask all but last 4 numbers in CC # string
function maskify(cc) {
    let masked = ""
    for (i = 0; i < cc.length; i++){
        if (i < cc.length-4){
            masked += "#"
        } else 
        masked += cc[i]
    }
    return masked
}

console.log(maskify("4512221587466"))



// multiply each element in an array by a number

function multiplyAll(arr){
    return (number) => arr.map(x => x * number)
}

console.log(multiplyAll([1, 2, 3])(2))