const mongoose = require('mongoose');
const Article = require('../models/articles');

exports.articlesGetAll = (req, res, next) => {
    Article
        .find()
        .select('title text')
        .exec()
        .then(articles => {
            const response = {
                count: articles.length,
                articles: articles.map(article => {
                    return {
                        title: article.title,
                        text: article.text,
                        _id: article._id,
                        request: {
                            type: 'GET',
                            url: `http://localhost:3000/articles/${article._id}`
                        }
                    }
                })
            };
            if (articles.length >= 0) {
                res.status(200).json(response);
            } else {
                res.status(404).json({
                    message: 'No articles found.'
                });
            }
            })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
};

exports.createArticle = (req, res, next) => {
    const article = new Article({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        text: req.body.text
    });

    article
        .save()
        .then(result => {
            res.status(201).json({
                message: 'Article created successfully',
                createdArticle: {
                    title: result.title,
                    text: result.text,
                    _id: result._id,
                    request: {
                        type: "GET",
                        url: `http://localhost:3000/products/${result._id}`
                    }
                }
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({err:err})
        })
};

exports.getArticle = (req, res, next) => {
    const id = req.params.articleId;
    Article.findById(id)
        .select('title text _id')
        .exec()
        .then(article => {
            console.log('From database', article);
            if (article) {
                res.status(200).json({
                    article: article,
                    request: {
                        type: 'GET',
                        description: 'Get all articles',
                        url: 'http://localhost:3000/articles'
                    }
                })
            } else {
                res.status(404).json({
                    message: 'Article not found.'
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
};

exports.updateArticle = (req, res, next) => {
    const id = req.params.articleId;
    const updateArticles = {};
    for (const article of Object.keys(req.body)) {
        updateArticles[article.propName] = article.value;
    }
    Article
        .update({_id: id}, {$set: updateArticles})
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Article updated',
                articleAfterUpdate: result,
                request: {
                    type: 'GET',
                    url: `http://localhost:3000/articles/${id}`
                }
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        })
};

exports.deleteArticle = (req, res, next) => {
    const id = req.params.articleId;
    Article
        .remove({_id: id})
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Article deleted',
                request: {
                    type: 'POST',
                    url: 'http://localhost:3000/articles',
                    data: {
                        title: 'String',
                        text: 'String'
                    }
                }
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                err: err
            })
        })
};
