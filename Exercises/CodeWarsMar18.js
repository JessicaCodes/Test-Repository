//Friend or Foe


// function friend(friends){
//     let myFriends = []
//     for (let i = 0; i < friends.length; i++){
//         if (friends[i].length == 4){
//             myFriends.push(friends[i])
//         }
//     }return myFriends;
//   }


//   console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]))


/* In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:

pairs([1,2,5,8,-4,-3,7,6,5]) = 3
The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
--the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
--the second pair is (5,8) and are not consecutive
--the third pair is (-4,-3), consecutive. Count = 2
--the fourth pair is (7,6), also consecutive. Count = 3. 
--the last digit has no pair, so we ignore.
*/

 
      for (let i = 0; i < newArray.length; i++){
          if (arr[i]+1 === ar[i+1] || ar[i] === ar[i + 1] +1){

          }
      }
  }


  function pairs(ar){
    let newArray = []
    for (let i = 0; ar.length; i += 2)
  }


  function pairs(ar){
    let newArray = ar.sort(compare)
    function compare(a,b){
        return a - b 
    }