const express = require('express')
const bodyParser = require("body-parser");
const app = express()
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
var routes = require('./router/route');
const cors = require('cors');


mongoose.connect("mongodb://127.0.0.1:27017/xp",{useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('connected', function () {  
    console.log('Mongoose default connection ');
  }); 
  
  // If the connection throws an error
  mongoose.connection.on('error',function (err) {  
    console.log('Mongoose default connection error: ' + err);
  }); 
  
  // When the connection is disconnected
  mongoose.connection.on('disconnected', function () {  
    console.log('Mongoose default connection disconnected'); 
  });
  
  // If the Node process ends, close the Mongoose connection 
  process.on('SIGINT', function() {  
    mongoose.connection.close(function () { 
      console.log('Mongoose default connection disconnected through app termination'); 
      process.exit(0); 
    }); 
  }); 
  
app.listen(8086,
	function port(error)
	{
	if(error)
		console.log(error);
	else
		console.log("Port Connected(8086)");
	}
);


app.use(cors());
app.use(express.json());
app.use(routes);
app.use(bodyParser.urlencoded({ extended: true }));

/*
app.get('/documents/:email/:pname', (req, res) => {
  const { email,pname } = req.params;

  MyModel.find({ email,pname }, (err, documents) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(documents);
    }
  });
});
*/
