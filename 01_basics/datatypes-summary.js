// primitive;
// 7 types : string,number,boolearn,null,undefined,symbol,bigint
const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outSideTemp = null;
let userEmail;
const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId);
// const bigNumber = 324344656675545445545n;
// Referance (Non primitive)
// Array,object,functions
const heros = ["ankit", "manish", "abhi"];
let myobj = {
  name: "ankit",
  age: 27,
};
const myfunction = function () {
  console.log("hello  world");
};
console.log(typeof myobj);
// ====================================================================
// stack (primitive), heap ( Non-primitive)
let myYoutubename = "ankitkherwa";
let anothername = myYoutubename;
anothername = "shivakherwa";
console.log(myYoutubename);
console.log(anothername);
let userOne = {
  email: "ankitswami@gmail.com",
  upi: "ankit@ybl",
};
let userTwo = userOne;
userTwo.email = "swami@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);
