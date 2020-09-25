const {Router} = require('express');
const apiRouter = Router();

const {authRouter, userRouter, carsRouter} = require('../routes');

apiRouter.use('/users', userRouter);
apiRouter.use('/cars', carsRouter);
apiRouter.use('/auth', authRouter);

module.exports = apiRouter;
