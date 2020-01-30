const mongoose = require('mongoose');
const Order = require('../models/order');
const Product = require('../models/product');

exports.ordersGetAll = (req, res, next) => {
    Order.find()
        .select('product quantity _id')
        .populate('product', 'name _id')
        .exec()
        .then(docs => {
            res.status(200).json({
                count: docs.length,
                order: docs.map(doc => {
                    return {
                        _id: doc._id,
                        product: doc.product,
                        quantity: doc.quantity,
                        request: {
                            type: 'GET',
                            url: `http://localhost:3000/orders/${doc._id}`
                        }
                    }
                }),

            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
};

exports.ordersCreate = (req, res, next) => {
    Product.findById(req.body.productId)
        .then(product => {
            if (!product) {
                return res.status(404).json({
                    msg: 'Product not found'
                })
            }
            const order = new Order({
                _id: mongoose.Types.ObjectId(),
                quantity: req.body.quantity,
                product: req.body.productId
            });
            return order
                .save()
        })
        .then(result => {
            console.log(result);
            res.status(201).json({
                msg: 'Order created successfully!',
                createdOrder: {
                    _id: result._id,
                    product: result.product,
                    quantity: result.quantity
                },
                request: {
                    type: 'GET',
                    url: `http://localhost:3000/orders/${result._id}`
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                err: err
            })
        });
};

exports.ordersGetOrder = (req, res, next) => {
    Order.findById(req.params.orderId)
        .populate('product')
        .exec()
        .then(order => {
            if(!order) {
                return res.status(404).json({
                    msg: 'Order not found'
                });
            }
            res.status(200).json({
                order: order,
                request: {
                    type: 'GET',
                    url: 'http://localhost:3000/orders'
                }
            })
        })
        .catch(err => {
            res.status(500).json({
                msg: 'Order not found',
                error: err
            })
        });
};

exports.ordersDelete = (req, res, next) => {
    Order.remove({_id: req.params.orderId})
        .exec()
        .then(order => {
            res.status(200).json({
                message: 'Order deleted',
                request: {
                    type: 'POST',
                    url: 'http://localhost:3000/orders',
                    body: { productId: 'ID', quantity: 'Number' }
                }
            })
        })
        .catch(err => {
            res.status(500).json({
                msg: 'Order not found',
                error: err
            })
        });
};