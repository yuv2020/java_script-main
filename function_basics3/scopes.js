// var c= 200
let a = 300

if(true){
    let a = 2;
    const b = 13;
    // var c = 14;
    // console.log("Inner scope: " , a)
}

// console.log("Outer scope:", a);
// console.log(b);
// console.log(c);  

/*
function one(){
    const username = "my name"

    function two(){
        const website = "amazon"
        console.log(username)
    }

    console.log(website)

    two()
}
one()

*/

//+++++++++++++++++++++++++++++++++Interesting+++++++++++++++++++++++++++++++++
// Function can be defined in two forms i.e., in this form 

console.log(addone(5))
function addone(num){
    return num+1;
}

//OR in this form 

const addtwo = function(num){
    return num+2;
}
console.log(addtwo(5))