function myFunction() {
    // Function implementation
    console.log("Hello, World!");
    return;
}
myFunction();


function add(a, b,c=0,d=0) {
    const sum = a + b + c + d;
    console.log(sum);
}
add(5, 10); // Output: 15
add(5, 10, 2); // Output: 17

function addNumbers(...numbers) {
    let sum = 0;
    for(const n of numbers) {
        sum += n;
    }
    console.log(sum);
}
addNumbers(5, 10); // Output: 15
addNumbers(5, 10, 2,20,40,50); // Output: 127


const arrowFun = ()=>{
    console.log("Arrow Function")
}
arrowFun();

const arrow=()=> console.log("hi")

const a = para => console.log(para)
a("hi")

const greeting = ()=> ({name: "Omar", age: 21});
console.log(greeting());


// IIFE
(function iief(){
    console.log("IIFE");
})();

(()=>{
    console.log("hi");
})();


// callback and H order function
function callback(){
    console.log("i am callback");
}
function hOrder(callbackFun){
    console.log("I am Higher Order Function");
    callbackFun();
}
hOrder(callback);

//
function sub(value){
    return function execute(num){
        return num*value;
    }
}
const val = sub(20)(5);
console.log(val);