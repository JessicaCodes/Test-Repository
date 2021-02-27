/* 
    Fortune Teller Machine Project
        (Comp Sci / Programming concept: Control Flow) -> 
            Control Flow: The order in which individual statements, instructions or function calls are executed or evaluated.
    
    Goal: Create a program that spits out a random fortune everytime you run it. The program should accept a username and include it 
        in the fortune (to personalize the message) ie: "Hello Tefe Del Rosario-Bell, your future is looking kinda bleak my friend."

        How do I do this?
        - Create a random number.
        - Create a control flow (if..else statements) to determine what is logged to the console, based on that random number.
        - Definitely feel free to get creative.
*/

let userName = "Jr"
let random1 = (Math.floor(Math.random()*5))
console.log(random1)

if(random1 == 1){
    console.log(userName + ", you will have a successful future.")
}
else if(random1 == 2){
    console.log("I don't know " + userName + "!")
}
else if(random1 == 4){
    console.log(userName + ", you will be lucky!")
} else {
    console.log("Please try again.")
}
