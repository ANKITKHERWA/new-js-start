//  singleton


// object literals

const mySym = Symbol("key1")


const JsUser = { name:"ankit",
    "full name": "ankit kumar swami", 
    [mySym]:"mykey1",
    age: 27,
    location:"nohar",
    email:"ankit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "sunday"]

}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email= "ankit@gmail.com"
// Object.freeze(JsUser)
JsUser.email= "ankitswami@gmail.com"
console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hello JS user")
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`)
}
 console.log(JsUser.greeting())
 console.log(JsUser.greetingTwo())