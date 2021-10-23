// grabbing html elements
const select = document.getElementById('customSelect');

// event listeners
select.addEventListener('input', handleSelect);

// functions
function handleSelect( ev ) {
    let val = ev.target;
    
    if ( val.value == "add" ) {
        addStudent();
    } else {
        seeStudents();
    }
}

function addStudent() {
    console.log('adding student...');
}


const student_1 = {
    name: "Katty Ptk",
    age: 16,
    image: "https://scontent.fotp1-1.fna.fbcdn.net/v/t1.6435-9/120932289_1757036474444716_6195118454447051272_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=YcoBr-tILrAAX9l2Ddh&_nc_ht=scontent.fotp1-1.fna&oh=4ec5ce4bbed7f598b1890bffd79dd286&oe=6197D20C",
    description: 'I am Katty & I am 16 years old.'
};

const student_2 = {
    name: "Ana Firta",
    age: 20,
    image: "https://scontent.fotp1-1.fna.fbcdn.net/v/t1.6435-9/119707104_10158623991201866_6803477729732375676_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Z5FCQiM6IGIAX9KXaBl&_nc_ht=scontent.fotp1-1.fna&oh=aa17f0cdd73ec629f71eb7412bc874c2&oe=61978658",
    description: 'I am Anna & I am 20 years old.'
};

const student_3 = {
    name: "Vicze",
    age: 25,
    image: "https://scontent.fotp1-1.fna.fbcdn.net/v/t39.30808-6/246402497_4579595442100612_1404498396719209943_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=KBaRj1hsXvoAX_iwv1z&_nc_ht=scontent.fotp1-1.fna&oh=585682eb2f882acdd8e21d8bef0cc10b&oe=61797322",
    description: 'I am Vicze & I am 25 years old.'
};

function seeStudents() {
    const studentsDiv = document.createElement('div');
    document.getElementsByTagName('body')[0].appendChild(studentsDiv);
    studentsDiv.setAttribute('class', 'students');
    document.getElementsByClassName('main')[0].style.display = "none";

    const seeing_h1 = document.createElement('h1');
    seeing_h1.innerHTML = `
        <h1>These are the students in this class</h1>
    `;
    studentsDiv.appendChild(seeing_h1);

    const line_2 = document.createElement('span');
    line_2.setAttribute('id', 'line2');
    studentsDiv.appendChild(line_2);

    const students = document.createElement('section');

    // STUDENT 1
    const student1_div = document.createElement('div');
    student1_div.setAttribute('class', 'one-student');
    const student1_name = document.createElement('h3');
    const student1_age = document.createElement('p');
    const student1_des = document.createElement('p');
    const student1_image = document.createElement('img');

    student1_name.textContent = student_1.name;
    student1_age.textContent = student_1.age;
    student1_des.textContent = student_1.description;
    student1_image.src = student_1.image;

    student1_div.appendChild(student1_image);
    student1_div.appendChild(student1_name);
    student1_div.appendChild(student1_age);
    student1_div.appendChild(student1_des);

    students.appendChild(student1_div);

    // STUDENT 2
    const student2_div = document.createElement('div');
    student2_div.setAttribute('class', 'one-student');
    const student2_name = document.createElement('h3');
    const student2_age = document.createElement('p');
    const student2_des = document.createElement('p');
    const student2_image = document.createElement('img');

    student2_name.textContent = student_2.name;
    student2_age.textContent = student_2.age;
    student2_des.textContent = student_2.description;
    student2_image.src = student_2.image;

    student2_div.appendChild(student2_image);
    student2_div.appendChild(student2_name);
    student2_div.appendChild(student2_age);
    student2_div.appendChild(student2_des);

    students.appendChild(student2_div);

    // STUDENT 3
    const student3_div = document.createElement('div');
    student3_div.setAttribute('class', 'one-student');
    const student3_name = document.createElement('h3');
    const student3_age = document.createElement('p');
    const student3_des = document.createElement('p');
    const student3_image = document.createElement('img');

    student3_name.textContent = student_3.name;
    student3_age.textContent = student_3.age;
    student3_des.textContent = student_3.description;
    student3_image.src = student_3.image;

    student3_div.appendChild(student3_image);
    student3_div.appendChild(student3_name);
    student3_div.appendChild(student3_age);
    student3_div.appendChild(student3_des);

    students.appendChild(student3_div);


    studentsDiv.appendChild(students);
}