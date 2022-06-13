const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost/todo_app';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
module.exports = mongoose;