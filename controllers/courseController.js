const courseModel = require("./../model/course")

exports.getAll = async (req, res) => {
    const course = await courseModel.find({})
    res.json(course)
}