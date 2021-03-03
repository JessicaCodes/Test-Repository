    
    //Calculate the remainder of 15/2, log the string: 'the remainder of 15/2 is (remainder)'

    const prob1 = (15 % 2)
    console.log("The remainder of 15/2 is " + prob1)

    //Calculate the remainder of 30/2, log the string: 'the remainder of 30/2 is (remainder)

    const prob2 = (30 % 2)
    console.log("The remainder of 30/2 is " + prob2)

    //Using Math.random(), console.log 3 random decimal numbers from 0 to 1000

    let random1 = Math.random()*1000

    console.log(random1)
   
    console.log(Math.floor(random1))
    
    console.log(Math.floor(Math.random()*1000))

    console.log(Math.round(Math.random()*1000))

    console.log(Math.abs(Math.random()*1000))

    const random2 = Math.random()*1000
    let counter = 0
    while (counter<3) {
        console.log(random2)
        counter = counter + 1
    }

    //In your own words describe what "type coercian" in JavaScript is - this can be brief.*/

    /*In my own words type coersion is the process of changing the data type from one to another.
     For example from a string to a number.*/


     