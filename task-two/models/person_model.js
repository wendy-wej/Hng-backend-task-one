const mongoose = require('mongoose');

const personSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter a name'],
            unique: true, // Ensure name is unique as it will serve as the identifier
        },

        age: {
            type: Number,
            required: [false, 'Please enter an age'],
            default: 0,
        },

        track: {
            type: String,
            required: [false, 'Please enter a track'],
        },
    },
    {
        timestamps: true,
    }
);

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
