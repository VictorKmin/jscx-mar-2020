const myVariable = 'mar-2020';

// exports.someVar = myVariable;

exports.getUser = () => {
  console.log(3333);
}

function createUser() {
  console.log(222);
}

createUser()


console.log('_____________');
console.log(__dirname);
console.log('_____________');

global.name = 'Viktor'


module.exports = {
  createUser
}
