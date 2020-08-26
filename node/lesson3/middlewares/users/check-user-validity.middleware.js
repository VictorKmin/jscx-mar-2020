module.exports = (req, res, next) => {
  try {
    const user = req.body;

    if (!user.name) {
      throw new Error('No user name')
    }

    if (!user.password || user.password.length < 8) {
      throw new Error('Too weak password')
    }

    next();

  } catch (e) {
    return res.status(400).end(e.message);
  }
}
