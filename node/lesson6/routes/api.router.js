const {Router} = require('express');
const apiRouter = Router();

const {authRouter, userRouter, schRouter, carsRouter} = require('../routes');

apiRouter.use('/users', userRouter);
apiRouter.use('/cars', carsRouter);
apiRouter.use('/auth', authRouter);
apiRouter.use('/schedulers', schRouter);

module.exports = apiRouter;
