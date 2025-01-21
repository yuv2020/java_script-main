// (IIFE) Immmediately Invoked Function Expressions

(function chat(){           // This is called named iifi where we declared the name of the function that is 'chat'
    console.log("Welcome to our chat app!");
})();

//Or

( () => {
    console.log("Welcome to our chat group!");
})();

//Or

((name) => {        //This is called where we not declared any name i.e., non-iifi
    console.log(`We can use in this form to declare the functions you want to ${name}`)
})(`parameter`)

