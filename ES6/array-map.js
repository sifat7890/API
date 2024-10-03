const numbers = [4, 5, 6, 7, 8, 9]

const doubled = [];
for (const num of numbers) {
    const double = num * 2;
    doubled.push(double);
}
console.log(doubled);


function doubleIt(num) {
    console.log('num now', num);
    return num * 2;

}
const result = numbers.map(doubleIt)
console.log(result);

const double = n => n * 2; //using arrow function in array map 
const output = numbers.map(double)
console.log(output);

const output2 = numbers.map(n => n * 2); //more shorten arrow function using in array
console.log(output2);


// using arrow function in array map
const number = [12, 55, 33, 64, 2];
const double2 = number.map(num => num * 2);
console.log(double2);
const addedFive = number.map(num => num + 5);
console.log(addedFive);
const divideByHalf = number.map(num => num / 2);
console.log(divideByHalf);

const friends = ['asif', 'karim', 'rahim', 'sakib'];
const lengths = friends.map(frnd => frnd.length);
const firstLetter = friends.map(frnd => frnd[0]);
console.log(lengths, firstLetter);



