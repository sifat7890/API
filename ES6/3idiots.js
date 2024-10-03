//array max 
const max= Math.max(6,23,69,44,56,12);
console.log(max);

// spread operator
const numbers = [3,66,3,5,69,4,8,99,74,2];
const arrayMax = Math.max(...numbers);
console.log(arrayMax);

// spread operator using for copy array
const friends = [4,5,33,66,99];
const friend = friends; //copy
const bondhu = [...friends]; 
friends.push(100);
console.log(bondhu);
console.log(friend);
console.log(friends);

// advanced copy
const number = [...friends, 101];
console.log(number);


