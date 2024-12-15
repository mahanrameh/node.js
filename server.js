const express = require('express')
const app = express()
const path = require("path")
const mongoose = require("mongoose")
const userRouter = require("./routes/userRoute")
const bookRouter = require("./routes/bookRoute")
const courseRouter = require("./routes/courseRoute")
const viewsPath = require("./helper/viewsPath")
const {teachersModel} = require("./model/teachers")
const courseModel = require("./model/course")
const { message } = require('statuses')
const { title } = require('process')

require('./configs/db')
app.use(express.static(path.join(__dirname,'public')))


app.get('/', async (req, res) => {
    const teacher = await teachersModel.findOne({
        _id: "675e993f03db56ce3267a385"
    })

    courseModel.create({
        title:'python',
        teachers:teacher
    })
    res.json({
        message:'created'
    })
})

app.use('/api/user/',userRouter )
app.use('/api/book/',bookRouter )
app.use('/api/course/',courseRouter)


app.use((req, res) => {
    return res.status(404).sendFile(path.join(viewsPath, "404.html"))
})
app.listen(3000, () => {
    console.log('server running')
})
