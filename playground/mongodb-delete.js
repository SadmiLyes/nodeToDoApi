//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //delete many
/*        db.collection('Todos').deleteMany({
            hello:'world'
        }).then((result) => {
            console.log(result);
        })*/

    //delete one
/*    db.collection('Todos').deleteOne({
        text:'To delete'
    }).then((result) => {
        console.log(result);
    })*/

    //findOneAnd Delete
/*    db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
        console.log(result);
    });*/

    //db.collection('Users').deleteMany({name:'Lyes'}).then((result)=>{console.log(result);})

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5a72f45d93c92824488b0540')}).then((result)=>{console.log(result)});

    //db.close();
});