
import {pipe} from 'lodash/fp';
import {produce} from "immer";


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

// Object Immutability

const employee ={name:"Harry",age:22,company:{country:"Canada",city:"Toronto"}};
// const newEmployee= Object.assign({},employee,{name:"Martin"})
// const newEmployee1={
//     ...employee,
//     name:"Riya",
//     company:{...employee.company,city:"Calgary"}
// }

const newEmployee = produce(employee,(draftState)=>{
    draftState.name="Martin",
    draftState.company.city="Calgary"
})
console.log(employee);
console.log(newEmployee);
// console.log(newEmployee1);

//array immutability
 const numbers=[10,56,78,20];
 //Adding Items

 const index= numbers.indexOf(78)
 const addedNumbers=[...numbers.slice(0,index),50,...numbers.slice(index)];
 console.log(addedNumbers);

 //Updating Items

 const updated = numbers.map((a)=>(a===20?80:a));
 console.log(updated);

 //Removing Items
 const remove =numbers.filter(a=>a!==78)
 console.log(remove);

 //Excercise
 const book ={
    author:"Robert Kiyosaki",
    book:{
        name: "Rich Dad Poor Dad",
        price: "$8",
        rating: 4.7,
    },
 };
 const arrayOfBooks = ["Book1","Book2","Book3"]

 const newBook = produce(book,(draftState)=>{
    draftState.book.price="$10",
    draftState.book.rating=4.8
})
console.log(newBook);
const newArray = arrayOfBooks.map(book=> book==="Book2"?"Book4":book)
console.log(newArray);