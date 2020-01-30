const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    text: String
});

module.exports = mongoose.model('Article', productSchema);
