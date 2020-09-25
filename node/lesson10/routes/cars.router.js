const { Router } = require('express');

const { carController } = require('../controllers')
const { auth } = require('../middlewares')

const carsRouter = Router();

carsRouter.get('/', carController.fetchAll)
carsRouter.post('/', auth.checkAccessTokenMiddleware, carController.create)
carsRouter.get('/filter', carController.findWithFilter)

module.exports = carsRouter;
