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
	 
	 var query = moduleLog.Log.find({'application._id' :  request.params.appId} );
	  if(request.body){
		  if(request.body.typeLog){
			  query.where('type_log._id').equals(request.body.typeLog);
		  }
		  if(request.body.dateStart){
			  query.where('date_time').gte(request.body.dateStart);
		  }
		  if(request.body.dateEnd){
			  query.where('date_time').lte(request.body.dateEnd);
		  }
	  }
	
	  query.exec(function(err, logs){
		  if(err){
		    	response.status(400).json(err);
		    } else {
		    	console.log(logs);
		    	response.status(201).json(logs);
		    }
	  });
	  
	 
}