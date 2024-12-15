const mongoose = require("mongoose");

const usersModel = mongoose.model('users', {
    name: {
        type: String,
        minlength:3,
        maxlength:15,
        required: true
    },
    username: {
        type: String,
        minlength:5,
        maxlength:12,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 18,
        max: 50,
        default:18
    }
});

module.exports = usersModel;