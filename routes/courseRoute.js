const express = require("express")
const courseModel = require("./../model/course")
const {isValidObjectId} = require("mongoose")
const registerValidator = require('./../validator/register')
const courseControl = require("./../controllers/courseController")
const mongoose = require("mongoose")

const courseRouter = express.Router()

courseRouter
    .route('/')
    .get(courseControl.getAll)
    // .post(userControl.register)

module.exports = courseRouter
