/*  CLASSES */



/*

1.) There are 2 ways to access properties and methods on an Object. How could I write a console.log that  prints out the name of
 myObject?

*/

//console.log(myObject.name)


class Polygon{
    constructor(length, width){
        this.length = length;
        this.width = width;
        this.isSquare = false;
    }
    area(){
        return this.length * this.width;
    }
}

class Square extends Polygon{
    constructor(length){
        super(length, length)
        this.isSquare = true;
    }
}

let mySquare = new Square(10);

/*

2.)  Would mySquare's property of isSquare be true or false?

True


3.) Would i be able to call the area() method on mySquare?

no because we do not have any value for width
*/

class Triangle{
    constructor(s1,s2,s3){
        let sides = [...arguments]
        this.length = Math.max(...sides);
        sides.splice(sides.indexOf(this.length),1);
        this.height = Math.sqrt(side[0] ** 2 + side[1] ** 2)
        this.sides = sides.concat(this.length);
    }
    isEquilaterialTriangle(){
        return this.sides.every(side => side == this.sides[0])
    }
}

let myTriangle = new Triangle(4,5,6);

console.log(myTriangle)

/*

4.)  What would be the result of myTriangle.area()?

ReferenceError: side is not defined

myTriangle.area is not a method

5.) Why?
 the method references sides not side

 my triangle does not have access to the area method. 

*/



/* REFERENCES */


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

/* 6.) if we ran 

console.log(compareAges(firstObj, secondObj));


what would the output be?
*/ 


firstObj.secondObj =  secondObj;

secondObj.bestMovie = 'Fight Club';


/* 

7.) What would be the value of firstObj.secondObj.bestMovie?

*/

let luckyNumbers=[7,10,13,25];

firstObj.luckyNumbers = luckyNumbers;

luckyNumbers.push(77);

secondObj.luckyNumbers = luckyNumbers;

secondObj.luckyNumbers.splice(4,1);

/*

8.) What would be the output of:

console.log(luckyNumbers);

*/

/*

9.) Why?

*/

let a = 5, b = 15, c = 25, d = 35;

function referenceHell(a, b){
    let c = a;
    let d = b;
    return c + d;
}


/*

10.)What would be the output of:
console.log(referenceHell(b,c))

*/



/* REACT */

/*

11.) What is the first command you type into terminal to start a new react project?

npx create-react-app <name of app>


12.) Name the two types of Component types in react and a single feature that differenciates them.
    // Functional-can use hooks to access state system to update UI  
    // Class-can use the state system to update the UI


13.) Whats one advantage of react vs a multipage application

if an element within component changes that is the only component that refreshes as opposed to the entire page 

14.) What is the purpose of state on a component?

to store data that can be changed over time

15.) What is the purpose of props on a component?

give you the ability to access and update values in a component


*/