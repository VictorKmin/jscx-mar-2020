const {getModel} = require('../dataBase').getInstance()

module.exports = {

  create: (userObject) => {
    const User = getModel('User')
    return User.create(userObject, {new: true});
  },


  findOneByParams: (findObject) => {
    const User = getModel('User')
    return User.findOne({
      where: findObject
    })
  }
}
