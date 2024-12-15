const usersModel = require("../model/User")


module.exports = async (req, res , next) => {
    const {id} = req.body
    const user = await usersModel.findOne({_id:id}).lean()
    req.user = user;

    if (user) {
        if (user.role === "ADMIN") {
            return next()
        }
        else {
            return res.status(403).json({
                message:'not for peasents'
            })
        }
    }
    else {
        return res.status(404).json({
            message:'not found'
        })
    }

    next()
    
}

