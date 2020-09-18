const jwt = require('jsonwebtoken');

const {ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET} = require('../configs/config')

module.exports = () => {
  const access_token = jwt.sign({}, ACCESS_TOKEN_SECRET, { expiresIn: '1m' })
  const refresh_token = jwt.sign({}, REFRESH_TOKEN_SECRET, { expiresIn: '1d' })

  return {
    access_token,
    refresh_token
  }
}
