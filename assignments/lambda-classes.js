// Base class
class Person {
    constructor(personAtts) {
        this.name = personAtts.name;
        this.age = personAtts.age;
        this.location = personAtts.location;
        this.gender = personAtts.gender;
    }

    speak() {
        return console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
    }
}

class Instructor extends Person {
    constructor(instructorAtts) {
        super(instructorAtts);
        this.speciality = instructorAtts.speciality;
        this.favLanguage = instructorAtts.favLanguage;
        this.catchPhrase = instructorAtts.catchPhrase;
    }

    demo(subject) {
        return console.log(`Today we are learning about ${subject}`)
    }

    grade(student, subject) {
        return console.log(`${student.name} receives a perfect score on ${subject}`)
    }
}

class Student extends Person {
    constructor(studentAtts) {
        super(studentAtts);
        this.previousBackground = studentAtts.previousBackground;
        this.className = studentAtts.className;
        this.favSubjects = studentAtts.favSubjects;
    }

    listsSubjects() {
        return this.favSubjects.forEach(subject => {
            console.log(subject)
        });
    }

    PRAssignment(subject) {
        return console.log(`${this.name} has submitted a PR for ${subject}`)
    }

    sprintChallenge(subject) {
        return console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
}

class ProjectManager extends Instructor {
    constructor(pmAtts) {
        super(pmAtts);
        this.gradClassName = pmAtts.gradClassName;
        this.favInstructor = pmAtts.favInstructor;
    }

    standUp(channel) {
        return console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`)
    }

    debugsCode(student, subject) {
        return console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}


const personRandom = new Person({
    name: 'Random Person',
    location: 'New York',
    age: 18,
    gender: 'male',
})

const instructorRandom = new Instructor({
    name: 'Random Instructor',
    location: 'Mississippi',
    age: 40,
    gender: 'male',
    specialty: 'React',
    favLanguage: 'JS',
    catchPhrase: 'This is a catch phrase',
    subject: 'JS Fundamentals',
    student: {
        name: 'this a student name',
    },
});

const randomStudent = new Student({
    name: 'Random Student',
    location: 'Florida',
    age: 24,
    gender: 'female',
    previousBackground: 'Material Science',
    className: 'WEB17',
    favSubjects: ['Math', 'Computer Science', 'History'],
});

const randomPM = new ProjectManager({
    name: 'Random Project Manager',
    location: 'California',
    age: 25,
    gender: 'male',
    gradClassName: 'WEB17',
    favInstructor: 'Knell',
})

console.log(personRandom);
console.log(instructorRandom);
console.log(randomStudent);
console.log(randomPM);
personRandom.speak();
instructorRandom.demo('React');
instructorRandom.grade({
    name: 'Student Name'
}, 'JavaScript Sprint');
console.log(`Instructor catch phrase: ${instructorRandom.catchPhrase}`);
randomStudent.listsSubjects();
randomStudent.PRAssignment('JavaScript');
randomStudent.sprintChallenge('JavaScript');
console.log(`Student previous background: ${randomStudent.previousBackground}`);
randomPM.standUp('web17');
randomPM.debugsCode({
    name: 'Random student'
}, 'JavaScript');
console.log(`PM's favorite instructor: ${randomPM.favInstructor}`);
