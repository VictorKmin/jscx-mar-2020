const jwt = require('jsonwebtoken');

module.exports = () => {
  const access_token = jwt.sign({}, 'helloWorld', { expiresIn: '1m' })
  const refresh_token = jwt.sign({}, 'ultraSecret', { expiresIn: '1d' })

  return {
    access_token,
    refresh_token
  }
}
