/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/


/*

  TASK 1

  - Build a Person Constructor that takes name and age.
  - Give persons the ability to greet by returning a string stating name and age.
  - Give persons the ability to eat edibles.
  - When eating an edible, it should be pushed into a "stomach" property which is an array.
  - Give persons the ability to poop.
  - When pooping, the stomach should empty.
*/
function PersonOriginal(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
  
  };
  
  PersonOriginal.prototype.eat = function(food) {
    this.stomach.push(food);
   
  };
  PersonOriginal.prototype.poop = function() {
    this.stomach.length = 0;
    
  };
  PersonOriginal.prototype.greet = function (){
    return `Hello there, I am ${this.name} and I am ${this.age} years old`;
  };

  //Refactored Code
  
  class PersonRefactored {
      constructor(name,age){
          this.name = name;
          this.age = age;
          this.stomach = [];
      }
      eat(food){
        return this.stomach.push(food)
      }
      poop(){
          return this.stomach.length = 0;
      }
      greet (){
        return `Hello there, I am ${this.name} and I am ${this.age} years old`;
      }
  }
  let jay = new PersonRefactored('Jay', 34);
  jay.eat('yam');
  jay.eat('plantain');
  
  
  /*
    TASK 2
  
    - Build a Car constructor that takes model name and make.
    - Give cars the ability to drive a distance.
    - By driving a car, the distance driven should be added to an "odometer" property.
    - Give cars the ability to crash.
    - A crashed car can't be driven any more. Attempts return a string "I crashed at x miles!", x being the miles in the odometer.
    - Give cars the ability to be repaired.
    - A repaired car can be driven again.
  */
  function CarOriginal(model, name, make) {
    this.model = model;
    this.name = name;
    this.make = make;
    this.odometer = 0;
    this.drive = true;
  };
  CarOriginal.prototype.crash = function(){
    this.drive = false;
    return "Car crashed!"
  };
  CarOriginal.prototype.cruise = function () {
    if (this.drive === true){
      return ((this.odometer += 20) +' miles travelled') ;
    }
    return ('car crashed but ' + this.odometer + ' miles travelled');
  }
  CarOriginal.prototype.fix = function(){
    this.drive = true;
    return "Car fixed!"
  };
  
  //Refactored Code
  class CarRefactored {
      constructor(model, name, make) {
        this.model = model;
        this.name = name;
        this.make = make;
        this.odometer = 0;
        this.drive = true;
      }
      crash(){
        this.drive = false;
        return "Car crashed!"
      };
      fix(){
        this.drive = true;
        return "Car fixed!"
      };
      cruise(){
        if (this.drive === true){
            return ((this.odometer += 20) +' miles travelled') ;
          }
          return ('car crashed but ' + this.odometer + ' miles travelled');
      };
     
  }
  
  let benz = new CarRefactored ('SUV', 'Mercedes Benz', 'G-63');

  /*
    TASK 3
  
    - Build a Baby constructor that subclasses the Person built earlier.
    - Babies of course inherit the ability to greet, which can be strange.
    - Babies should have the ability to play, which persons don't.
    - By playing, a string is returned with some text of your choosing.
  */
  function Baby(name, age) {
    PersonOriginal.call(this, name, age);
    
  }
  Baby.prototype = Object.create(PersonOriginal.prototype);
  Baby.prototype.play = function (){
    return "goo goo ga ga bla bla bla"
  };
  
  
  class BabyRefactored extends PersonRefactored{
      play(){
        return "goo goo ga ga bla bla bla";
      }
  } 
  let babyA = new BabyRefactored ('Andy', 2);