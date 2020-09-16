const { Router } = require('express');
const userRouter = Router();

const controller = require('../controllers/auth.controller');
const { auth, user } = require('../middlewares');

userRouter.post('/', user.checkIsUserPresentMiddleware, controller.login)
userRouter.post('/refresh', auth.checkRefreshTokenMiddleware, controller.refreshToken)

module.exports = userRouter;
