const {Router} = require('express');
const apiRouter = Router();

const {authRouter, userRouter, carsRouter, paymentRouter} = require('../routes');

apiRouter.use('/users', userRouter);
apiRouter.use('/cars', carsRouter);
apiRouter.use('/auth', authRouter);
apiRouter.use('/pay', paymentRouter);

module.exports = apiRouter;
