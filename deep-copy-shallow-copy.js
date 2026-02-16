let obj = {
    name: "Harsh",
    address: {
        city: "Pune"
    }
}

let user = obj;   // copies reference not value, copy memory location 
console.log(user.address.city);

user.address.city = "Mumbai";
console.log(obj.address.city);  // value from obj is also changed, cause copy by reference

// shallow copy, Copies only the first level. Nested objects still share the same reference.
let obj2 = Object.assign({}, obj);  // it just copy the values not a reference, 1st way

obj2.name = "Jack";
obj2.address.city = "kolkata";
console.log(obj2.name);
console.log(obj.name);  // here value of obj remains as it is, i.e previous value


// shallow copy using destructuring
let obj3 = { ...obj }  // another way for shallow copy
console.log(obj3.address.city);
obj3.address.city = "Delhi";
console.log("value of nested prop after shallow copy: ",obj.address.city);  // here actual value of obj is also changed, Copies only the first level. Nested objects still share the same reference.


// Deep Copy → Copies all levels. No shared references at any depth.
// Structured cloning is a native deep-copy mechanism in JavaScript that safely clones complex objects, preserving structure without shared references.
let obj4 = structuredClone(obj);
obj4.address.city = "Chennai";
console.log("value of nested prop of obj after deep copy: ",obj.address.city);
console.log(obj4.address.city);

// for deep copy JSON.parse(JSON.stringify()) (Not Recommended)
let obj5 = JSON.parse(JSON.stringify(obj))
obj5.address.city = "Sangli";
console.log("value of nested prop of obj after deep copy using JSON.Stringify: ",obj.address.city);
console.log(obj5.address.city);

// ❌ Loses:
// undefined
// functions
// Date, Map, Set
// circular references
