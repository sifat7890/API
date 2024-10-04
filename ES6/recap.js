// // template string , multiple line string , dynamic string 

const first = 'omar ali'
const last = 'Sifat'
const name = first + ' ' + last;
console.log(name);


const a = 20;
const b = 10;
const result = 'The sum of ' + a + ' and ' + b + ' is ' + (a + b);
console.log(result);

const math = `The sum of ${a} and ${b} is ${a + b}`
console.log(math);

const numbers = [45, 57, 55, 15, 36, 4];
const student1 = {
    name: 'omar ali sifat', age: 22
}
const answer = `The sum of ${numbers[0]} and ${student1.age} is ${numbers[0] + student1.age}`
console.log(answer);

// // ES6----------------------------------------------------
// // Arrow function , multiple parameter , function body

// // 1:Normal function
function add(a, b) {
    const result = a + b;
    return result;
}
const sum = add(5, 90);
console.log(sum);

// // ----------------
function add(a, b) {
    return a + b;
}
const sum2 = add(80, 20);
console.log(sum2);


// function expression
const add2 = function (a, b) {
    return a + b;
}
const sum3 = add2(10,30)
console.log(sum3);


// arrow function
const add3 = (a,b) => a+b;
const sum4 = add3(50,10);
console.log(sum4);


// More arrow and big arrow function

// 1:normal object function
const student = {
    name: 'sifat', age: 22
}
function getAge(person) {
    const myAge = person.age;
    return myAge;

}
const age = getAge(student);
console.log(age);


function getThird(numbers) {
    const number = numbers[2];
    return number;
}
const num = getThird([5, 9, 88, 36, 51]);
console.log(num);



// 2:Arrow object function(single or one parameter)
const getAge = (person) => person.age;
const student2 = { name: 'omar ali sifat', age: 22 };
const age2 = getAge(student2);
console.log(age2);

//------
const getSecond = (numbers) => numbers[1];
const second = getSecond([5, 9, 88, 36, 51]);
console.log(second);


// no parameter
const getPI = () => Math.PI;
console.log(getPI());

// large arrow function
const doMath = (x, y, z) =>{
    const sum = x+y+z;
    const mult = x*y*z;
    const result = sum + mult;
    return result;
}
const theResult = doMath(5,5,5);
console.log(theResult);

// default parameters
function add(a,b=10){
    console.log(a+b);
    
}
add(10);