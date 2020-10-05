const uuid = require('uuid').v4()
const fs = require('fs-extra').promises
const path = require('path')
const chalk = require('chalk')

const { emailService, userService } = require('../services');
const { hashPassword } = require('../helpers');
const { WELCOME } = require('../configs/email-action.enum');
// const transactionInstance = require('../dataBase/create-transaction');
const { transactionInstance } = require('../dataBase').getInstance();


module.exports = {
  createUser: async (req, res, next) => {
    const transaction = await transactionInstance();
    try {
      // const {body : user} = req; це як const user = req.body (c)Pasha
      const { body: user, avatar } = req;
      user.password = await hashPassword(user.password);

      let newUser = await userService.create(user, transaction);

      if (avatar) {
        const photoDir = `/users/${ newUser.id }/photos`;
        const fileExtension = avatar.name.split('.').pop();
        const photoName = `${ uuid }.${ fileExtension }`;

        await fs.mkdir(path.resolve(process.cwd(), 'public', photoDir), { recursive: true });
        console.log(path.resolve(process.cwd(), 'public', photoDir, photoName));
        await avatar.mv(path.resolve(process.cwd(), 'public', photoDir, photoName));
        newUser = await userService.updateById(newUser.id, { avatar: `${ photoDir }/${ photoName }` }, transaction)
      }

      await emailService.sendMail(user.email, WELCOME, { userName: user.email })

      await transaction.commit();
      console.log(chalk.green('TRANSACTION COMMIT'))
      res.json(newUser);
    } catch (e) {
      console.log(chalk.magenta('TRANSACTION ROLLBACK'));
      await transaction.rollback();
      next(e)
    }
  }
}
