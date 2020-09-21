const { emailService, userService  } = require('../services');
const { hashPassword } = require('../helpers');
const { WELCOME } = require('../configs/email-action.enum');


module.exports = {
  createUser: async (req, res) => {
    const user = req.body;
    user.password = await hashPassword(user.password);

    const newUsers = await userService.create(user);

    await emailService.sendMail(user.email, WELCOME, {userName: user.email})

    res.json(newUsers);
  }
}
