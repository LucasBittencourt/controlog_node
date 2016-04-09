 var express = require('express');
 var app = express();
 var cors = require('cors');
 var bodyParser = require("body-parser");
 var mongoose = require('mongoose');
 
mongoose.connect('mongodb://controlog:controlog123@ds057234.mlab.com:57234/controlog');//username:password@host:port/database
 
var router = require('./controlog/router');
var loger = require('./loger');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(loger);
app.use(router);
 
 app.listen(8000, function(){
  console.log('App online...');
 });