const {userService} = require('../services')

module.exports = async () => {
  let users = await userService.findAll();

  console.log(users.length);
}