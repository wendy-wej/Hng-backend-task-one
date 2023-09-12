const express = require('express')

const app = express()

//routes
app.get('/api', (req, res) =>{
    res.send("Hello all")
})

app.listen(3000, ()=>{
    console.log('Server is running on port 3000'	)
})