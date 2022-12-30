const mongoose = require('mongoose') ; 

const todoSchema = mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
}) ; 

const Tododb = mongoose.model('Tododb' , todoSchema); 

module.exports  = Tododb ; 