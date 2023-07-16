const mongoose = require('mongoose')
  const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title:String,
    status: Boolean,
    data :{type:Date, default:Date.now},
})

const Task = mongoose.model('Task', taskSchema)