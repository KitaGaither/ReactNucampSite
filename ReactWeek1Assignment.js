class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
    
    registerStudent(studentToRegister) {
       if(this.students.filter(s => s.email === studentToRegister.email).length == 1) {
           console.log(`The student with email address ${studentToRegister.email} is already registered for this bootcamp! Please use a different email to register.`)
       } else {
           this.students.push(studentToRegister);
           console.log(`Thank you for registering today with email address ${studentToRegister.email} to our ${this.name} bootcamp!`)
       }
       return this.students;
    }
};

 /*      
class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
}

const bootcamp1 = new Bootcamp('React', 'beginner', []);

const student1 = new Student('kita', 'kita@gmail.com', 'Nashville');  

*/

//TEST
//bootcamp1.registerStudent(student1);
