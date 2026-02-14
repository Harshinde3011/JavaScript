// everything in js is object, and that object has its internal properties is called prototype
// array, string, function ----------> object -------------> null

function multipleOf5(num) {
    return num*5;
}

console.log(multipleOf5(5));
console.log(multipleOf5.prototype);

// ------------------------------------------new keyword--------------------------------------------
function createUser(username, score) {
    this.score = score;
    console.log(`user ${username} with score: ${score}`);
}

const user1 = new createUser("Harsh", 25);

createUser.prototype.increment = function () {
    this.score++
}

createUser.prototype.printMyScore = function () {
    console.log("Your score is: ", this.score);
}

user1.printMyScore();

console.log("user1: ", user1);

// BTS
// ✅ Step 1: Create an empty object, obj = {}
// ✅ Step 2: Link prototype (__proto__), obj.__proto__ = createUser.prototype
// ✅ Step 3: Bind this, createUser.call(obj, "Harsh", 25)
// So inside function: this.score = score, Becomes obj.score = 25
// ✅ Step 4: Return object automatically, 

// const user1 = {
//   score: 25,
//   __proto__: createUser.prototype
// }
// 3️⃣ What does createUser.prototype.increment do?
// internally, createUser.prototype = {
//   constructor: createUser,
//   increment: function () {
//     this.score++
//   }
// }

// 4️⃣ How user1.increment() works (Prototype Chain)
// When you call:  user1.increment()
// Does user1 have increment?
// ❌ No
// Go to prototype: user1.__proto__ === createUser.prototype
// Found increment ✅
// Call function with: this = user1

// When new is used, JavaScript creates a new object, links it to the constructor’s prototype, binds "this" to that object, executes the function, and returns the object. Methods added to prototype are shared across all instances via the prototype chain.

// -------------------------------------prototype ------------------------------------------------
let techStack = ["nodejs", "mongodb"];

let detailsAboutTechStack = {
    language : "javaScript",
    runTimeEnv : "nodejs"
}

// here I going to declare one method into object so that both array and object can access it, like we use array.length
Object.prototype.backendTech = function () {
    console.log(`for backend u require lang, database, run time env`);
}

techStack.backendTech();
console.log(detailsAboutTechStack.__proto__);

// How this object was created BTS
// Behind the scenes JS does: let detailsAboutTechStack = new Object()
// So internally: 
// detailsAboutTechStack
//   └── __proto__ → Object.prototype


function A() {}
const a = new A()

console.log(A.prototype)        // ✔ exists
console.log(a.prototype)        // ❌ undefined, cause object
console.log(a.__proto__)        // ✔ A.prototype

// if you mention method only to Array then object detailsAboutTechStack can't access it
Array.prototype.onlyForArray = function () {
    console.log(`This method is created only for array, no other dataTypes can access me`);
} 

techStack.onlyForArray();
// detailsAboutTechStack.onlyForArray(); // error "etailsAboutTechStack.onlyForArray is not a function"


// Inheritance, here one object can access the properties of another object using prototype chaining
let User = {
    name: "harsh",
    age: "25"
}

let techStackUsed = {
    framework : "express",
    containerizationTool : "docker"
}

Object.setPrototypeOf(User, techStackUsed);

console.log(User.framework);


let firstName = "Harshwardhan   ";
let lastName = "shinde   ";

String.prototype.trurLength = function () {
    console.log("current contest",this);
    return this.trim().length;
}

console.log(firstName.trurLength());
