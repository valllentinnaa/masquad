const mongoose = require('mongoose');

const merchSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: {type: Number, required: true},
    merchImage: {type: String, required: true},
    description: String,
    sizesLink: String,
});

module.exports = mongoose.model('Merch', merchSchema);
