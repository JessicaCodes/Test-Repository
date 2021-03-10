
let candidate = {
    minSalary: 120000
  }

  let job = {
    maxSalary: 140000
  }

function match(candidate, job) {
    if (candidate >= job){
        return true
    } else return false
  }

console.log(match(candidate, job))