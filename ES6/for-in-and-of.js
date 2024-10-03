// for of use on array or string not in object
// for in use in object
const numbers = [1,2,3,4,5];
for(const num of numbers){
    console.log(num);
    
}

const name = 'omar ali sifat';
for(const char of name){
    console.log(char);
    
}

const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
}

for(const key in glass){
const value =glass[key]

    console.log(key,value);

}


// optional

const keys = Object.keys(glass);
const values = Object.values(glass);
console.log(keys,values);


for(const key of keys){
    const value =glass[key]
    console.log(key,value);
    
}
