// var list1 = [
//     { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//     { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Europe', age: 28, language: 'JavaScript' },
//     { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//     { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
//   ];
  

// function countDevelopers(list) {
//     let count = 0;
//     for (let i = 0; i < list.length; i++)
//     if (list.filter(s => s.continent == 'Europe').length && list.filter(s => s.language == 'JavaScript' ).length){
//         count++
//     }return count
//   }

//   //Reduce Method

//   function countDevelopers(list){
//       let reducer = (a,b) => (b.continent == 'Europe' && b.language == 'JavaScript') ? a + 1 : a 
//       return list.reduce(reducer, 0)
//   }

//   console.log(countDevelopers(list1))


var list1 = [
    { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  ];

  function askForMissingDetails(list) {
    for (i = 0; i < list.length; i++){
      if (list.forEach
    }
  }


// function greetDevelopers(list) {
//     for (i = 0; i < list.length; i++){
//         list[i].greeting = "Hi " + list[i].firstName + ", what do you like the most about " + list[i].language + "?"
//     }return list
//   }

//   console.log(greetDevelopers(list1))


//   var list2 = [
//     { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//     { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' } 
//   ];
  

//   function isRubyComing(list) {
//       let count = 0
//       let rubyHere = false
//     for (i = 0; i < list.length; i++){
//         if (list.filter(s => s.language === 'Ruby')){
//             count++
//         } if (count !== 0){
//             rubyHere = true
//         }
//         }return rubyHere
//     }
  

//   console.log(isRubyComing(list2))
  