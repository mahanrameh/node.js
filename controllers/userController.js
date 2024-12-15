const usersModel = require("../model/User")



exports.register = async (req, res) => {
    
    const validationResult = registerValidator(req.body)

    if (validationResult === false) {
      return  res.status(422).json(validationResult)
    }


    let {name,username,email,age} = req.body

    const result = await usersModel.create({
        name,username,email,age
    })

    res.status(201).json(result)
}

exports.remove = async (req, res) => {
    const {id} = req.params
    if (isValidObjectId(id)) {
        const deleteUser = await usersModel.findByIdAndDelete({_id:id})

        if (!deleteUser) {
            return res.status(404).json({
                message:'no user'
            })
        }
    }
    else {
        return res.status(422).json({
            message:'not valid userID'
        })
    }

    res.status(200).json({
        message:"delete successfully"
    })
}

exports.getAll = async (req, res) => {
    const users = await usersModel.find({}).lean()
    res.json(users)
}

exports.getOne = async (req, res) => {
    const {id} = req.params
    let user = null
    if (isValidObjectId(id)) {
        const users = await usersModel.findOne({_id:id}, '-_id -email').lean()

        if (!deleteUser) {
            return res.status(404).json({
                message:'no user'
            })
        }
    }
    else {
        return res.status(422).json({
            message:'not valid userID'
        })
    }

    res.json(users)
}

