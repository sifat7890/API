const products = [
    { id: 1, name: 'lenovo', price: 65000 },
    { id: 2, name: 'asus', price: 49000 },
    { id: 3, name: 'hp', price: 60000 },
    { id: 4, name: 'mac', price: 150000 }
]

// has some properties,method
class product {
    country = 'Bangladesh';
    constructor(name) {
        this.name = name;
    }
    speak(talk) {
        console.log(`talking about ${talk}`);

    }
}
const lenovo = new product('Lenovo');
// console.log(lenovo);
// lenovo.speak('legend always want to go to monaco');


class Teacher {

    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }

    lecture(sub) {
        console.log(`Sir is teaching about ${sub}`);

    }
}
const tapan = new Teacher('Tapan sie', 'physics');
console.log(tapan);
tapan.lecture('Angular momentum')


const nazmul = new Teacher('Nazmul sir', 'math');
console.log(nazmul);
nazmul.lecture('Calculus')
