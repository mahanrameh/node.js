const express = require("express")
const booksModel = require("./../model/Book")
const {isValidObjectId} = require("mongoose")
const registerValidator = require('./../validator/register')
const booksControl = require("./../controllers/bookController")
const mongoose = require("mongoose")
const isAdmin = require("../MiddleWares/isAdmin")

const bookRouter = express.Router()

bookRouter
    .route('/')
    .get(isAdmin, booksControl.getAll)
    // .post(isAdmin, booksControl.register)

bookRouter
    .route('/:id?')
    // .delete(isAdmin, booksControl.remove)
    .get(isAdmin, booksControl.getBook)


module.exports = bookRouter
