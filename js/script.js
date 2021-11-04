// grabbing html elements
const select = document.getElementById('customSelect');
const close_btn = document.getElementById('close');

// event listeners
select.addEventListener('input', handleSelect);

// document.getElementsByClassName('main')[0].appendChild(close_btn);

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
    
    const add_form = document.createElement('form');
    add_form.innerHTML = `
        <form class="addForm">
            <input id="name" class="inputs" type="text" autocomplete="off" placeholder="Enter here the student's full name."></input>
            <input id="age" type="number" autocomplete="off" placeholder="Enter here the student's age."></input>
            <input id="email" type="email" autocomplete="off" placeholder="Enter here the student's email."></input>
        </form>
    `;
    add_form.setAttribute('id', 'addForm');
    select.style.display = "none";
    $(".custom-arrow").css("display", "none");

    const add_btn = document.createElement('button');
    add_btn.innerHTML = `
        Add Student
    `;
    add_btn.setAttribute('id', 'addBtn');

    const add_div = document.createElement('div');
    add_div.setAttribute('id', 'addDiv');
    add_div.appendChild(add_form);
    add_div.appendChild(add_btn);

    document.getElementsByClassName('main')[0].appendChild(add_div);

    document.getElementsByClassName('main')[0].appendChild(close_btn);
    close_btn.addEventListener('click', function() {
        add_div.style.display = "none";
        select.style.display = "block";
        $('.custom-arrow').css('display', 'block');
        close_btn.classList.add('displayNone');
        // $('#addForm').children('input').val('');
        // document.getElementById('addForm').reset();
    });
    close_btn.classList.remove('displayNone');

    add_btn.addEventListener('click', addNewStudent);
}

function addNewStudent() {
    
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    
    students_group.newStudent( 
        name, 
        age, 
        email
    );      
        
    console.log(students_group);
    console.log(`${name} has been added. They are ${age} & their email is ${email}`);
    document.getElementById('addForm').reset();

}

let seeing_h1;
let line_2;
function seeStudents() {
    const studentsDiv = document.createElement('div');
    document.getElementsByTagName('body')[0].appendChild(studentsDiv);
    
    studentsDiv.appendChild(close_btn);
    close_btn.addEventListener('click', function() {
        studentsDiv.style.display = "none";
        document.getElementsByClassName('main')[0].style.display = "block";
    });
    close_btn.classList.remove('displayNone');

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
        const new_student_email = document.createElement('p');
        const new_student_image = document.createElement('img');

        new_student_image.src = "../image.JPG";
        new_student_div.appendChild(new_student_image);

        new_student_name.textContent = classmate.name;
        new_student_div.appendChild(new_student_name);

        new_student_age.textContent = classmate.age;
        new_student_div.appendChild(new_student_age);
        
        new_student_email.textContent = classmate.email;
        new_student_div.appendChild(new_student_email);

        students.appendChild(new_student_div);
        studentsDiv.appendChild(students);
    });
}

function seeTeachers() {
    const teachersDiv = document.createElement('div');
    document.getElementsByTagName('body')[0].appendChild(teachersDiv);

    teachersDiv.appendChild(close_btn);
    close_btn.addEventListener('click', function() {
        teachersDiv.style.display = "none";
        document.getElementsByClassName('main')[0].style.display = "block";
    });
    close_btn.classList.remove('displayNone');

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

function getBack( divToHide ) {
    divToHide.style.display = "none";
}