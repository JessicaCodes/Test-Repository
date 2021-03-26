function tripleTrouble(one, two, three){
    let singleString1 = ""
   for (let i = 0; i < one.length; i++){
      singleString1 += one[i] + two[i] + three[i]
   } return singleString1
}

console.log(tripleTrouble("yes","nah","duh"))

function getVillainName(birthday){
    const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
    const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];
  return "The " + m[birthday.getMonth()] + " " + d[birthday.getDate() % d.length]
  }

  console.log(getVillainName(new Date("May 3")))