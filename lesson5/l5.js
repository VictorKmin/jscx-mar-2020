// // let user = {
// //     name: 'Dimas',
// //     age: 22,
// //     greeting: function () {
// //         document.write(`Hello. My name is ${this.name} `)
// //     },
// //
// //     run: (speed = 0) => {
// //         document.write(`I can run with ${speed}`)
// //
// //     }
// // };
// //
// //
// // let car = {
// //     model: 3,
// //     getInfo: () => {
// //         console.log(this)
// //     }
// // };
// //
// // user.greeting();
// // user.run();
// //
// //
// // car.getInfo()
//
// // function User(name, age) {
// //     this.name = name;
// //     this.age = age;
// //
// //     this.greeting = function () {
// //         document.write(`HELLO MY NAME IS ${this.name}`)
// //     }
// // }
// //
// // let dima = new User('Oleg', 68);
// // let viktor = new User('Viktor', 23);
// //
// //
// // console.log(dima);
// // console.log(viktor);
//
//
// // function Car(color, inColor, speed = 50) {
// //     this.color = color;
// //     this.inColor = inColor;
// //     this.speed = speed;
// //
// //     this.ride = function () {
// //         document.write(`I am riding ${this.speed} km/h`)
// //     }
// // }
// //
// // let mazeratti = new Car('Silver', 'pink', 200);
// // let vaz = new Car('green', 'white', 20);
// //
// // mazeratti.speed = 9999;
// //
// // mazeratti.ride()
// // document.write(`<br>`)
// // vaz.ride()
// //
// // console.log(mazeratti);
// // console.log(vaz);
//
//
// class House {
//     constructor(isPrivate, square, roomsCount) {
//         this.isPrivate = isPrivate;
//         this.square = square;
//         this.roomsCount = roomsCount;
//         this.buildProgress = 0;
//     }
//
//     build() {
//         if (this.buildProgress >= 100) {
//             document.write(`Building is done`);
//             document.write(`<br>`)
//             return
//         }
//
//         if (this.isPrivate) {
//             document.write(`My house in progress. I am so happy`);
//             document.write(`<br>`);
//             this.buildProgress += 20;
//
//         } else {
//             document.write(`Another ugly house. Fi`);
//             document.write(`<br>`)
//             this.buildProgress += 20;
//         }
//     }
//
//     getBuildProgress() {
//         if (this.isPrivate) {
//             document.write(`My own progress is ${this.buildProgress}%`)
//         } else {
//             document.write(`Developers progress is ${this.buildProgress}%`)
//         }
//         document.write(`<br>`)
//     }
// }
//
// let myHouse = new House(true, 150, 4);
// let someHouse = new House(false, 32, 1);
//
// myHouse.build();
// myHouse.build();
// myHouse.build();
// myHouse.build();
// myHouse.build();
//
// someHouse.build();
//
// myHouse.getBuildProgress();
// someHouse.getBuildProgress();
//
//
// console.log(myHouse);


class AbstractCar {
    constructor(wheelsCount, chair, power) {
        this.wheelsCount = wheelsCount;
        this.chair = chair;
        this.power = power;
    }

    ride(how) {
        const speed = this.power / 4;

        document.write(`I have ${this.power} power and ${speed} speed ${how}`)
    }
}

class SportCar extends AbstractCar {
    constructor(wheelsCount, chair, power, color) {
        super(wheelsCount, chair, power);
        this.color = color;
    }

    vzuuh() {
        document.write('Vzuuuh')
    }
}

class HyperCar extends SportCar {
    constructor(wheelsCount, power) {
        super(wheelsCount, power);
    }

    rideFast() {
        document.write('SUUUUPER FAAASST')
    }
}

let ferrari = new SportCar(4, 2, 250, 'red');
ferrari.ride('ZZZZZZ');

let tesla = new HyperCar(6, 999);
tesla.ride(2222);


let obj = {
    name: 'Dima',
    age: 90,
    sayHello: function () {
        console.log('Hello');
    }
};

let silnaINezalezna = {
    name: 'Dorota',
    cat: {
        murka: {
            name: 'Mur'
        },
        ivan: {
            name: 'Ivan the cat'
        }
    },
    car: false
};

// let objCopy = Object.assign(silnaINezalezna, obj, {covid: true});

let silnaCopy = Object.assign({}, silnaINezalezna);

silnaCopy.cat.murka = 'MURO4KA';
silnaCopy.name = 'Agneshka';
console.log(silnaINezalezna);
console.log(silnaCopy);

// https://habr.com/ru/post/148015/
