const express = require("express")
const usersModel = require("./../model/User")
const {isValidObjectId} = require("mongoose")
const registerValidator = require('./../validator/register')
const userControl = require("./../controllers/userController")
const mongoose = require("mongoose")

const userRouter = express.Router()

userRouter
    .route('/')
    .get(userControl.getAll)
    // .post(userControl.register)

userRouter
    .route('/:id')
    // .delete(userControl.remove)
    .get(userControl.getOne)


module.exports = userRouter
