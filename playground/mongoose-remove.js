const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

/*Todo.remove({}).then((result)=>{
    console.log(result)
});*/

//returns doc
//Todo.findOneAndRemove
Todo.findOneAndRemove({_id: '5951d41f60df7ab2aa9ef13c'}).then((todo)=>{
    console.log(todo);
});

//Todo.findByIdAndRemove
Todo.findByIdAndRemove('5951d41f60df7ab2aa9ef13c').then((todo)=>{
    console.log(todo);
});