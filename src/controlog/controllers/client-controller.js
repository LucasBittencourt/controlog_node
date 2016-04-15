var module = require('../models/client-schema');
var sha1 = require('node-sha1');

exports.insertClient = function(request, response){	
	if(request.body.password){
		request.body.password = sha1(request.body.password);
	}
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
	if(request.body.pwd){
		request.body.pwd = sha1(request.body.pwd);
	}
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

exports.recoverPassword = function(request, response){	
	console.log(request.body);
	
	if (request.body.index == 0){
		if (request.body.email == '') {
			response.status(201).json({result:false, message:'email em branco'});
			console.log('=[ 1');
		} else {			
			console.log('=] 1');
			
			module.Client.find({ email: request.body.email }, function(error, data){
				if(error || data.length ==0){
					response.status(201).json({result: false, message:'email inválido'});
				} else {
					response.status(201).json(data);
				}
			});			
		}
	} else if (request.body.index == 1){
		if (request.document == '') {
			response.status(201).json({result:false, message:'documento em branco'});
		} else {
			module.Client.find({ document: request.body.document }, function(error, data){
				if(error || data.length ==0){
					response.status(201).json({result: false, message:'documento inválido'});
				} else {
					response.status(201).json(data);
				}
			}); 		
		}
	} else if (request.index == 2){
/*
		var recover
		
		module.Client.find({ document: request.document }, function(error, data){
			if(error || data.length ==0){
				recover.status(201).json({result: false});
			} else {
				recover.status(201).json(data);
				
				recover.password = sha1(request.body.pwd)
				
				module.Client.update({_id:request.body._id}, recover.body ,function(error, data){
		  
				if(error){
					response.status(400).json(error);
				} else {
					response.status(201).json(data);
				}				
			}
		});		
*/
	}
}

