var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema= new Schema({
    
    email: {
        type : String,
        required :true
        },
    pname: {
        type : String,
        required :true
    },
    company: {
        type : String,
        required :true
    },
    sdate: {
        type : Date,
        required :true
    },
    edate: {
        type : Date,
        required :true
    },
    amnt:{
        type:Number,
        required:true
    },
    cardname: {
        type : String,
        required :true
    }
    
});
userSchema.index({email:2,pname:2},{unique:true});
module.exports = mongoose.model('policy',userSchema);