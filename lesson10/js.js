let money = 0;

function clearHouse(isJobDone) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isJobDone) {
                money = 500;
                resolve(money);
            } else {
                reject('ERRRRRRRRRRR');
            }
        }, 2000);
    })
}

function buyJeans(reward) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (reward < 200) {
                reject('WRONG0. I have just ' + reward);
            } else {
                reward = reward - 200
                resolve(reward);
            }
        }, 1000)
    })
}

function goEat(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money < 50) {
                reject('WRONG0. I have just ' + money);
            } else {
                money = money - 50
                resolve(money);
            }
        }, 1000)
    })
}


// async function someAsyncFun() {
//   let reward = 0
//
//   try {
//     reward = await clearHouse(false);
//   } catch (err) {
//     console.log(err);
//     return
//   }
//
//     console.log('CLEAR HOUSE IS DONE ' + reward);
//
//   try {
//     reward = await buyJeans(reward);
//   } catch (e) {
//     console.log(e);
//     return;
//   }
//
//     console.log('BUY JEANS IS DONE');
//
//   try {
//     reward = await goEat(reward);
//   } catch (e) {
//     console.log(e);
//   }
//     console.log('EAT IS DONE');
//
//     console.log(reward);
//
//
//
// }
//
// someAsyncFun()

// async function someAsyncFun() {
//     try {
//         let reward = await clearHouse(false);
//
//         console.log('CLEAR HOUSE IS DONE ' + reward);
//
//         const change = await buyJeans(reward);
//
//         console.log('BUY JEANS IS DONE');
//
//         let moneyLeft = await goEat(change);
//         console.log('EAT IS DONE');
//
//         console.log(moneyLeft);
//
//     } catch (err) {
//         console.log(err);
//     }
// }
//
// someAsyncFun()

// fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
//     .then(value => {
//         return value.json()
//     })
//     .then(json => {
//         console.log(json);
//
//         json.forEach(({ccy, base_ccy, buy}) => {
//             document.write(`${ccy} - ${base_ccy}: ${buy}`)
//             document.write(`<br>`)
//
//         })
//     })

// let viktor = {
//     name: 'Viktor',
//     age: 24,
//     payment: 1000000,
//     possition: 'Middle'
// }
// let dimas = {
//     name: 'Dimas',
//     age: 27,
//     payment: 33333,
//     possition: 'Senior'
//
// }
// let olga = {
//     name: 'Olha',
//     age: 3,
//     payment: 1111111,
//     possition: 'Junior'
// }
//
// // function sayHello() {
// //     console.log(this.name + " say hello to u")
// //     console.log(this)
// // }
// //
// // sayHello.call(viktor)
// //
// // sayHello.apply(dimas)
// //
// // let sayHello1 = sayHello.bind(olga);
// //
// // sayHello1()
// function changePayment(chnageRate, newPosition) {
//     this.payment += chnageRate
//     this.possition = newPosition
// }
//
// changePayment.call(olga, 1000, 'Lead')
// console.log(olga);
//
// changePayment.apply(dimas, [-500, 'midlde'])
// console.log(dimas);
//
//
// let changePayment1 = changePayment.bind(viktor, 99999999, 'GOD');
// changePayment1()
// changePayment1()
//
// console.log(viktor);


function closure() {
    let name = 'Viktor';
    let age = 22;

    function getName() {
        return name;
    }

    function getAge() {
        return age;
    }

    function setAge(newAge) {
        if (newAge > age) {
            age = newAge
        }
    }

    return {
        getAge,
        getName,
        setAge
    }
}

let firstUser = closure();

let age = firstUser.getAge();
console.log(age);

firstUser.setAge(8)

let newAge = firstUser.getAge();

console.log(newAge);


let secondUser = closure();

// let seconDage = secondUser.getAge();
//
// console.log(seconDage);


function counter() {
    let x = 0;

    function plusator() {
        x++;
        console.log(x);
    }

    return {
        plusator
    }
}


let z = counter()

z.plusator()
z.plusator()
z.plusator()
z.plusator()
z.plusator()
z.plusator()
z.plusator()

console.log('____________________');

let o = counter();

o.plusator();
o.plusator();
o.plusator();
o.plusator();
o.plusator();
o.plusator();
o.plusator();
o.plusator();
o.plusator();

console.log(z.plusator.toString());

console.log('____________________');

counter().plusator();
counter().plusator();
counter().plusator();
counter().plusator();
counter().plusator();
counter().plusator();
counter().plusator();
counter().plusator();
counter().plusator();


((word) => {
    console.log('SELF INVOKE' + word);
})(' TEST ')
