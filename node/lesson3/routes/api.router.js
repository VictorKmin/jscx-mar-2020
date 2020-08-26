const {Router} = require('express');
const apiRouter = Router();

const {userRouter, schRouter} = require('../routes');

apiRouter.use('/users', userRouter);
apiRouter.use('/schedulers', schRouter);

module.exports = apiRouter;
