// data access 
const data = [{ id: 1, name: 'sifat', address: 'faridpur' }];
console.log(data[0].address);


const products = {
    count:5000,
    data :[
        {id:1,name:'asus',price:100000},
        {id:2,name:'Msi',price:110000}
    ]
}
console.log(products.data[1].price);


const user = {
    id:5454,
    name:'omar ali sifat',
    address:{
        street:{
            first:'shafipur',
            second:'andarmanik road',
            third:'vision tower'
        },
        city:'Dhaka'
    }
}
const user2 = {
    id:5454,
    name:'omar ali sifat',
    address:{
       
        city:'Faridpur'
    }
}
console.log(user.address.street?.second);
// ? => this sign name is optional chain
console.log(user2.address.street?.second);
