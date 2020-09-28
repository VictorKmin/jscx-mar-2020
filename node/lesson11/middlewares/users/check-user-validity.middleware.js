const { ErorHandler, errors, statusCodesEnum } = require('../../error')
const { userValidator: {newUserValidator} } = require('../../validators')

module.exports = (req, res, next) => {
  try {
    const user = req.body;
    const {error} = newUserValidator.validate(user);

    if (error) {
        return next(new ErorHandler(
            error.details[0].message,
            statusCodesEnum.BAD_REQUEST,
            errors.BAD_REQUEST_NOT_VALID_USER.code))
    }

    // if (error) {
    //   return next(new ErorHandler(
    //       errors.BAD_REQUEST_NOT_VALID_USER.message,
    //       statusCodesEnum.BAD_REQUEST,
    //       errors.BAD_REQUEST_NOT_VALID_USER.code)
    //   )
    // }

    next();

  } catch (e) {
    next(e)
  }
}
