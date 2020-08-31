const {Router} = require('express');

const {carController} = require('../controllers')

const carsRouter = Router();

carsRouter.get('/', carController.fetchAll)
carsRouter.post('/', carController.create)
carsRouter.get('/filter', carController.findWithFilter)

module.exports = carsRouter;
