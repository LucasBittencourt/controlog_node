var module = require('../models/client-schema');
var sha1 = require('node-sha1');

exports.insertClient = function(request, response){	
	request.body.password = sha1(request.body.password);

	new module.Client(request.body).save(function(error, data){
		if(error){
		    	console.log(error);
		    	response.status(400).json(error);
		} else {
		    	response.status(201).json(data);
		}
	});
} 

exports.loginClient = function(request, response){	
	request.body.pwd = sha1(request.body.pwd);

	module.Client.find({ email: request.body.email, password: request.body.pwd }, function(error, data){
		if(error || data.length ==0){
		   	response.status(201).json({result: false});
		} else {
		   	response.status(201).json(data);
		}
	}); 
}

exports.editClient = function(request, response){
	 
	module.Client.update({_id:request.body._id}, request.body ,function(error, data){
		  
		if(error){
		   	response.status(400).json(error);
		} else {
		   	response.status(201).json(data);
		}
	}); 
}



