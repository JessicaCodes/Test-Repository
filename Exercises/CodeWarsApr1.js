// remove exclamation points from 

function removeExclamationMarks(s) {
    for (let i = 0; i < s.length; i++){
            s.replace(/!/g, '')
        }
  

        function removeExclamationMarks(s){
            while( s.indexOf("!") != -1 ){ //while s has an exclaimation mark
            let index = s.indexOf("!")
            s = s.slice(0,index) + s.slice(index+1)
            }
            return s
            }
    

  console.log(removeExclamationMarks("Hello !World!"))

  return s.split("!").join("")