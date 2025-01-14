const num = 700;
const balance = new Number(100);
// console.log(num);
// console.log(balance);

// console.log('====================================');
// console.log(balance.toString());
// console.log(balance.toFixed(4));
// console.log('====================================');
// console.log(typeof balance.toString());;
// console.log('====================================');

const othernumber = 123.654
// console.log(othernumber.toPrecision(3));
// console.log('====================================');

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));
// console.log(hundreds.toLocaleString(3));

// console.log('====================================');

//++++++++++++++++++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++++++++++++
console.log(Math);
console.log('====================================');
console.log(Math.PI);
console.log(Math.abs(-6));
console.log(Math.round(76.56));
console.log(Math.ceil(4.8));
console.log(Math.floor(8.54));
console.log(Math.random());         // Math.random gives a random value betweeen 0 and 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);
console.log('====================================');

min = 10
max = 30

console.log(Math.floor(Math.random()*(max-min + 1))+min);
