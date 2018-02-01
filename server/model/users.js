var mongoose = require('mongoose');
var User = mongoose.model('Users',{
    name : {
        type: String,
        minLength: 1,
        trim: true
    },
    age : {
        type: Number
    },
    location : {
        type: String,
        minLength : 1,
        trim: true
    },
    email : {
        type: String,
        required: true,
        minLength : 1,
        trim: true
    }
});

module.exports = {
    User
}