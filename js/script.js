// grabbing html elements
const select = document.getElementById('customSelect');

// event listeners
select.addEventListener('input', handleSelect);

// functions
function handleSelect( ev ) {
    let val = ev.target;
    
    switch ( val.value ) {
        case "add":
            addStudent();
            break;
        
        case "seeStudents":
            seeStudents();
            break;

        case "seeTeachers":
            seeTeachers();
            break;
    }
}

function addStudent() {
    console.log('adding student...');
}


let seeing_h1;
let line_2;
function seeStudents() {
    const studentsDiv = document.createElement('div');
    document.getElementsByTagName('body')[0].appendChild(studentsDiv);
    studentsDiv.setAttribute('class', 'students');
    document.getElementsByClassName('main')[0].style.display = "none";

    seeing_h1 = document.createElement('h1');
    seeing_h1.innerHTML = `
        <h1>These are the students of this class</h1>
    `;
    studentsDiv.appendChild(seeing_h1);

    line_2 = document.createElement('span');
    line_2.setAttribute('class', 'line2');
    studentsDiv.appendChild(line_2);

    const students = document.createElement('section');

    students_group.allStudents.forEach(classmate => {
        const new_student_div = document.createElement('div');
        new_student_div.setAttribute('class', 'one-student');
        const new_student_name = document.createElement('h3');
        const new_student_age = document.createElement('p');
        const new_student_des = document.createElement('p');
        const new_student_image = document.createElement('img');

        new_student_image.src = classmate.image;
        new_student_div.appendChild(new_student_image);

        new_student_name.textContent = classmate.name;
        new_student_div.appendChild(new_student_name);

        new_student_age.textContent = classmate.age;
        new_student_div.appendChild(new_student_age);
        
        new_student_des.textContent = classmate.description;
        new_student_div.appendChild(new_student_des);

        students.appendChild(new_student_div);
        studentsDiv.appendChild(students);
    });
}

function seeTeachers() {
    const teachersDiv = document.createElement('div');
    document.getElementsByTagName('body')[0].appendChild(teachersDiv);
    teachersDiv.setAttribute('class', 'teachers');
    document.getElementsByClassName('main')[0].style.display = "none";

    seeing_h1 = document.createElement('h1');
    seeing_h1.innerHTML = `
        <h1>These are the teachers for this class</h1>
    `;
    teachersDiv.appendChild(seeing_h1);

    line_2 = document.createElement('span');
    line_2.setAttribute('class', 'line2');
    teachersDiv.appendChild(line_2);

    const teachers = document.createElement('section');

    group.allTeachers.forEach(professor => {
        const new_teacher_div = document.createElement('div');
        new_teacher_div.setAttribute('class', 'one-teacher');
        const new_teacher_name = document.createElement('h3');
        const new_teacher_age = document.createElement('p');
        const new_teacher_des = document.createElement('p');
        const new_teacher_image = document.createElement('img');

        new_teacher_image.src = professor.image;
        new_teacher_div.appendChild(new_teacher_image);

        new_teacher_name.textContent = professor.name;
        new_teacher_div.appendChild(new_teacher_name);

        new_teacher_age.textContent = professor.age;
        new_teacher_div.appendChild(new_teacher_age);
        
        new_teacher_des.textContent = professor.description;
        new_teacher_div.appendChild(new_teacher_des);

        teachers.appendChild(new_teacher_div);
        teachersDiv.appendChild(teachers);
    });
}