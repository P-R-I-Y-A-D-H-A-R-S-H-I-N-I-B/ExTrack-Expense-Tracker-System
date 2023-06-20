var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cardSchema = new Schema({
    bname : {
        type : String,
        required : true,
    },
    cname : {
        type : String,
        required : true,
        unique: true
    },
    
    amt : {
        type : Number,
        required : true
    },
    ano : {
        type : Number,
        required : true
    },
    email :{
        type : String,
        required : true
    },
    card : {
        type : String,
        required : true,
    },
});
cardSchema.index({ card: 1, ano: 1}, { unique: true });

module.exports = mongoose.model('cards',cardSchema);