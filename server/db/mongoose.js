const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');
mongoose.connect('mongodb://mitocode:123@ds135592.mlab.com:35592/todoapp_mitocode');


module.exports = { mongoose }