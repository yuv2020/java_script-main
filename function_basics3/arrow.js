const user = {
    username : "Yuvraj",
    price: 999,

    welcomemessage : function(){               // 'this' is a current context value 
        console.log(`Welcome to our website, ${this.username}! Your current price is ${this.price}.`);
        console.log(this);
    }
}

// user.welcomemessage()
// user.username = "Ritik";
// user.welcomemessage()

// console.log(this)

/*
function chai(){
    let name = "yuv"
    console.log(this.name)

}
chai()
*/

/*
const chai = function(){
    let name = "yuv"
    console.log(this.name);
}
chai()
*/

/*
const chai = () => {
    let name = "yuv"
    // console.log(this.name);
    console.log(this);
}
chai()
*/

/*
const sum = (num1, num2) => {
    return num1 + num2;             // Explicitly uses the return value
}
*/

/* const sum = (num1, num2) => num1 + num2; */          //Implicitly not uses the return value
    
/* const sum = (num1, num2) => (num1 + num2); */            //Implicitly not uses the return value

const sum = (num1, num2) => ({username : "yuvraj"});         // Implicitly uses the return value

console.log(sum(2,3))