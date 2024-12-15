const mongoose = require("mongoose");


const teacherSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    }
})

const teachersModel = mongoose.model('teachers',teacherSchema);

module.exports = {teacherSchema,teachersModel};