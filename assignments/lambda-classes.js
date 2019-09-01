// CODE here for your Lambda Classes

class Person {
    
    constructor(personObj){
        this.name= personObj.name;
        this.age= personObj.age;
        this.location= personObj.location;
    }
    
    speak(){
        return `Hello my name is ${this.name} \n I am from ${this.location}`;
    }
};

let sam = new Person ({name:'Sam', age:45, location:'italy'},'Redux');


class Instructors extends Person{
    constructor(personObj,instructorObj){
        super(personObj);
        this.speciality= [];
        this.favLanguage= [];
        this.catchPhrase=  instructorObj.catchPhrase;
    }
    speciality(talent){
        return this.speciality.push(talent)
      }
      favLanguage(fav){
        return this.favLanguage.push(fav)
      }
    demo(subject){
        return `Today we are learning about ${subject}`
    }
    grade(student,subject){
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }

};
let jules = new Instructors ({name:'Jules', age:25, location:'London'},{catchPhrase: "Dont forget the homies"});
jules.speciality = ['redux'];
jules.favLanguage = ['JS', 'Pyhton', 'Elm'];



class Students extends Person{
    constructor(personObj,studentObj){
        super(personObj);
        this.previousBackground = studentObj.previousBackground;
        this.className = studentObj.className;
        this.favSubjects = [];
    }
    favSubjects(fav){
        return this.favSubjects.push(fav)
      }
      listsSubjects(){
           this.favSubjects()
      }
      prAsignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
      }
      sprintChallenge(subject){
        console.log(`${this.name} has submitted a sprint challenge for ${subject}`);
      }
};
let will = new Students({name:'Will', age:20, location:'Germany'},{previousBackground: "Computer Engineer", className:'WEBEU3'});
will.favSubjects = ['Html', 'CSS', 'JavaScript'];

class ProjectManagers extends Instructors{
    constructor(personObj,instruct){
        super(personObj, instruct);

    }

};