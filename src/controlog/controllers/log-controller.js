var moduleLog = require('../models/log-schema');
var moduleClient = require('../models/client-schema');

exports.insertLog = function(request, response){
	
	moduleClient.Client.findOne({ _id:request.params.clientId} ,{applications:{$elemMatch:{code : request.body.application.code}},types_log:{$elemMatch:{code : request.body.type_log.code}}}, function(error, data){
		  
		   if(error || data.length ==0){
			   response.status(400).json({"error":"Código da Aplicação ou Tipo de Log Invalido!"});
		    } else {
		    	if(data.types_log.length>0 && data.applications.length>0){
		    		
		    		request.body.application.name = data.applications[0].name;
		    		request.body.application._id = data.applications[0]._id;
		    		request.body.type_log.name = data.types_log[0].name;
		    		request.body.type_log._id = data.types_log[0]._id;
		    		
		    		new moduleLog.Log(request.body).save(function(error, data){
		    			if(error){
		    			    response.status(400).json(error);
		    			} else {
		    			   response.status(201).json(data);
		    			}
		    		});
		    	}else{
		    		response.status(400).json({"error":"Código da Aplicação ou Tipo de Log Invalido!"});
		    	}
		    	
		    }
	 });
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
