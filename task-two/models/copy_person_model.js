const mongoose = require('mongoose')

const personSchema = mongoose.Schema(
    {
        _id: {
            type: Number,
            required: true,
            auto: true,
        },
        name: {type: String, 
               required: [true, "Please enter a name"]
            },

        age:{type: Number,
             required: [false, "Please enter an age",],
            default: 0},

        track:{type:String,
               required: [false, "Please enter a track"]
            }

    },
    {
        timestamps: true,
    }
);



const Person = mongoose.model('Person', personSchema);

module.exports = Person;