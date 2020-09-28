const { Router } = require('express');
const userRouter = Router();

const controller = require('../controllers/user.contoller');
const { user, files } = require('../middlewares');

userRouter.post(
  '/',
  user.checkUserValidityMiddleware,
  files.checkFileMiddleware,
  files.checkUserPhotoCountMiddleware,
  controller.createUser
)

module.exports = userRouter;
