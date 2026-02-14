// JavaScript classes are syntactic sugar over prototype-based inheritance, providing a cleaner way to create objects and manage inheritance.


// In JavaScript, classes and closures solve different problems.
// A class is best when you need many instances that share the same methods efficiently via the prototype chain.
// Closures are better when you want private state and don’t need inheritance.
// Closures can consume more memory because each function instance keeps its own lexical environment, whereas class methods are shared.

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        console.log(`your password is encypting...`);
        let encryptedPassword = this.password + '247bsw592';
        console.log("encryptedPassword: ", encryptedPassword);
    }

    getUserDetails(){
        console.log(`your name is ${this.username} and your email is ${this.email}`);
    }
}

const user1 = new User("Harsh", "harsh@gmail.com", "harsh@2001");
user1.getUserDetails();
user1.encryptPassword();

// BTS
// function User(username, email, password) {
//     this.username = username;
//     this.password = password;
//     this.email = email;
// }

// User.prototype.encryptPassword = function () {
//     console.log(`your password is encypting...`);
//     let encryptedPassword = this.password + '247bsw592';
//     console.log("encryptedPassword: ", encryptedPassword);
// }

// User.prototype.getUserDetails = function () {
//     console.log(`your name is ${this.username} and your email is ${this.email}`);
// }

// const user2 = new User("Raj", "raj@gmail.com", "raj@2001");
// user2.getUserDetails();
// user2.encryptPassword();


// Inheritance
class Teacher extends User{
    constructor(username, email, password, department){
        super(username, email, password);
        this.department = department
    }

    getDepartment(){
        console.log(`Teacher ${this.username} is from ${this.department} department`);
    }
    static username = "Rakesh"; // Static Private Members
    static teachMission(){
        console.log(`${this.username} teacher is on ISRO-secrete mission`);
    }
}

const teacher1 = new Teacher("harsh","harsh@gmail.com", "harsh@2001", "CS");
teacher1.getDepartment();
teacher1.getUserDetails();
// teacher1.teachMission();  // gives an error
Teacher.teachMission();

// In JavaScript, the static keyword is used to define methods or properties that belong to the class itself, not to its instances.