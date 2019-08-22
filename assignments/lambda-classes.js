// CODE here for your Lambda Classes
class Person {
    constructor(data){
        this.name= data.name;
        this.age= data.age;
        this.location= data.location;
    }
    speak(){
        return `Hello my name is ${this.name} I am from ${this.location}`;
    }
};
class Instructors extends Person{
    constructor(data){
        super(data);
    }

};
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