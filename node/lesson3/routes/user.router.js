const { Router } = require('express');
const userRouter = Router();

const controller = require('../controllers/user.contoller');
const { user } = require('../middlewares');

userRouter.get('/', controller.getAllUsers)
userRouter.get('/:userName', controller.getUserById)
userRouter.delete('/:userName', controller.removeUser)
userRouter.post('/', user.checkUserValidityMiddleware,  controller.createUser)

module.exports = userRouter;
