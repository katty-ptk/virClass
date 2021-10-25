  // Class that holds a collection of players and properties and functions for the group
  class Student {
    constructor( name, age, subject, image ) {
        this.name = name;
        this.age = age;
        this.subject = subject;
        this.image = image;
        this.description = `I am ${name}, ${age}, and I love ${subject}.`;
    }
}

class Students {
  constructor(){
    this.students = [];
  }

  // create a new player and save it in the collection
  newStudent( name, age, subject, image ) {
    let s = new Student( name, age, subject, image );
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
  "Katty Ptk", 
  16, 
  "programming",
  "https://scontent.ftsr1-1.fna.fbcdn.net/v/t1.6435-9/120932289_1757036474444716_6195118454447051272_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=WfrE9pvgLtUAX_aVKu2&_nc_ht=scontent.ftsr1-1.fna&oh=273fc7f84711df0ca9f912e6ca618ea7&oe=619BC68C"
);

students_group.newStudent( 
  "Roxana Sold", 
  15,
  "biology",
  "https://scontent.fotp1-1.fna.fbcdn.net/v/t1.6435-9/120932289_1757036474444716_6195118454447051272_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=YcoBr-tILrAAX9l2Ddh&_nc_ht=scontent.fotp1-1.fna&oh=4ec5ce4bbed7f598b1890bffd79dd286&oe=6197D20C"
);  

students_group.newStudent(
  "Sebastian Bodea",
  16,
  "math",
  "https://scontent.fotp1-1.fna.fbcdn.net/v/t1.6435-9/120932289_1757036474444716_6195118454447051272_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=YcoBr-tILrAAX9l2Ddh&_nc_ht=scontent.fotp1-1.fna&oh=4ec5ce4bbed7f598b1890bffd79dd286&oe=6197D20C"
);