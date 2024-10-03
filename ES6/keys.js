const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
}

const keys = Object.keys(glass);
console.log(keys);
// [ 'name', 'color', 'price', 'isCleaned' ]

const values = Object.values(glass);
console.log(values);
// [ 'glass', 'golden', 12, true ]

const entries = Object.entries(glass);
console.log(entries);
// [
//     [ 'name', 'glass' ],
//     [ 'color', 'golden' ],
//     [ 'price', 12 ],
//     [ 'isCleaned', true ]
//   ]


// delete glass.isCleaned;
// console.log(glass);


const { isCleaned, ...shortGlass } = glass;
// console.log(shortGlass);
// { name: 'glass', color: 'golden', price: 12 }


// freeze
// Object.freeze(glass);
glass.source = 'Bangladesh';
glass.price = 5000;
// delete glass.name;
console.log(glass);


// seal => modified
Object.seal(glass);
glass.source = 'Bangladesh';
glass.price = 6000;
delete glass.name;
console.log(glass);
