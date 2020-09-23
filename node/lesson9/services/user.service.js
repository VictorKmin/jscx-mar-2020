const { getModel } = require('../dataBase').getInstance()

module.exports = {

  create: (userObject) => {
    const User = getModel('User')
    return User.create(userObject, { new: true });
  },

  updateById: (id, updateObject) => {
    const User = getModel('User');
    return User.update(
      { updateObject },
      {
        where: { id },
        returning: true,
        plain: true
      });
  },

  findOneByParams: (findObject) => {
    const User = getModel('User')
    return User.findOne({
      where: findObject
    })
  }
}
