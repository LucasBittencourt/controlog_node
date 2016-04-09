 var express = require('express');
 var app = express();
 var cors = require('cors');
 var bodyParser = require("body-parser");
 var mongoose = require('mongoose');
 
mongoose.connect(process.env.MONGODB_URL || 'mongodb://heroku_6rb00m7m:eh96fkhhk0qb2tsb0daf27ibl6@ds019980.mlab.com:19980/heroku_6rb00m7m');//username:password@host:port/database
 
var router = require('./controlog/router');
var loger = require('./loger');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(loger);
app.use(router);
 
 app.listen(process.env.PORT || 8000, function(){
  console.log('App online...');
 });