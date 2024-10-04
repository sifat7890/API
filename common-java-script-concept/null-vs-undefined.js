/**
 * 8 ways get undefined:
 * 1:Variable that is not initialized will give undefined
 * 2:function with no return
 * 3:Parameter that is not passed will be undefined
 * 4:If return has nothing on the right side will return undefined
 * 5:Property that doesn't exists on an object will give you undefined
 * 6:Accessing array elements outside of the index range
 * 7:Deleting an element inside an array 
 * 8:Set a value directly to undefined
 */

let first;
console.log(first);


function second(a, b) {
    const total = a + b;
}
const result = second();
console.log(result);

function third(a, b, c, d) {
    const total = a + b + c + d;
    console.log(a, b, c, d);
}
third(2, 3)


function noNegative(a, b) {
    if (a < 0 || b < 0) {
        return
    }
    return a + b;
}

const total1 = noNegative(2, -5);
console.log(total1);


const fourth = { id: 2, name: 'Sifat', age: 22 };
console.log(fourth.name, fourth.salary);


const sixth = [4,55,1,36,44,12];
console.log(sixth.splice(0,1,33,77));

console.log(sixth[1],sixth[6],sixth[99]);
console.log(sixth);

const seventh = undefined;
console.log(seventh);

const eighth = null;
const data = {results:[],updated:null};
console.log(data);

