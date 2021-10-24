  // Class that holds a collection of players and properties and functions for the group
  class Teacher {
      constructor( name, age, years_of_experience, subject, image ) {
          this.name = name;
          this.age = age;
          this.years_of_experience = years_of_experience;
          this.image = image;
          this.description = `I am ${name}, ${age}, and I have ${years_of_experience} years of experience in teaching ${subject}.`;
      }
  }
  
  class Teachers {
    constructor(){
      this.teachers = [];
    }

    // create a new player and save it in the collection
    newTeacher( name, age, years_of_experience, subject, image ) {
      let t = new Teacher( name, age, years_of_experience, subject, image );
      this.teachers.push( t );
      return t;
    }

    get allTeachers(){
      return this.teachers;
    }

    // this could include summary stats like average score, etc. For simplicy, just the count for now
    get numberOfTeachers(){
        return this.teachers.length;
    }
  }
  
let group = new Teachers();
group.newTeacher( 
    "Florin Jurca", 
    63, 
    30, 
    "programming",
    "https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.6435-9/238921805_360440805618961_7015652771301242205_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=FtDx6zfiguQAX-6-zte&tn=ei-XOrm9KXNjH3BD&_nc_ht=scontent.ftsr1-2.fna&oh=d101121e06c52d644418fb2f6995ff6e&oe=619C7E69" 
);

group.newTeacher( 
    "Ramona Cretu", 
    45, 
    23, 
    "biology",
    "https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.6435-9/152747690_1598101657046711_1470893500991981669_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=e3f864&_nc_ohc=B9trCS8tnB0AX8RM8gJ&tn=ei-XOrm9KXNjH3BD&_nc_ht=scontent.ftsr1-2.fna&oh=0becf70db0a9ecfebf7f951045b3ac42&oe=61993C60" 
);  

group.newTeacher(
    "Cristina Preda",
    43,
    20,
    "French",
    "https://scontent.ftsr1-1.fna.fbcdn.net/v/t1.6435-9/76767436_2929513937082445_8736376131931865088_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=DD5Vu97rqhIAX_PJIos&_nc_ht=scontent.ftsr1-1.fna&oh=c2ca7f7b0c7506ce0f84abeae391cea0&oe=6198BC1D"
);