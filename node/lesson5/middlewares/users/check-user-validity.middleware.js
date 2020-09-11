const { ErrorHandler, errors, statusCodesEnum } = require('../../error')

module.exports = (req, res, next) => {
  try {
    const user = req.body;

    if (!user.name) {
      return next(new ErrorHandler(
          errors.BAD_REQUEST_NOT_VALID_USER.message,
          statusCodesEnum.BAD_REQUEST,
          errors.BAD_REQUEST_NOT_VALID_USER.code))
    }

    if (!user.password || user.password.length < 8) {
      return next(new ErrorHandler('Too weak password', 400, 4002))
    }

    next();

  } catch (e) {
    next(e)
  }
}
