//Primitive data types

// 7 categories of primitive data types : String, Number, Boolean, null, udefined, Symbol, BigInt

const score = 100;
const scorevalue = 100.2;

const name = "Yuvraj";
const isloggedin = false;
let usernames;

// const id = Symbol('12');
const anotherid = Symbol('12');

console.table([typeof anotherid, anotherid]); 

const bignumber = 2376293809945n;

console.log(typeof bignumber);  // BigInt   
console.log(bignumber)

/* Reference(Non-primitive data types)
1. Array
2. Objects
3. Functions
*/

const heroes = ['Shakespeare', 'ironman', 'hero', 'baalveer']
let obj = {
    name: 'Rohit',
    age: 30,
}

const mufunct = function (){
    console.log('I am a function');
}

mufunct();