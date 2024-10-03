// inheritance and using this keyword

class vehicle {
    constructor(name, price) {
        this.name = name;
        this.price = price;

    }
    move() {
        console.log(`Bangladesh bus name ${this.name} and the price is ${this.price}`);

    }
}
// const gari = new vehicle('hanif', '2030303');
// console.log(gari);
// gari.move();


class Bus extends vehicle {
    constructor(name, price, seat, ticketPrice) {
        super(name, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
    bus(){
        console.log(`Dhaka theke coxs bazar bus name ${this.name} taka ${this.ticketPrice} seat no ${this.seat}`);
        
    }

}
const bus1 = new Bus('hanif','','F4' ,'1500',);
bus1.bus()

class truck extends vehicle {
    constructor(name, price, load) {
        super(name, price),
            this.load = load;
    }
}