const {mongoose} = require('./../server/db/mongoose');
const {ObjectID} = require('mongodb');
const {Todo} = require('./../server/model/todo');
const {User} = require('./../server/model/users');

/*Todo.remove({}).then((result)=>{
    console.log(result);
});*/

/*Todo.findOneAndRemove({_id:'5a738a688bfca9bc3ee371aa'}).then((todo)=>{
    console.log(todo);
})*/

/*
Todo.findByIdAndRemove('5a738a658bfca9bc3ee371a9').then((todo)=>{
    console.log(todo);
})*/
