//Singleton
// Object.create()     //Constructor Methods

//Objects Literals
const mysymbol = Symbol("Keys");

const js_user = {
    name: "John Doe",
    "full name" : "John downgrade",
    [mysymbol] : "myskeys",
    age: 30,
    city: "New York",
    email : "john@gmail.com",
    isloggedin: true, 
    hobbies: ["reading", "painting"],
}

console.log(js_user.name);
console.log(js_user["full name"]);
console.log(js_user["email"])
console.log(js_user[mysymbol]);

js_user.name = "javascript_main";
// Object.freeze(js_user);
js_user.name = "Akash Yadav"
console.log(js_user)

console.log("++++++++++++++++FUNCTIONS++++++++++++++++")

js_user.greeting = function() {
    console.log("Hello js user!");
}

js_user.greeting2 = function() {
    console.log(`Hello js user, ${this.name}!`);      //String Interpolation when user changes strings to backtricks
}

console.log(js_user.greeting());
console.log(js_user.greeting2());

