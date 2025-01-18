// const tinderuser = new Object();        //This is called singleton object
const tinderuser = {}  //Non-singleton object

tinderuser.name = "John Doe";
tinderuser.age = 30;
tinderuser.isLoggedIn = true;

// console.log(tinderuser);

const regularuser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firsname : "John",
            lastname : "Dohn"
        }
    }
}

// console.log(regularuser.fullname);
// console.log(regularuser.fullname.userfullname);

const object1 = {1: "a", 2: "b"}
const object2 = {3: "a", 4: "b"}

const obj3 = {...object1, ...object2}       //is is called spread function with object1 and object2 i.e., ...object
console.log(obj3)

const object3 = { object1, object2 }

const ans = Object.assign({}, object1, object2)
console.log("combined :" , object3);

console.log("object is a type of :" , typeof Object.keys(object1).length);
console.log('====================================');


const user = [
    {
        id : 1,
        email : 'er@micro.com'
    },
    {
        id : 1,
        email : 'er@micro.com'
    },
    {
        id : 1,
        email : 'er@micro.com'
    },
    {
        id : 1,
        email : 'er@micro.com'
    },  
]

user[1].email
console.log(tinderuser);
console.log("Here are keys printed: ", Object.keys(tinderuser))
console.log("Here are values printed: ", Object.values(tinderuser))

console.log(Object.entries(tinderuser))         // entries functions is used for combined all the keys and values in the dictionary

console.log(Object.getOwnPropertyNames(tinderuser))     // getOwnPropertyNames function is used to get all the keys in the dictionary

console.log(Object.getOwnPropertySymbols(tinderuser))     // getOwnPropertySymbols function is used to get all the symbols in the dictionary

console.log(Object.getOwnPropertyDescriptor(tinderuser, 'name'))     // getOwnPropertyDescriptor function is used to get the description of a property

console.log(Object.create(null));      // create a new object with no prototype

console.log(tinderuser.hasOwnProperty('name')); // hasOwnProperty is used to get the description of a property

/* De-structuring of array */
console.log(" ========== de-structuring of objects ==========")
const course = {
    coursenames: "js in hindi",
    price : "USD",
    instructor : "Dr. Sameer",
    duration : 20
}

// console.log(course.instructor)

const { instructor } = course;
console.log(instructor)

const { instructor: instructorName } = course;
console.log(instructorName)

// {
//     "name" : "Yuvraj",
//     "age" : 25,
//     "city" : "Pune"
// }


