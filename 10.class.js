var student1 = new createStudent(20,55);

function createStudent(age, marks){
  var student = {};
  student.age = age;
  student.marks = marks;
  return student;
}

class createStudent{
  constructor(age, marks){
    this.age = age;
    this.marks = marks;
  }
  getdesc(){
    console.log("this is first class");
  }
}
class createanotherstudent{
  constructor(age, marks){
    this.age = age;
    this.marks= marks;
  }
  getdesc(){
    console.log("this is second class");
  }
}

var student2 = new createanotherstudent(24, 78);


//examples - 
var Person = class {
  constructor(){}
  
  sayHello(){
    return 'Hello!';
  }
};

var student = class{
  constructor(){}
  
  getmarks(){
    return '78';
  }
};

var instance1 = new Person();
console.log(instance1.sayHello() + " " + Person.age);

var instance2 = new student();
console.log(instance2.getmarks() + " " + student.name);

