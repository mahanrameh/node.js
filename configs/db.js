const mongoose = require('mongoose')
// const { MongoClient, ObjectId} = require("mongodb")


const clinet = "mongodb://localhost:27017/library"

mongoose.connect(clinet)
    .then(() => console.log('200'))
    .catch((err) => console.log('400'))
