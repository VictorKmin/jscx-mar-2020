const { Router } = require('express');
const userRouter = Router();

const controller = require('../controllers/user.contoller');
const { user } = require('../middlewares');

userRouter.post('/', user.checkUserValidityMiddleware,  controller.createUser)

module.exports = userRouter;
