function saymyname(){
    console.log('Y');
    console.log('U');
    console.log('V');
    console.log('2');
    console.log('0');    
}

saymyname();

/*

function addtwonumber( n1 , n2){     // when we define the function as well as taken the value in the function is known as parameters. i.e., n1 and n2
    console.log(n1 + n2);
}

const result = addtwonumber(2, 9);       // when we called the value from the functions known as arguements... i.e., 2 and "3" 

*/

function addtwonumber( n1 , n2){     // when we define the function as well as taken the value in the function is known as parameters. i.e., n1 and n2
    // console.log("Gupta ");
    // let sum = n1+n2; 
    return  n1 + n2
}

const result = addtwonumber(2, 3);  
console.log("Result of sum is : ", result);

function loginuser(username = "somya"){
    if(!username){
        console.log("Please enter a username if you already logged in")
        return;
    }
    return `${username} just logged in`;
}

console.log(loginuser())
// console.log(loginuser('Hitesh Yadav'))

console.log("++++++++++++++++++++++++++++++++++++ Functions with objects and array ++++++++++++++++++++++++++++++++++++")

function calculate_cart_price(...num1){
    // let cart = [
    //     {name: 'apple', price: 10},
    //     {name: 'orange', price: 15},
    //     {name: 'banana', price: 20}
    // ]

    return num1;
}
console.log(calculate_cart_price(200, 400, 1000));

const user = {
    username : "hitme",
    price : 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// console.log(handleObject(user));
// handleObject(user)

handleObject({
    username: " sona",
    price: 150
})

const mynewarray = [200, 409, 1980];

function handleArray(anyarray){
    return anyarray[1]
}

console.log(handleArray(mynewarray));

console.log(handleArray([200, 409, 1298, 432543]))