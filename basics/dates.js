//Dates

let mydate = new Date();
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toISOString());
console.log(mydate.toLocaleString());
console.log(mydate.toLocaleDateString);
console.log(mydate.toTimeString());
console.log('====================================');
console.log(typeof mydate)
console.log('====================================');

let mycreatedate = new Date(2054, 0, 6, 5, 3);
// console.log(mycreatedate.toString());
console.log(mycreatedate.toLocaleString());

let mycreatedate1 = new Date("06-01-2025")
console.log(mycreatedate1.toLocaleString());

let mytimestamp = Date.now()
console.log(mytimestamp);
console.log(mycreatedate1.getTime());

console.log(Math.floor(Date.now()/1000));

let newdate = new Date()
console.log("new date " + newdate);
console.log(newdate.getDate());
console.log(newdate.getMonth() + 1 );

console.log('====================================');
newdate.toLocaleString('default', {
    weekday: "long",
    timeZone: "utc"
});

console.log(newdate);
