const shop = {
    Owner: 'Sifat',
    address: {
        street: 'Andarmanik ar road',
        city: 'Dhaka',
        country: 'Bangladesh'
    },
    products: ['laptop', 'mobile', 'monitor', 'pc'],
    revenue: 600000,
    isOpen: true,
    isNew: false,
}
console.log(shop);
const shopJSON = JSON.stringify(shop); // Stringify convert an object to string 
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON); // Parse convert those string to object
console.log(shopObj);


