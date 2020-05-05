const mongoose = require('mongoose');
const Merch = require('../models/merch');

exports.merchGetAll = (req, res, next) => {
    Product.find()
        .select('_id name price merchImage description sizesLink')
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                products: docs.map(doc => {
                    return {
                        _id: doc._id,
                        name: doc.name,
                        price: doc.price,
                        merchImage: doc.merchImage,
                        description: doc.description,
                        sizesLink: doc.sizesLink,
                        request: {
                            type: 'GET',
                            url: `http://localhost:3000/merch/${doc._id}`
                        }
                    }
                })
            };
            if (docs.length >= 0) {
                res.status(200).json(response);
            } else {
                res.status(404).json({
                    msg: 'No entries found'
                })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                err: err
            });
        })
};

exports.merchCreate =  (req, res, next) => {
    const merch = new Merch({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
        merchImage: req.file.path,
        description: req.body.description,
        sizesLink: req.body.sizesLink
    });

    merch
        .save()
        .then(result => {
            res.status(201).json({
                msg: 'Created merch successfully!',
                createdMerch: {
                    _id: result._id,
                    name: result.name,
                    price: result.price,
                    request: {
                        type: "GET",
                        url: `http://localhost:3000/merch/${result._id}`
                    }
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({err: err})
        });

};

exports.getMerch = (req, res, next) => {
    const id = req.params.merchId;
    Product.findById(id)
        .select('name price _id merchImage description sizesLink')
        .exec()
        .then(doc => {
            console.log("From database", doc);
            if (doc) {
                res.status(200).json({
                    product: doc,
                    request: {
                        type: 'GET',
                        description: 'Get all the merch',
                        url: 'http://localhost/merch'
                    }
                });
            } else {
                res.status(404).json({message: 'No valid entry found'})
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({err: err})
        });

};

exports.deleteMerch = (req, res, next) => {
    const id = req.params.merchId;
    Merch.remove({_id: id})
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Merch deleted',
                request: {
                    type: 'POST',
                    url: 'http://localhost:3000/merch',
                    data: {
                        name: 'String',
                        price: 'Number'
                    }
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