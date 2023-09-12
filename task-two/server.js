const express = require('express')
const mongoose = require('mongoose')
const app = express()

//routes
app.get('/api', (req, res) =>{
    res.send("Hello World")
})

app.listen(3000, ()=>{
    console.log('Server is running on port 3000'	)
})

mongoose.connect('mongodb+srv://admin:admin@hng-task-two.jjsfmiz.mongodb.net/hng-task-two?retryWrites=true&w=majority')
.then(()=>{
    app.listen(3000,()=>{
        console.log('HNG API is connected to MongoDB and running on port 3000')
    })
    console.log('Connected to  Mongodb database')
}).catch((err)=>{
    console.log(err)
})