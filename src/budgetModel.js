var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema= new Schema({
    
    email: {
        type : String,
        required :true
    },
    budgetCategory:{
        type:String,
        required:true
    },
    budgetAmount:{
        type:String,
        required:true
    }
    
    
});

module.exports = mongoose.model('budget',userSchema);