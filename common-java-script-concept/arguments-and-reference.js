// array like object
function sum(a, b, c) {
    console.log(arguments); //arguments only can use in functions
    const args = [...arguments];
    console.log(args);
    const result = a + b + c;
    return result;

}
// console.log(arguments); //arguments cannot use out side of function

const total = sum(10, 20, 30, 40, 50);
console.log(total);
console.log(sum.length); //.length using after function declared the parameters of function



// primitive types are passed by value but cannot change value in outside
let num1 = 5;
let num2 = 7;
function multiply(a, b) {
    a = 27;
    const result = a * b; 
    return result;
}
console.log(num1);
multiply(num1,num2);
console.log(num1);


// object and array are pass by reference and also changed value in outside
let student1 ={name:'Jalil', Partner:'Borsha'};
let student2 ={name:'Raj',Partner:'Anika'};

function makeMovie(couple1,couple2){
    couple1.name='Ononto';
    couple2.Partner='Mim';
}
console.log(student1,student2);
makeMovie(student1,student2);
console.log(student1,student2);
