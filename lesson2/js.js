// // // let str = 'edadsda';
// // // let num = 22;
// // // let bool = true;
// // // let undef = undefined;
// // // let nulll = null;
// // // let obj = {};
// // // let sym = Symbol();
// // //
// // // let xx = null;
// // //
// // // console.log(xx);
// //
// // let arr = [22, true, 17, 'Hello'];
// //
// // // console.log(arr);
// // // document.write(arr)
// //
// // // let names = ['Viktor', 'Sasha', 'Sergii', 'Ivan'];
// // //
// // // document.write(names);
// // // document.write('<br>');
// // // document.write( names[2] );
// // // document.write( names[0] );
// //
// // // let groups = [
// // //     ['jscx'],
// // //     ['jcx', "pcx"]
// // // ];
// // //
// // // console.log(groups[1][0]);
// // //
// // //
// // // let names = ['Viktor', 'Sasha', 'Sergii', 'Ivan'];
// // //
// // // document.write(names);
// // // document.write('<br>');
// // //
// // // // let newUser = prompt('What is your name?');
// // // // names.push(newUser);
// // // // names.unshift(newUser);
// // // // let string = names.pop();
// // // // let string = names.shift();
// // // //
// // // // document.write(string);
// // // //
// // // // names[1] = 'Oleksandr';
// // // //
// // // // document.write('<br>');
// // // //
// // // // document.write(names);
// // // //
// // // // document.write(names.length);
// // // // document.write('<br>');
// // // //
// // // //
// // // // names[95] = 'HELLO'
// // // // document.write(names);
// // // document.write('<br>');
// // //
// // // document.write(names.length);
// // //
// // // document.write('<br>');
// // //
// // // document.write(names[names.length - 1]);
//
// let arr = [22, true, 17, 'Hello'];
//
// let user = {
//     name: 'Viktor',
//     age: 24,
//     car: false,
//     jobs: ['Dev', 'Teacher'],
//     work: {
//         title: "Middle Node.js dev",
//         company: {
//             title: 'ELEKS',
//             street: 'Naukova 7'
//         }
//     }
// };
//
// // // console.log(user);
// // // document.write(user.age);
// // // document.write('<br>');
// // // document.write(user.car);
// // // document.write('<br>');
// // // document.write(user.jobs[0]);
// // document.write('<br>');
// // document.write(user.title);
// //
// // user.girl = 'Karina';
// //
// // console.log(user);
// //
// // delete user.age;
// //
// // console.log(user);
//
// let keys = Object.keys(user);
// let values = Object.values(user);
//
// document.write(keys);
// document.write('<br>');
// document.write(values);
// console.log(keys);
// console.log(values);

let zero = 0;
zero = zero + 1;
zero += 1;
zero++;


// let a = 1;
// let b = a++;
//
// console.log(a);
// console.log(b);

let names = [
    'PC',
    'Ira',
    'Yevhen',
    'a111',
    'Nazar',
    'Taras'
];

for (let i = 0; i < names.length; i += 2) {
    document.write(names[i]);
    document.write('<br>')
}

// let i = 0;
// while (i < names.length) {
//     document.write(names[i]);
//     document.write('<br>');
//     i++
// }

console.log(typeof NaN);
