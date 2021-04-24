
const dynamicH1 = document.querySelector('h1');
// const calcDiv = document.querySelector('#calc')
const numbers = document.querySelectorAll(".number")
const show = document.querySelector('.flex-container')

//tried to assign a class to the operators and then reference them here
const operators = Array.from(document.body.querySelectorAll('.operator'))
const output = document.querySelector('.output')

const rip = document.querySelector('.rip')

const dmx = document.querySelector('.x')

const whiteBackground = document.querySelector('body')

document.addEventListener("click", (e) => {
    if (e.target === dynamicH1) {
        show.style.visibility = 'visible';
    }
})

document.addEventListener("click", (e) => {
    if (e.target === dynamicH1) {
        rip.style.display = 'none';
    }
})

document.addEventListener("click", (e) => {
    if (e.target === dynamicH1) {
        whiteBackground.style.backgroundColor = "white";
    }
})

for (let button of [...numbers,...operators]){
    button.addEventListener("click", (e) => {
        output.innerText += e.target.innerText
    })
}

document.addEventListener("click", (e) => {
    if (operators.includes(e.target)) {
        disableButtons(operators);
    }
})

document.querySelector('#clear-button').addEventListener('click', clearBtnClick)

function clearBtnClick(){
    enableButtons(operators);
    enableButtons(numbers);
    output.innerText = '';
}

function enableButtons(buttons) {
    for (let button of buttons) {
        button.removeAttribute('disabled');
        button.style.background = 'linear-gradient(94deg, #fa0606, #05a80d)';
        button.style.webkitBackgroundClip = 'text';
    }
}

function disableButtons(buttons) {
    for (let button of buttons) {
        button.setAttribute('disabled', 'disabled');
        button.style.background = 'rgba(186, 180, 180, 0.78)';
        button.style.webkitBackgroundClip = 'text';
    }
}
 document.querySelector('.equals').addEventListener('click', equalBtnClick)

 function equalBtnClick(){
     const problem = Array.from(document.body.querySelector('.output').innerText);
     document.querySelector('.output').innerText = solve(problem);
     disableButtons(numbers);
 }

 function solve(arr) {
     let nums1 = [];
     let nums2 = [];
     let total = 0;
     for (let i = 0; i < arr.length; i++){
         if (arr[i]== "+") {
             nums1.push(arr.slice(0, [i]));
             nums2.push(arr.slice([i+1]));
             nums1 = nums1.join("").replace(/,/gi, '');
             nums2 = nums2.join("").replace(/,/gi, '');
             total = Number(nums1) + Number(nums2);
        } else if (arr[i]== "-") {
            nums1.push(arr.slice(0, [i]));
            nums2.push(arr.slice([i+1]));
            nums1 = nums1.join("").replace(/,/gi, '');
            nums2 = nums2.join("").replace(/,/gi, '');
            total = Number(nums1) - Number(nums2);
        } else if (arr[i]== "*") {
            nums1.push(arr.slice(0, [i]));
            nums2.push(arr.slice([i+1]));
            nums1 = nums1.join("").replace(/,/gi, '');
            nums2 = nums2.join("").replace(/,/gi, '');
            total = Number(nums1) * Number(nums2);
        } else if (arr[i]== "/") {
            nums1.push(arr.slice(0, [i]));
            nums2.push(arr.slice([i+1]));
            nums1 = nums1.join("").replace(/,/gi, '');
            nums2 = nums2.join("").replace(/,/gi, '');
            total = Number(nums1) / Number(nums2);
        }
    } return total
 }
 



show.style.visibility = 'hidden';

console.log(show, "<---")
document.addEventListener("click", (e) => {
  if(e.target === dynamicH1){
      show.style.visibility = 'visible';       
  }
})

document.body.addEventListener("click", (e) => {
    if (e.target.nodeName == "li") {
        console.log("Clicked", e.target.innerText, "<---3");
    }
});

// function unhide(dynamicH1, divID) {
// var item = document.getElementById(divID);
// if (item) {
//     if(item.className=='hidden'){
//         item.className = 'unhidden' ;
//         clickedButton.value = 'hide'
//     }else{
//         item.className = 'hidden';
//         clickedButton.value = 'unhide'
//     }
// }}
