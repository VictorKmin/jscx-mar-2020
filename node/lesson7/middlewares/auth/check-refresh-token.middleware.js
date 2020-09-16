const jwt = require('jsonwebtoken');

const { ErorHandler } = require("../../error");

module.exports = (req, res, next) => {
  const token = req.get('Authorization');

  if (!token) {
    return next(new ErorHandler('Token is now valid', 401))
  }

  jwt.verify(token, 'ultraSecret', err => {
    if (err) {
      return next(new ErorHandler('Token is now valid', 401))
    }
  });

  // TODO is token present in DB

  next();
}
