// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ====
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1,mmelloy0@psu.edu,Mitzi,F
// 2,kdiben1@tinypic.com,Kennan,M
// 3,kmummery2@wikimedia.org,Keven,M
// 4,gmartinson3@illinois.edu,Gannie,M
// 5,adaine5@samsung.com,Antonietta,F

// Example format of an intern object: 1,examples@you.edu,Example,F
// const example = {
//   "id": 0,
//   "name": "Example",
//   "email": "examples@you.edu",
//   "gender": "F"
// }

// Write your intern objects here:
function InternObj(id, name, email, gender){
  this.id = id,
  this.name = name,
  this.email = email,
  this.gender = gender;
}

let mitzi = new InternObj(1, 'Mitzi', 'mmelloy0@psu.edu', 'F'),
    kennan = new InternObj(2, 'Kennan', 'kdiben1@tinypic.com', 'M'),
    keven = new InternObj(3, 'Keven', 'kmummery2@wikimedia.com', 'M'),
    gannie = new InternObj(4, 'Gannie', 'gmartinson3@illinois.edu', 'F'),
    antonietta = new InternObj(5, 'Antonienetta', 'adaine5@samsung.com', 'F');

// ==== Challenge 2: Reading Object Data ====
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log(mitzi.name);
// Kennan's ID
console.log(kennan.id);
// Keven's email
console.log(keven.email);
// Gannie's name
console.log(gannie.name);
// Antonietta's Gender
console.log(antonietta.gender);
// ==== Challenge 3: Object Methods ====
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
kennan.introduce = (function(){
    return `Hello, my name is ${this.name}!`;
});
// console.log(kennan.speak());
console.log(kennan.introduce());
// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
  antonietta.multiply = function(x, y){return x * y;};
//console.log(antonietta.multiplyNums(3,4));
console.log(antonietta.multiply(5, 5));
// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== Stretch Challenge: Nested Objects and the this keyword ====

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

const parent = [{name: 'Susan', age: 70},
{name: 'George', age: 50},
{name: 'Sam', age: 30}];

parent.map(function(x){
  x.say = (function(){
    return `My name is ${this.name}. Pleased to sayName. XD`;
  });
  return x;
});
// Log the parent object's name
console.log(parent[0].name);
// Log the child's age
console.log(parent[1].age);
// Log the name and age of the grandchild
console.log(parent[2].name, parent[2].age);
// Have the parent speak
console.log(parent[0].say());
// Have the child speak
console.log(parent[1].say());
// Have the grandchild speak
console.log(parent[2].say());


          // Using Object Constructor
// function people(name, age){
//   this.name = name,
//   this.age = age;
// }

// let parent = new people('Susan', 70),
//     child = new people('George', 50),
//     grandchild = new people('Sam', 30);
// parent.say = (function(){
//     return `My name is ${this.name}. Pleased to sayName. XD`;
//   });
// child.say = (function(){
//     return `My name is ${this.name}. Pleased to sayName. XD`;
//   });
// grandchild.say = (function(){
//     return `My name is ${this.name}. Pleased to sayName. XD`;
//   });
// // Log the parent object's name
// console.log(parent.name);
// // Log the child's age
// console.log(child.age);
// // Log the name and age of the grandchild
// console.log(grandchild.name, grandchild.age);
// // Have the parent speak
// console.log(parent.say());
// // Have the child speak
// console.log(child.say());
// // Have the grandchild speak
// console.log(grandchild.say());