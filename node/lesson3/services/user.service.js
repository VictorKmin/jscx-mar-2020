let arr = [
  { name: "Dima", age: 22 },
  { name: "Inna", age: 33 }
];

module.exports = {
  fetchAll: () => {
    return arr;
  },

  getUserByName: (name) => {
    return arr.find(u => u.name === name)
  },

  removeUserByName: (name) => {
    return arr.find(u => u.name === name)
  },

  create: (userObject) => {
    arr.push(userObject)
  }
}
