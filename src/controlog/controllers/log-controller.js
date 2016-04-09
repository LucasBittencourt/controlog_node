var module = require('../models/log-schema');

exports.insertLog = function(request, response){
console.log(request.body);
	  /*new module.Log(request.body).save(function(error, data){
		if(error){
		    response.status(400).json(error);
		} else {
		   response.status(201).json(data);
		}
	}); */ 
 }

exports.listLog = function(request, response){	
	
	  var query = module.Log.find({client_id:request.params.clientId , application_id:request.params.appId });
	  
	  if(request.query){
		  if(request.query.typeLog){
			  query.where('type_log').equals(request.query.typeLog);
		  }
		  if(request.query.dateStart){
			  query.where('date_time').gte(request.query.dateStart);
		  }
		  if(request.query.dateEnd){
			  query.where('date_time').lte(request.query.dateEnd);
		  }
	  }
	 
	  query.exec(function(err, usuarios){
		  response.status(200).json(usuarios);
	  });
	  
	 
}
