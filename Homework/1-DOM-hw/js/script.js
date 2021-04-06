
// Add event listeners / handlers here...

const redButton = document.querySelector("#redButton")
const blueButton = document.querySelector("#skyblueButton")
const tealButton = document.querySelector("#tealButton")
const yellowButton = document.querySelector("#yellowButton")

redButton.addEventListener("click", function redScheme () {
    document.querySelector("body").className = "red-scheme";
})

blueButton.addEventListener("click", function skyBlueScheme(){
    document.querySelector("body").className = "skyblue-scheme";
})

tealButton.addEventListener("click", function tealScheme(){
    document.querySelector("body").className = "teal-scheme";
})

yellowButton.addEventListener("click", function yellowScheme(){
    document.querySelector("body").className = "yellow-scheme";
})

;
// Extra credit: make the border bigger on the selected circle
// Extra credit: add a reset button - turns background white

function redScheme () {
    document.querySelector("body").className = "red-scheme";
}

function skyBlueScheme(){
    document.querySelector("body").className = "skyblue";
}

function yellowScheme(){
    document.querySelector("body").className = "yellow-scheme";
}

const list = document.querySelector("color-switcher")
const reset = document.createElement('li')

