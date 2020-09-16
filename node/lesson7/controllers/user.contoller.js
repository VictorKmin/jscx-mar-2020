const { userService } = require('../services');
const { hashPassword } = require('../helpers');


module.exports = {
  createUser: async (req, res) => {
    const user = req.body;
    user.password = await hashPassword(user.password);

    const newUsers = await userService.create(user);

    res.json(newUsers);
  }
}
