// foreach
const numbers = [54, 5, 6, 71];
const result = numbers.forEach(n => n * 2)
console.log(result);

// filter
const players = [75, 69, 60, 71, 61];
// const selected = players.filter(p => p > 50);
const selected = players.filter(p => p % 2 === 1);
console.log(selected);


const friends = ['asif', 'karim', 'rahim', 'sakib'];
const oddFriends = friends.filter(friend => friend.length > 4);
console.log(oddFriends);


// find
const player = [75, 69, 60, 71, 61, 80];
const select = player.find(player => player > 70);
console.log(select);

// reduce 
const number = [2, 4, 6, 7, 9, 8];
const total = numbers.reduce((previous, current) => previous + current, 0);
console.log(total);


// recap(map, foreach,filter,find,reduce)
const products = [
    { id: 1, name: 'lenovo', price: 65000 },
    { id: 2, name: 'asus', price: 49000 },
    { id: 3, name: 'hp', price: 60000 },
    { id: 4, name: 'mac', price: 150000 }
]
// map
const names = products.map(product => product.name);
console.log(names);
const prices = products.map(product => product.price);
console.log(prices);

// foreach
products.forEach(product => console.log(product.id));

// filter
const expensive = products.filter(p => p.price > 50000);
console.log(expensive);

// find 
const affordable = products.find(p => p.price > 50000);
console.log(affordable);

// reduce
const total2 = products.reduce((acum, current) => acum + current.price, 0);
console.log(total2);
