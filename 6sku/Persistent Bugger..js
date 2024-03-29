/*
title:Persistent Bugger.

Description: Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

Examples: For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)

Parameters: a single parameter that will be a number of one or more digits 

Return: a number that represents the number of times you must multiply the digits in num until you reach a single digit

Pseudo Code: create a conditional to evaluate if digits > 1
if true, split digits into 2 
multiply the digits you get between each other 



*/ 

//solution 
function persistence(num) {
    let Bugger = 0;
    while (num.toString().length !== 1) {
      num = num.toString().split("").reduce((a,b)=>a*b);
      Bugger++;
    }
    return Bugger;
 }


 console.log(persistence(39))//,3);
//  console.log(persistence(4))//,0);
//  console.log(persistence(25))//,2);
//  console.log(persistence(999))//,4);

/*
alternative 
function persistence(num) {
   var times = 0;
   
   num = num.toString();
   
   while (num.length > 1) {
     times++;
     num = num.split('').map(Number).reduce((a, b) => a * b).toString();
   }
   
   return times;
}
*/

