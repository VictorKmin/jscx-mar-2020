const Router = require('express').Router;

const {paymentContrller} = require('../controllers')

const paymentsRouter = new Router();

paymentsRouter.get('/', paymentContrller.getAll);
paymentsRouter.post('/', paymentContrller.createPayment);


module.exports = paymentsRouter;