const accountId = 144553
let accountEmail = "aman@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"

//accountId = 2//not allowed
accountEmail = "shukla@am.com"
accountPassword = "122111"
accountCity = "delhi"

console.log(accountId);
/* 
Prefer not to use var because of issue in block scope and function scope 

*/

console.table([accountEmail, accountPassword, accountCity]);