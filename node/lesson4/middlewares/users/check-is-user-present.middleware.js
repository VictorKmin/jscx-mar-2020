const service = require('../../services/user.service.old')
module.exports = (req, res, next) => {
  try {
    const { userName } = req.params;
    const user = service.getUserByName(userName);

    if (!user) {
      throw new Error('Users not present')
    }

    req.user = user;

    next();

  } catch (e) {
    return res.status(400).end(e.message);
  }
}
