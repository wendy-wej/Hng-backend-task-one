const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Person = require('./models/person_model')

//middleware to understand json
app.use(express.json())
app.use(express.urlencoded({extended: false}))
mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://admin:admin@hng-task-two.jjsfmiz.mongodb.net/hng-task-two?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true, // Add this option to remove deprecation warning
})
.then(()=>{
    // app.listen(3000,()=>{
    //     console.log('HNG API is connected to MongoDB and running on port 3000')
    // })
    console.log('Connected to  Mongodb database')
}).catch((err)=>{
    console.log(err)
})
//ROUTES
app.get('/', (req, res) =>{
    res.send("Hello World")
})

// Get a single person by name (used as ID)
app.get('/api/:name', async (req, res) => {
    try {
        const { name } = req.params;
        const person = await Person.findOne({ name });
        if (!person) {
            return res.status(404).json({ message: `Person with name ${name} not found` });
        }
        res.status(200).json(person);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// Input a single person with name as the identifier
app.post('/api', async (req, res) => {
    try {
        const person = await Person.create(req.body);
        res.status(200).json(person);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// Update a single person by name (used as ID)
app.put('/api/:name', async (req, res) => {
    try {
        const { name } = req.params;
        const person = await Person.findOneAndUpdate({ name }, req.body, { new: true });

        if (!person) {
            return res.status(404).json({ message: `Person with name ${name} not found` });
        }
        const updatedPerson = await Person.findOne({ name });
        res.status(200).json(updatedPerson);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// Delete a single person by name (used as ID)
app.delete('/api/:name', async (req, res) => {
    try {
        const { name } = req.params;
        const person = await Person.findOneAndDelete({ name });

        if (!person) {
            return res.status(404).json({ message: `Person with name ${name} not found` });
        }
        res.status(200).json({ message: `Person with name ${name} has been deleted!` });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// Search for persons by name
app.get('/api/search/:name', async (req, res) => {
    try {
        const { name } = req.params;
        const persons = await Person.find({ name });
        res.status(200).json(persons);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

module.exports = app;
