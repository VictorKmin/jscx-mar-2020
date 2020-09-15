const { userService } = require('../../services')
const { errors,  ErorHandler, statusCodesEnum} = require('../../error')

module.exports = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await userService.findOneByParams({ email });

    if (!user) {
      return next(new ErorHandler(errors.NOT_FOUND_USER.message, statusCodesEnum.NOT_FOUND, errors.NOT_FOUND_USER.code))
    }

    req.user = user;

    next();
  } catch (e) {
    next(e)
  }
}
