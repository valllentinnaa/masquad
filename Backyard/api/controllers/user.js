const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

exports.userSignUp = (req, res, next) => {
    User
        .find({email: req.body.email})
        .exec()
        .then(user => {
            if (user.length >= 1) {
                return res.status(409).json({
                    message: 'Mail exists'
                })
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if(err) {
                        console.log('TYKA CRASH');
                        return res.status(500).json({
                            error: err
                        });
                    } else {
                        const user = new User({
                            _id: new mongoose.Types.ObjectId(),
                            email: req.body.email,
                            password: hash
                        });
                        user
                            .save()
                            .then(result => {
                                console.log(result);
                                res.status(201).json({
                                    message: 'Success user created'
                                });
                            })
                            .catch(err => {
                                console.log(err);
                                res.status(500).json({
                                    error: err
                                });
                            });
                    }
                })
            }
        })
        .catch(err => {
            console.log('TYKA CRASH');
            res.status(500).json({
                error: err
            })
        });
};

exports.userLogin =  (req, res, next) => {
    User
        .find({email: req.body.email})
        .exec()
        .then(user => {
            if (user.length < 1) {
                console.log(user);
                return res.status(404).json({
                    message: 'Auth failed',
                    response: res
                });
            }
            bcrypt.compare(req.body.password, user[0].password, (err, response) => {
                if (err) {
                    console.log("error", err);
                    return response.status(404).json({
                        message: 'Auth failed',
                        responsePS: res
                    });
                }

                if (response) {
                    const token = jwt.sign({
                            email: user[0].email,
                            id: user[0]._id
                        },
                        process.env.JWT_KEY,
                        {
                            expiresIn: "1h"
                        });
                    return res.status(200).json({
                        message: 'Auth successful',
                        token: token
                    });
                }
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

exports.deleteUser = (req, res, next) => {
    User
        .deleteOne({_id: req.params.userId})
        .exec()
        .then(result=> {
            res.status(200).json({
                msg: 'User Deleted'
            });
        })
        .catch(err => {
            console.log('TYKA CRASH');
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};
