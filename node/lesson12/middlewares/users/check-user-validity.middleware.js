const { ErorHandler, errors, statusCodesEnum } = require('../../error')
const winston = require('../../logger/winston')
const { userValidator: {newUserValidator} } = require('../../validators')

const logger = winston('User-validity')

module.exports = (req, res, next) => {
  try {
    const user = req.body;
    const {error} = newUserValidator.validate(user);

    if (error) {
      logger.info({test: 'TEST'})
        return next(new ErorHandler(
            error.details[0].message,
            statusCodesEnum.BAD_REQUEST,
            errors.BAD_REQUEST_NOT_VALID_USER.code))
    }


    next();

  } catch (e) {
    next(e)
  }
}
