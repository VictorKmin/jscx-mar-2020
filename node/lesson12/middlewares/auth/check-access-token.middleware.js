const jwt = require('jsonwebtoken');

const { ACCESS_TOKEN_SECRET } = require('../../configs/config')
const { AUTHORIZATION } = require('../../configs/constants')
const { oAuthService } = require('../../services')
const { ErorHandler } = require('../../error');
const winston = require('../../logger/winston');

const logger = winston('CHECK-ACCESS-TOKEN')

module.exports = async (req, res, next) => {
  const token = req.get(AUTHORIZATION);

  if (!token) {
    logger.info({message: 'Token in not valid'})
    return next(new ErorHandler('Token is now valid', 401));
  }

  jwt.verify(token, ACCESS_TOKEN_SECRET, err => {
    if (err) {
      return next(new ErorHandler('Token is now valid', 401));
    }
  });

  let tokenWithUser = await oAuthService.getByParams({access_token: token});

  req.user = tokenWithUser.User;

  next();
}
