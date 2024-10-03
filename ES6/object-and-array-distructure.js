// normal object 
// const student={
//     name:'sifat',
//     age:22,
//     phone:'0132346985',
//     money:12122154545
// }

// const phone = student.phone;
// const age = student.age;
// console.log(phone);
// console.log(age);


// object destructure
const student = {
    name: 'sifat',
    age: 22,
    phone: '0132346985',
    money: 12122154545
}
// use property mname as a variable that contains the property value
// student.nationality ='Bangladeshi'
// console.log(student);
const { phone, age: boyos } = student
console.log(phone, boyos);

const {age,z,...others}={x:2,y:6,z:4,name:'omar',age:33};
console.log(age,z,others);

// array destructure
const numbers = [45, 99];
const [first, second] = numbers
const [x, y] = [12, 66];
console.log(x, y);

function doubleThem(a, b) {
    return [a * 2, b * 2];
}
const [ first1 , second2 ] = doubleThem(5, 6);
console.log(first1, second2);
