const { comparePasswords, tokinizer } = require('../helpers');

module.exports = {
  login: async (req, res, next) => {
    try {
      const user = req.user;
      const { password } = req.body;

      await comparePasswords(password, user.password);

      const tokens = tokinizer();

      //TODO save tokens to DB
      res.json(tokens);
    } catch (e) {
      next(e)
    }
  },

  refreshToken: async (req, res, next) => {
    try {
      const token = req.get('Authorization');
      const newTokensPair = tokinizer();

      // TODO remove old tokens from DB
      // TODO insert new token pair to DB

      res.json(newTokensPair);
    } catch (e) {
      next(e)
    }
  }
}
