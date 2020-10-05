const jwt = require('jsonwebtoken');

const { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = require('../../configs/config')
const { AUTHORIZATION } = require('../../configs/constants')
const { oAuthService } = require('../../services')
const { ErorHandler } = require('../../error');
const winston = require('../../logger/winston');

const logger = winston('CHECK-ACCESS-TOKEN');

module.exports = (tokenType) => async (req, res, next) => {

  let secretWord = '';
  let keyName = ''


  switch (tokenType) {
    case 'access':
      secretWord = ACCESS_TOKEN_SECRET;
      keyName = 'access_token'
      break;
    case 'refresh':
      secretWord = REFRESH_TOKEN_SECRET;
      keyName = 'refresh_token'
      break;
    default:
      return next(new ErorHandler('Token !!!!!', 401));
  }

  const token = req.get(AUTHORIZATION);

  if (!token) {
    logger.info({message: 'Token in not valid'})
    return next(new ErorHandler('Token is now valid', 401));
  }

  jwt.verify(token, secretWord, err => {
    if (err) {
      return next(new ErorHandler('Token is now valid', 401));
    }
  });

  let tokenWithUser = await oAuthService.getByParams({[keyName]: token});

  req.user = tokenWithUser.User;

  next();
}