// setTimeout(() => {
//   console.log(2);
// }, 0);
//
// document.getElementById('btn')
// .onclick = () => {
//   console.log('CLOCK');
// }
//
// let i =0
// while (i < 999999999) {
//   i++
// }
//
// console.log(1);
//
// console.log(3);


// let money = 0;

// function clearHouse(isJobDone) {
//   setTimeout(() => {
//     if (isJobDone) {
//       money = 500;
//       console.log(money + "!!!!!!!!!!!!!!!!!!!!!!");
//     } else {
//       console.log('ERRRRRRRRRRR');
//     }
//   }, 2000);
// }
//
// function buyJeans(reward) {
//   setTimeout(() => {
//     if (reward < 200) {
//       console.log('WRONG0. I have just ' + reward);
//     } else {
//       console.log('GOOD.');
//     }
//   }, 5000)
// }

// function clearHouse(isJobDone, cb) {
//   setTimeout(() => {
//     if (isJobDone) {
//       money = 500;
//       cb(null, money);
//     } else {
//       cb('ERRRRRRRRRRR');
//     }
//   }, 2000);
// }
//
// function buyJeans(reward, cb) {
//   setTimeout(() => {
//     if (reward < 200) {
//       cb('WRONG0. I have just ' + reward);
//     } else {
//       reward = reward - 200
//       cb(null, reward);
//     }
//   }, 1000)
// }
//
// function goEat(money, cb) {
//   setTimeout(() => {
//     if (money < 50) {
//       cb('WRONG0. I have just ' + money);
//     } else {
//       money = money - 50
//       cb(null, money);
//     }
//   }, 1000)
// }
//
// clearHouse(true, (err, reward) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('good job. You have ' + reward);
//
//     buyJeans(reward, (err, change) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log('Good jeans, bro');
//         console.log('GYou have ' + change);
//
//         goEat(change , (err, data) => {
//           console.log('Pm nom nom');
//           console.log(data);
//         })
//       }
//     })
//   }
// })


// let money = 0;
//
// function clearHouse(isJobDone) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isJobDone) {
//         money = 500;
//         resolve(money);
//       } else {
//         reject('ERRRRRRRRRRR');
//       }
//     }, 2000);
//   })
// }
//
// function buyJeans(reward) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (reward < 200) {
//         reject('WRONG0. I have just ' + reward);
//       } else {
//         reward = reward - 200
//         resolve(reward);
//       }
//     }, 1000)
//   })
// }
//
// function goEat(money) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (money < 50) {
//         reject('WRONG0. I have just ' + money);
//       } else {
//         money = money - 50
//         resolve(money);
//       }
//     }, 1000)
//
//   })
// }
//
// clearHouse(true)
//   .then(value => {
//     console.log('HOUSE');
//     console.log(value);
//
//     return goEat(value)
//   })
//   .then(reward => {
//     console.log('EAT');
//     console.log(reward);
//
//     return buyJeans(reward)
//   })
//   .then(value => {
//     console.log('JEANS');
//     console.log(value);
//   })
//   .catch(reason => {
//     console.log(reason);
//   })
// // .finally(() => {
// //   console.log('RRRR');
// // })


// function one() {
//   setTimeout(() => {
//     return new Promise(resolve => {
//       resolve(1)
//     })
//   }, 3000)
// }
//
//
// function two() {
//   setTimeout(() => {
//     return new Promise(resolve => {
//       resolve(2)
//     })
//   }, 2000)
// }
//
//
// function three() {
//   setTimeout(() => {
//     return new Promise(resolve => {
//       resolve(3)
//     })
//   }, 1000)
// }

let one = Promise.resolve(1)

let two = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(2)
  }, 3000)
})

let three = new Promise((resolve) => {
  setTimeout(() => {
    resolve(3)
  }, 1000)
})

//
// Promise.all([ three, one, two.catch(e => {}) ])
//   .then(value => {
//     console.log(value);
//   })
//   .catch(e => {
//     console.log(e);
//   })
Promise.race([ three, one, two.catch(e => {}) ])
  .then(value => {
    console.log(value);
  })
  .catch(e => {
    console.log(e);
  })
