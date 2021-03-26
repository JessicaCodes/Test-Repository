// function countDevelopers(list){
//     let reducer = (a,b) => (b.continent == 'Europe' && b.language == 'JavaScript') ? a + 1 : a 
//     return list.reduce(reducer, 0)
// }

var list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
    { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
  ];

function countDevelopers(list) {
    let countC = 0;
    let countJ = 0;
    let countR = 0;
    let langObj = {}
    for (let i = 0; i < list.length; i++){
    if (list[i].language == 'C'){
        countC++
    }   if (list[i].language == 'JavaScript'){
        countJ++
    }   if (list[i].language == 'Ruby'){
        countR++
    }          
    } langObj.C = countC; langObj.JavaScript = countJ; langObj.Ruby = countR
    return langObj
}

 console.log(countDevelopers(list1))

 function countLanguages(list) {
     returnlist.reduce
 }

 let test = list[0].language;
 return list.every(dev => dev.language === list[0].language)