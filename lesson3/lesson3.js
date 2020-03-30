// let user = {
//     name: 'Diana',
//     age: 46,
//     car: true,
//     son: {
//         name: 'Pavlo',
//         age: 22
//     }
// };
// //
// // let keys = Object.keys(user);
// // let val = Object.values(user);
// //
// // console.log(keys);
// // console.log(val);
// //
// //
// // let arr = [true, 22, 'Hello', 12, 'TEST'];
// //
// // // for (let val of arr) { // val = arr[i]
// // //     document.write(val);
// // //     document.write('<hr>')
// // // }
// //
// //
// // for (let ind in arr) {
// //     document.write(ind);
// //     document.write('<hr>')
// // }
// //
// // for (let ind in user) {
// //     document.write(ind);
// //     document.write('<hr>')
// // }
// //
// // for (let ind of arr) {
// //     document.write(ind);
// //     document.write('<hr>')
// // }
//
// // // REF VS PRIMITIVE
// // let a = 'HELLO';
// //
// // let b = a;
// //
// // a = 'TEST';
// // document.write(b);
// // document.write('<hr>');
// // document.write(a);
//
// let dyadko = user;
//
// dyadko.name = 'Сергій';
//
// console.log(dyadko);
// console.log(user);


// // JSON - JavaScript Object Notation
// let user = {
//     name: 'Diana',
//     man: undefined,
//     // THIS IS COMMENT !!
//     payment: NaN,
//     age: 46,
//     car: true,
//     son: {
//         girl: {
//             age: 18,
//             phone: null
//         },
//         name: 'Pavlo',
//         age: 22
//     }
// };
//
// let jsonUser = JSON.stringify(user);
//
// // console.log(typeof jsonUser);
// document.write(jsonUser);
// document.write('<hr>');
// let parsedUser = JSON.parse(jsonUser);
//
// parsedUser.name = 'Max';
//
// console.log(parsedUser);
// console.log(parsedUser.son.girl.age);
// console.log(user);
//
// document.write('<hr>');
// document.write(user.age);

let divka = document.getElementById('divka');

console.log(divka);

// divka.style.backgroundColor = 'yellow';

let red = Math.random() * 255;
let green = Math.random() * 255;
let blue = Math.random() * 255;

divka.style.backgroundColor =
    `rgb(${red}, ${green}, ${blue})`;

let elements = document.getElementsByClassName('xxx');

// for (const el of elements) {
//     el.innerText = 'JSCX-MAR-2020'
// }
for (let i = 0; i < elements.length; i++) {
    elements[i].innerText = `JSCX-MAR-202${i}`
}
console.log(elements);


let divku = document.getElementsByTagName('div');

let smallDivka = document.createElement('div');
smallDivka.style.width = '50px';
smallDivka.style.height = '50px';
smallDivka.style.backgroundColor = 'blue';


divku[0].appendChild(smallDivka);

for (const divkaElement of divku) {
    let smallDivka = document.createElement('b');
    // smallDivka.style.width = '50px';
    // smallDivka.style.height = '50px';
    smallDivka.style.color = 'blue';
    smallDivka.innerText = 'blue';

    divkaElement.appendChild(smallDivka);
}


let xxxElems = document.getElementsByClassName('xxx');

for (let i = 0; i < xxxElems.length; i++) {
    if (i % 2 === 0) {
        xxxElems[i].classList.add('perfect')
    }
}


let students = [
    {name: 'a11', age: 23},
    {name: 'Taras', age: 25},
    {name: 'Volodya', age: 17},
    {name: 'Dasha', age: 16}
];


for (let i = 0; i < students.length; i++) {
    let studentDiv = document.createElement('div');
    studentDiv.style.backgroundColor = 'pink';
    studentDiv.innerHTML = `Hello my name is ${students[i].name} <br> And I am ${students[i].age} <p>`;


    document.body.appendChild(studentDiv)
}
