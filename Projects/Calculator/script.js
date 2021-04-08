
const dynamicH1 = document.querySelector('h1');
// const calcDiv = document.querySelector('#calc')

const show = document.querySelector('.flex-container')

const numbers = document.body.getElementsByTagName("li")

console.log(numbers, "<--numbers")

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
