const mongoose = require("mongoose");
const {teacherSchema} = require("./teachers");
const { type } = require("os");


const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    teachers: {
        type: teacherSchema
    },
    Comment: [
        {
            type: mongoose.Types.ObjectId,
            ref: Comment
        }
    ]
})

const courseModel = mongoose.model('course',courseSchema);

module.exports = courseModel;