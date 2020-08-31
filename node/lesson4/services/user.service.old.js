let arr = [
  { id: 1, name: "Dima", age: 22 },
  { id: 2, name: "Inna", age: 33 }
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
    const lastUserId = arr[arr.length - 1].id + 1
    arr.push({ id: lastUserId, ...userObject });

    return { id: lastUserId, ...userObject }
  }
}
