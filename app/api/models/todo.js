const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const todoSchema = new Schema({
 content: {
  type: String,
  trim: true,  
  required: true,
 },
 date: {
  type: Date,
  default: new Date(),
 }
});
module.exports = mongoose.model('todo', todoSchema)