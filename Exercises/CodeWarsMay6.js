// class God{
//     static create(){
//         return [new Man, new Woman]
//     }
// };

// class Human{
//     constructor(){

//     }
// };

// class Man extends Human{};
// class Woman extends Human{};

// console.log(God.create());

class Animal {
    constructor(name, age, legs, species, status) {
      this.name = name;
      this.age = age;
      this.legs = legs;
      this.species = species;
      this.status = status;
    }
    introduce() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }

class Shark extends Animal {
    constructor(name, age, status) {
      super(name,age, 0, 'shark', status);
    }
}
  
  class Cat extends Animal {
    constructor(name, age, status) {
        super(name,age, 4, 'cat', status);
      }
      introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
      }
  }
  
  class Dog extends Animal {
    constructor(name, age, status, master) {
        super(name,age, 4, 'dog', status);
        this.master = master;
        }
        GreetMaster(){
            return `Hello ${this.master}`
      }
  }