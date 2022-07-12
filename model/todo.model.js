const mongoose = require('mongoose')

const TodoModel = mongoose.Schema({
    text:{
        type:String,
        required: true
    },
    hasComplete:{
        type:Boolean,
        required: true
    }
})



module.exports = mongoose.model('todo',TodoModel)

