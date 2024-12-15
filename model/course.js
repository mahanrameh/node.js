const mongoose = require("mongoose");
const {teacherSchema} = require("./teachers")


const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    teachers: {
        type: teacherSchema
    }
})

const courseModel = mongoose.model('course',courseSchema);

module.exports = courseModel;