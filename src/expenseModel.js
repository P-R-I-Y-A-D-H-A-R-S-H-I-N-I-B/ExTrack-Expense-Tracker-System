var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var expenseSchema = new Schema({
  
    email : {
        type : String,
        required : true
    },
      amt : {
        type: Number,
        required : true
      },
      s_date : {
        type: Date,
        required : true
      },
      money : {
        type: String,
        required : true
      },
      cash : {
        type: String,
        required : true
      },
      cards : {
        type: String
      },
      category : {
        type: String,
      },
      description : {
        type: String
      }
}
);

module.exports = mongoose.model('expense',expenseSchema);


