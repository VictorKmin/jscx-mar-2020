const { Router } = require('express');
const userRouter = Router();

const controller = require('../controllers/auth.controller');
const { user } = require('../middlewares');

userRouter.post('/', user.checkIsUserPresentMiddleware, controller.login)

module.exports = userRouter;
