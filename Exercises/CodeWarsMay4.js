// class person{
//     constructor(yourName, myName){
//     this.yourName = yourName;
//     this.myName = myName;
//     }

//     greet(yourName){
//         return 'Hello ${this.yourname}, my name is ${this.myname}'
//     }
// }


// class Triangle{
//     constructor(s1,s2,s3){
//         let sides = [...arguments]
//         this.length = Math.max(...sides);
//         sides.splice(sides.indexOf(this.length),1);
//         this.height = Math.sqrt(sides[0] ** 2 + sides[1] ** 2)
//         this.sides = sides.concat(this.length);
//     }
//     isEquilaterialTriangle(){
//         return this.sides.every(side => side == this.sides[0])
//     }
// }

// let myTriangle = new Triangle(4,5,6);

// console.log(myTriangle.area())

let firstObj = {name:'Abe Johnson', age:28, millionaire:false, futureTrillionaire: true};

let secondObj = {name:'Bradd Pitt', age:57, millionaire:true};

function compareAges(secondObj, firstObj){
    if(firstObj.age > secondObj.age){
        return `${firstObj.name} is older than ${secondObj.name}`;
    } else if (secondObj.age > first.age){
        return `${secondObj.name} is older than ${firstObj.name}`; 
    }else {
        return `${firstObj.name} is the same age as ${secondObj.name}`;
    }
}

console.log(compareAges(firstObj, secondObj))