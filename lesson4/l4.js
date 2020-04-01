// // let str = '    HELLO world I AM viktor     ';
// //
// // // let indexOf = str.indexOf('L');
// // // let lastIndexOf = str.lastIndexOf('L');
// // //
// // // document.write(indexOf);
// // // document.write('<br>');
// // // document.write(lastIndexOf);
// // //
// // // document.write('<br>');
// // //
// // // let charAt = str.charAt(0);
// // // document.write(charAt);
// // //
// // // document.write('<br>');
// // //
// // // let charCodeAt = str.charCodeAt(2);
// // // document.write(charCodeAt);
// // //
// // // let strConc = str.concat(' JS');
// // //
// // // document.write(strConc);
// // //
// // // document.write('<br>');
// //
// // // let replaced = str.replace('HELLO', 'QQ');
// // // document.write(replaced);
// // //
// // // let sliced = str.slice(2, 6);
// // //
// // // document.write(sliced);
// // //
// // //
// // // let strings = str.split(';');
// // //
// // // let words = ['TEst', 22, true];
// // //
// // //
// // // let omparedWord = words.join(' % ');
// // //
// // // document.write(omparedWord);
// // //
// // // console.log(omparedWord);
// // //
// // // let lower = str.toLowerCase();
// // // let upper = str.toUpperCase();
// // //
// // // let isStartsWithL = str.startsWith('HEO');
// // // let isEndsWithL = str.endsWith('tor');
// // //
// // // document.write(isStartsWithL);
// // // document.write('<br>');
// // // document.write(isEndsWithL);
// // //
// // // console.log(lower);
// // // console.log(upper);
// // //
// // //
// // // let b = str.includes('L');
// // //
// // // document.write(b)
// //
// // let s = str.trim();
// //
// // console.log(s);
// // console.log(str);
//
//
// // /// FUNCTIONS !
// // function myFistFunction(smth) {
// //     document.write('I AM FROM FUNCTION  ' + smth);
// //     document.write('<br>');
// // }
// //
// // myFistFunction('HELLO 2');
// //
// // myFistFunction('hello');
// // myFistFunction(222);
// // myFistFunction(true);
// // myFistFunction([1,23,4,5]);
// // myFistFunction();
// //
// // // const pi = 3.14;
// // // pi = 3;
// // //
// // // let e = 2.17;
// // // e  = 2.71;
// //
// //
// // {
// //     let x = 22;
// //     var z = 33
// // }
// //
// //
// // const array = [1,2]
// //
// // for (var i = 0; i < array.length; i++) {
// //     const arrayElement = array[i];
// // }
// //
// //
// // if (22 > 10) {
// //     var o = 0
// // }
// //
// // console.log(i);
// // console.log(o);
// //
// //
// // function scoped() {
// //     var iii = 111
// // }
// //
// // console.log(iii);
// //
// //
// // // console.log(x);
//
// //// hoisting
//
// // console.log(x);
// //
// // let x = 22;
// //
// // hosted();
// //
// // function hosted() {
// //     document.write('I AM FUCN')
// // }
// //
// // hosted();
// //
// //
// // declared()
// //
// // function declared() {
// //
// // }
// //
// // expressed();
// //
// // let expressed = function () {
// //
// // }
//
//
// // let arrow = (test, age, name) => {
// //     document.write(`Hello my name is ${name}, and I am ${age}, ${test}`);
// //     document.write('<br>');
// // };
// //
// // arrow('HELLO', 17, 'Viktor')
// // arrow('222', 18, 'Taras')
// // arrow(true, 90, 'Yevgen')
// // arrow(17, 66, 'SERG')
//
// // function arg() {
// //
// //     for (let i = 0; i < arguments.length; i++) {
// //         const argument = arguments[i];
// //         console.log(argument);
// //     }
// //     console.log('______________________________');
// // }
// //
// // arg(17, true, 'TEST', 'Roman+Mac', null);
// // arg(17, true, 'TEST', 'Roman+Mac', null, 17, true, 'TEST', 'Roman+Mac', null, 17, true, 'TEST', 'Roman+Mac', null);
// // arg(22);
//
//
// // (() => {
// //     document.write('I AM SELF INVOKE')
// // })();
//
//
// //
// // function calculator(action, x, y) {
// //     if (action === '+') {
// //         sumator(x, y)
// //     }
// //
// //     if (action === '-') {
// //         vidnimator(x, y)
// //     }
// // }
// //
// // function sumator(a, b) {
// //     console.log(a + b)
// // }
// //
// // function vidnimator(a ,b) {
// //     console.log(a - b)
// // }
// //
// // calculator('-', 10, 5);
//
//
// // function someBigF(x) {
// //
// //     function someSmallF() {
// //         console.log(x);
// //     }
// //
// //     function small2() {
// //         console.log(x + " is small");
// //     }
// //
// //
// //     if (x > 10) {
// //         someSmallF();
// //     }
// //
// //     if (x < 10) {
// //         small2()
// //     }
// //
// // }
// // small2()
// // someBigF(25)
//
//
// function sumator(a, b) {
//     console.log(a + b);
//
//     if (a + b < 5) {
//         return `Sum is ${a + b}`;
//     } else {
//         return 17;
//     }
//
// }
//
// let s = sumator(120, 5);
// document.write(s)


// let array = [1,23,9,4,66,0];
//
// function recursator(array, i) {
//     if (i < array.length) {
//         console.log(array[i]);
//         recursator(array, ++i);
//     }
// }
//
// recursator(array, 0);

