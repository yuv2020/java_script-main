// const userEmail = "Hit@gmail.com"

/*
const userEmail = []
if(userEmail){
    console.log("got user email")
}
else{
    console.log("No user email")
}
    */


/*

Falsy Values:-
false, 0, -1, BigInt 0n, "", null, undefined, Nan

Truthy Values:-
"0", "false", " ", 1, "hello", true, "123", {}, [], Symbol(), BigInt(1), function(){}

*/ 

// if(userEmail.length === 0){
//     console.log("User email is 0")
// }

const emptyObjects = {}
if(Object.keys(emptyObjects).length === 0){
    console.log("Empty objects")
}

//Nullish Coalescing operators (??): null defined

let val1;
val1 = 5 ?? 10;
// val1 = null ?? 10
val1 = undefined ?? 11

val1 = null ?? 110 ?? 23

console.log(val1);

//Terniary operator

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("greater than 80");