const mongoose = require('mongoose');

const clothesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    material: {
        type: String,
        enum: ['Linen', 'Denim', 'Cotton', 'Leather'],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        min: 0,
        max: 100,
        default: 0
    }
});

module.exports = mongoose.model('Clothes', clothesSchema);
