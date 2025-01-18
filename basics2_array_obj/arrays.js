//Arrays

const myarr = [3,4,6,7,8]
const myheroes = ["Shaktiman", "Baalveer", "Ironman", "shakti"]

console.log(myarr[0])
console.log();
console.table([myarr[0]]);

//Array methods
myarr.push(5)
myarr.push(87)
console.log(myarr)
myarr.pop()
console.log("Using pop " + myarr);

myarr.unshift(9);
myarr.shift();

console.log("Using Includes " + myarr.includes(9));
console.log("Using Indexof " + myarr.indexOf(5));
console.log("Using unshift " + myarr)

console.log("Printed array : " + typeof myarr)
const new1 = myarr.join()
console.log(typeof new1)
console.log("Using join " + new1)

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
//Slice and splice
console.log("A " , myarr);

const slice1 = myarr.slice(1, 3);
console.log("Slice " , slice1)

console.log("B " , myarr);

const splice1 = myarr.splice(1, 2);
console.log("Splice " , splice1)
