var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema= new Schema({
    name: {
        type : String,
        required :true
    },
    email: {
        type : String,
        required :true,
        unique : true
    },
    pwd: {
        type : String,
        required :true
    }
    
});

module.exports = mongoose.model('signups',userSchema);