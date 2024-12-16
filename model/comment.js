const mongoose = require("mongoose");
const {teacherSchema} = require("./teachers");


const commentModel = new mongoose.model('comment', mongoose.Schema({
    body: {
        type: string,
        required: true
    }
}))

module.exports = commentModel;