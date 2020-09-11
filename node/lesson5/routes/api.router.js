const {Router} = require('express');
const apiRouter = Router();

const {userRouter, schRouter, carsRouter} = require('../routes');

apiRouter.use('/users', userRouter);
apiRouter.use('/cars', carsRouter);
apiRouter.use('/schedulers', schRouter);

module.exports = apiRouter;
