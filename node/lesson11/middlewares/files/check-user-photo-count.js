module.exports = (req, res, next) => {
  try {
    if (!req.photos) {
      return next()
    }

    if (req.photos.length > 1) {
      return next(new Error('Please upload just one photo'))
    }

    req.avatar = req.photos[0];
    next();
  } catch (e) {
    next(e)
  }
}
