const accountId = 13425;
let accountemail = "yuv@gmail.com";
var accoutpassword = "32tyvrd"

accountcity = "jodhpur";

// accountId = 135      // not allowed

accountemail = "raj@gmail.com";
accountpassword = "231874";
accountcity = "jaipur";

let accountstate;

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountemail, accountpassword, accountcity, accountstate]);

