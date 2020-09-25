const { getModel } = require('../dataBase').getInstance()

module.exports = {

  create: (userObject, transaction) => {
    const User = getModel('User')
    return User.create(userObject, { new: true, transaction });
  },

  updateById: (id, updateObject, transaction) => {
    const User = getModel('User');
    return User.update(
      { updateObject },
      {
        where: { id },
        returning: true,
        plain: true,
        transaction
      }
    );
  },

  findOneByParams: (findObject) => {
    const User = getModel('User')
    return User.findOne({
      where: findObject
    })
  }
}
