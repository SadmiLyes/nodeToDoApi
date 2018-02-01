const {mongoose} = require('./../server/db/mongoose');
const {ObjectID} = require('mongodb');
const {Todo} = require('./../server/model/todo');
const {User} = require('./../server/model/users');
//var id = "666a736c37781493dc3336cfda";
/*if(!ObjectID.isValid(id)){
     console.log('id not valid');
}*/
/*Todo.find({
    _id:id
}).then((todos)=>{
    console.log('Todos', todos);
});

Todo.findOne({
    _id:id
}).then((todo)=>{
    console.log(todo)
})*/

/*
Todo.findById(id).then((todo)=>{
    if(!todo){
        return console.log('there is ID')
    } else {
        console.log('todo by id : ',todo)
    }
}).catch((e)=>{
    console.log(e)
})*/

var id = "5a731b18bae9c6741b9f735f";
if(ObjectID.isValid(id)) {
    User.findById(id).then((user) => {
        console.log(user);
    },(e)=>{
        return console.log('user not found',e.message);
    })
} else {
    console.log('user id does not exist');
}