const mongoose = require("mongoose");

const booksModel = mongoose.model('books', {
    title: {
        type: String,
        minlength:3,
        maxlength:15,
        required: true
    },
    author: {
        type: String,
        minlength:5,
        maxlength:12,
        required: true
    },
    price: {
        type: Number,
        min: 180,
        max: 500000,
        default:18000
    },
    free: {
        // default:1
    }
});

module.exports = booksModel;