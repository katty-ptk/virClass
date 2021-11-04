  // Class that holds a collection of players and properties and functions for the group
  class Student {
    constructor( name, age, email ) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
}

class Students {
  constructor(){
    this.students = [];
  }

  // create a new player and save it in the collection
  newStudent( name, age, email ) {
    let s = new Student( name, age, email );
    this.students.push( s );
    return s;
  }

  get allStudents(){
    return this.students;
  }

  // this could include summary stats like average score, etc. For simplicy, just the count for now
  get numberOfStudents(){
      return this.students.length;
  }
}

let students_group = new Students();
students_group.newStudent( 
  "Ecaterina Patkany", 
  17, 
  "ecaterina.patkany@lmvineu.ro"
);

students_group.newStudent( 
  "Roxana Sold", 
  15,
  "rox@yahoo.com",
);  

students_group.newStudent(
  "Sebastian Bodea",
  16,
  "sebba@gmail.com",
);