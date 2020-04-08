// // let numbers = [11, -1, 12, 45, 0, [0, 1, ['TEST', 'RRR', [{name: 'Kari'}]]]];
// // let numbers = [11, -1, 12, 45, 10];
// // let numbers = ['11', '-1', '12', '45', '0', '2692', '333333333'];
// // let numbers = [
// //     {name: 'Dima', age: 10},
// //     {name: 'Nastya', age: 22},
// //     {name: 'Volodya', age: 19},
// //     {name: 'Yarko', age: 39},
// //     {name: 'Yevhen', age: 14},
// //     {name: 'Taras', age: 44}
// // ];
// // let sort = numbers.sort((a, b) => {
// //     if (a < b) {
// //         return -1
// //     } else {
// //         return 1
// //     }
// // });
// //
// // console.log(sort);
// //
// //
// // let gtTen = numbers.filter((number) => number % 2 === 0);
// //
// // console.log(gtTen);
// //
// //
// // numbers.forEach((value, index, array) => {
// //     if (index % 2 === 0) {
// //         return
// //     }
// //
// //     console.log(value);
// // });
// //
// // let strings = numbers.map((value, index) => {
// //     value.id = index + 1;
// //     return value;
// // });
// // console.log(strings);
// //
// // let userN = numbers.find(value => {
// //     return value.name.startsWith('N')
// // });
// // let userN = numbers.find(value => value > 0);
// //
// // console.log(userN);
// // let number = numbers.findIndex(value => value.name.length > 5);
// //
// // console.log(number);
// //
// // let reverse = numbers.reverse();
// // console.log(reverse);
// //
// // let flat = numbers.flat(7);
// // console.log(flat);
// //
// // let b = numbers.some(value => value < -10);
// //
// // let b1 = numbers.every(value => value < 100);
// // console.log(b1);
// // let number = numbers.reduce((previousValue, currentValue) => {
// //     previousValue.car = true;
// //     currentValue.car = true;
// //
// //     if (currentValue.age > 18) {
// //         return currentValue
// //     } else {
// //         return previousValue
// //     }
// // });
// // console.log(number);
// //
// // function clearHouse(isJobDone, cb) {
// //     if (isJobDone) {
// //         cb(null, 200);
// //     } else {
// //         cb('Clear house first!', null)
// //     }
// // }
// //
// // clearHouse(
// //     true,
// //     rewardGetter
// // );
// //
// //
// // function rewardGetter(err, reward) {
// //     if (err) {
// //         console.log(`Something wrong. ${err}`)
// //     } else {
// //         console.log(`Hooray I got ${reward}`)
// //     }
// // }
// //
// // Array.prototype.myPrint = function () {
// //     console.log(this);
// // };
// //
// // [1, 2, 3, 4].myPrint();
// //
// // Array.prototype.evenLogger = function () {
// //     this.forEach(el => {
// //         if (el % 2 === 0) {
// //             console.log(el);
// //         }
// //     })
// //
// //     return this[0]
// // };
// //
// //
// // let numbers = [11, -1, 12, 45, 10];
// //
// // let number = numbers.evenLogger();
// //
// // console.log('number');
// // console.log(number);
// // console.log('number');
//
//
// // function Animal(name, color) {
// //     this.name = name;
// //     this.color = color;
// //
// //     // this.run = function () {
// //     //     console.log('run');
// //     // }
// // }
// //
// // Animal.prototype.run = function () {
// //     console.log('run');
// // };
// //
// // function Hamster(name, color, house) {
// //     this.name = name;
// //     this.color = color;
// //     this.house = house;
// // }
// //
// // // Hamster.prototype = Animal.prototype;
// // // Hamster.prototype.__proto__ = Animal.prototype;
// // Hamster.prototype = Object.create(Animal.prototype);
// //
// // Hamster.prototype.run = function () {
// //     console.log(222222);
// // }
// //
// // let x = new Animal('x', 'red');
// // let hamster = new Hamster('x', 'red', 2);
// //
// //
// // x.run()
// // hamster.run()
//
//
//
// function Hamster(name) {
//     this.name = name;
//     // this.stomacth = [];
// }
//
// Hamster.prototype.stomacth = [];
//
// Hamster.prototype.findFood = function (eat) {
//     this.stomacth.push(eat)
// };
//
// let Scothc = new Hamster('Scoth');
// let Lilka = new Hamster('Lilka');
//
// Scothc.findFood('Yabko');
// Scothc.findFood('Gruska');
//
// console.log(Scothc.stomacth, 'S');
// console.log(Lilka.stomacth, 'L');
//
//
//
// // let arr = [1, 2, 4, 9, 0];
//
// // let numbers = arr.map(value => value * 2);
// // console.log(numbers);
// // console.log(arr);
//
// let arr = [
//     {name: 'Alex', password: 1235},
//     {name: 'Kolya', password: 9876},
//     {name: 'Anrii', password: 'fsdfsfsdf'},
//     {name: 'Zaets', password: '6565665  '},
// ];
// //
// // let numbers = arr.map(num => {
// //     let rnd = Math.random();
// //
// //     if (rnd > .5) {
// //         num.city = 'Lviv';
// //     } else {
// //         num.city = 'Kyiv';
// //     }
// //
// //     return num
// // });
// //
// // console.log(arr);
// // console.log(numbers);
