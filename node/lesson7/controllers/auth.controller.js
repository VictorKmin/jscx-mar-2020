const { AUTHORIZATION } = require('../configs/constants');
const { comparePasswords, tokinizer } = require('../helpers');
const { oAuthService } = require('../services');

module.exports = {
  login: async (req, res, next) => {
    try {
      const user = req.user;
      const { password } = req.body;

      await comparePasswords(password, user.password);

      const tokens = tokinizer();

      await oAuthService.create({
        ...tokens,
        user_id: user.id
      })

      res.json(tokens);
    } catch (e) {
      next(e)
    }
  },

  refreshToken: async (req, res, next) => {
    try {
      const user = req.user;
      const token = req.get(AUTHORIZATION);
      const newTokensPair = tokinizer();

      await oAuthService.deleteByParams({refresh_token: token});

      await oAuthService.create({
        ...newTokensPair,
        user_id: user.id
      })

      res.json(newTokensPair);
    } catch (e) {
      next(e)
    }
  }
}
