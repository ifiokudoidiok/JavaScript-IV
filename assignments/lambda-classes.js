// CODE here for your Lambda Classes

class Person {
    
    constructor(data){
        this.name= data.name;
        this.age= data.age;
        this.location= data.location;
    }
    
    speak(){
        return `Hello my name is ${this.name} \n I am from ${this.location}`;
    }
};

let sam = new Person ({name:'Sam', age:45, location:'italy'},'Redux');


class Instructors extends Person{
    constructor(data){
        super(data);
        this.speciality= [];
        this.favLanguage= [];
        this.catchPhrase=  "";
    }
    speciality(talent){
        return this.stomach.push(talent)
      }
      favLanguage(fav){
        return this.stomach.push(fav)
      }
    demo(subject){
        return `Today we are learning about ${subject}`
    }
    grade(student,subject){
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }

};
let jules = new Instructors ({name:'Jules', age:25, location:'London'},this.speciality="Don't forget the homies");
jules.speciality = ['redux'];
jules.favLanguage = ['JS', 'Pyhton', 'Elm'];
jules.catchPhrase = "Don't forget the homies";


class Students extends Person{
    constructor(data){
        super(data);
    }

};
class ProjectManagers extends Instructors{
    constructor(data){
        super(data);

    }

};