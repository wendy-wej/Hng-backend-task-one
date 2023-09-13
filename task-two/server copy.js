const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Person = require('./models/person_model')

//middleware to understand json
app.use(express.json())
app.use(express.urlencoded({extended: false}))

mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://admin:admin@hng-task-two.jjsfmiz.mongodb.net/hng-task-two?retryWrites=true&w=majority')
.then(()=>{
    app.listen(3000,()=>{
        console.log('HNG API is connected to MongoDB and running on port 3000')
    })
    console.log('Connected to  Mongodb database')
}).catch((err)=>{
    console.log(err)
})

//ROUTES
app.get('/', (req, res) =>{
    res.send("Hello World")
})
// Get a single person by ID
app.get('/api/:user_id', async(req, res)=>{
    try{
        const {user_id} = req.params;
        const person = await Person.findById(user_id);
        if(!person){
            return res.status(404).json({message: `Person with ${user_id} not found`})
        }
        res.status(200).json(person)
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

// Get all persons
app.get('/api', async(req, res)=>{
    try{
        const person = await Person.find({});
        res.status(200).json(person)
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

// Input a single person
app.post('/api', async(req,res) =>{
    try{
        const person = await Person.create(req.body)
        res.status(200).json(person);

    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})


// Input a single person
app.post('/api', async(req,res) =>{
    try{
        const person = await Person.create(req.body)
        res.status(200).json(person);

    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

// Update a single person by ID
app.put('/api/:user_id', async(req, res)=>{
    try{
        const {user_id} = req.params;
        const person = await Person.findByIdAndUpdate(user_id, req.body)

        //If person not found
        if(!person){
            return res.status(404).json({message: `Person with ${user_id} not found`})
        }
        const updatedPerson = await Person.findById(user_id)
        res.status(500).json(updatedPerson)

    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})

//delete a single person
app.delete('/api/:user_id', async(req, res)=>{
    try{
        const {user_id} = req.params;
        const person = await Person.findByIdAndDelete(user_id);

        if(!person){
            return res.status(404).json({message: `Person with ${id} is not found!`})
        }
        res.status(200).json({message: `Person has been deleted!`});

    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

