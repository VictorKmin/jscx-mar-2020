const uuid = require('uuid').v4()
const fs = require('fs-extra').promises
const path = require('path')

const { emailService, userService  } = require('../services');
const { hashPassword } = require('../helpers');
const { WELCOME } = require('../configs/email-action.enum');


module.exports = {
  createUser: async (req, res, next) => {
    try {
      // const {body : user} = req; це як const user = req.body (c)Pasha
      const { body:user, avatar } = req;
      user.password = await hashPassword(user.password);

      let newUser = await userService.create(user);

      if (avatar) {
        const photoDir = `/users/${newUser.id}/photos`;
        const fileExtension = avatar.name.split('.').pop();
        const photoName = `${uuid}.${fileExtension}`;

        await fs.mkdir(path.resolve(process.cwd(), 'public', photoDir), {recursive: true});
        console.log(path.resolve(process.cwd(), 'public', photoDir, photoName));
        await avatar.mv(path.resolve(process.cwd(), 'public', photoDir, photoName));
        newUser = await userService.updateById(newUser.id, {avatar: `${photoDir}/${photoName}`})
      }

      await emailService.sendMail(user.email, WELCOME, {userName: user.email})

      res.json(newUser);
    } catch (e) {
      next(e)
    }
  }
}
