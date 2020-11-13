/* 
Password Validation

Write a program that should check if each password in an array 
contains a valid password (see below for password criteria) and return a
new array with true or false booleans for whether that password was valid or not.

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")
- Passwords must not be any previous password. 

Expected Result:
PasswordValidationResult=  [false, false, false, false, true]

*/
const passwords1 = ["Se%5", "TktE.TJTU", "384#HsHF", "dvyyeyy!5", "tryT3729"]
const passwords2 = ["StUFf27%", "Pl3nty!", "Jai33", "shajsaUA**&&", "Pl3nty!"]
let previousPassword = ["fhD8!yrjj", "ttkTu.wer3", "dvyyeyy!5", "qwbfj76%", "tytT3729.", "384#HsHf" , "Jai33"];


//const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!#$%.*&])(?=.{8,})/;
const regexUp = /[A-Z]/g;
const regexLow = /[a-z]/g;
const regexNum = /[0-9]/g;
const regexSym = /[!#$%.*&]/g;

//const findRegex = element => element.match(regex);
const findLength = element => element.length >= 5;
const findUpperCase = element => element.match(regexUp);
const findLowerCase = element => element.match(regexLow);
const findNumber = element => element.match(regexNum);
const findSymbol = element => element.match(regexSym);
const isEqualEx = element => previousPassword.indexOf(element) === -1;

console.log(isEqualEx(passwords1[3]));

function validatePasswords(arr) {
validateResult=[];
    for (i = 0 ; i < arr.length ; i++) {
       if(findLength(arr[i]) 
         && findUpperCase(arr[i]) && findLowerCase(arr[i]) && findNumber(arr[i]) && findSymbol(arr[i]) 
        //&& findRegex(arr[i])
        && isEqualEx(arr[i])){
          console.log('hello')
        validateResult.push(true)
      } else {
        validateResult.push(false)
      }
    }
return validateResult
}

console.log(validatePasswords(passwords1));
console.log(validatePasswords(passwords2));






/* ======= TESTS - DO NOT MODIFY THIS PART===== */

function test(test_name, actual, expected) {
    let status;
    for (i=0; i<actual.length; i++){
      if (actual[i] === expected[i]) {
        status = "PASSED";
      } else {
        status = `FAILED: expected: ${expected} but your function returned: ${actual}`;
      }
    }
    console.log(`${test_name}: ${status}`);
}

test(
  "validatePasswords function works - case 1",
  validatePasswords(passwords1),
  [false, false, true, false, false]
 );

test(
  "validatePasswords function works - case 2",
  validatePasswords(passwords2),
  [true, true, false, false, true]
);
