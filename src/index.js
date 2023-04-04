
import {pipe} from 'lodash/fp'

let username = " Harley ";
let message = "Hello " + username.trim() + " Good Morning!";
console.log(message);
const trim = name =>name.trim()
const generateMessage =message => name => `Hello ${name},${message}!`;//this is called currying
const convertToUpper=(name)=>name.toUpperCase();

const newFunc = pipe(trim,convertToUpper,generateMessage("Good Morning!"));
const result = newFunc(username)
console.log(result);

// function multi(a){
//     return function(b){
//         return a * b
//     }
// }
// const multiple = a => b=> a*b
// let result1=multi(2)(5)