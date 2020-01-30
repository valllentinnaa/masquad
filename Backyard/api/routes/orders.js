const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const OrdersController = require('../controllers/orders');

//Handle incoming GEt requests to /orders
router.get('/', checkAuth, OrdersController.ordersGetAll);

//Handle incoming POST requests to /orders
router.post('/', checkAuth, OrdersController.ordersCreate);

router.get('/:orderId', checkAuth, OrdersController.ordersGetOrder);

router.delete('/:orderId', checkAuth, OrdersController.ordersDelete);

module.exports = router;