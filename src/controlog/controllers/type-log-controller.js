var moduleLog = require('../models/log-schema');
var moduleClient = require('../models/client-schema');

exports.insertTypeLog = function(request, response){
	moduleClient.Client.findByIdAndUpdate(request.params.clientId, { $push: { "types_log":{code:request.body.code,name:request.body.name} }},function(error, data){
	    if(error){
	      response.status(400).json({message:error.message});
	    } else {
	      response.status(201).json(data);
	    }
	  });
}

exports.editTypeLog = function(request, response){   
	moduleClient.Client.update({ _id: request.params.clientId , 'types_log._id':request.body._id}, {$set:{'types_log.$.code':request.body.code,'types_log.$.name':request.body.name }},function(error, data){
		  
	    if(error){
	    	response.status(400).json(error);
	    } else {
	    	moduleLog.Log.update({'type_log._id':request.body._id}, {$set:{'type_log.code':request.body.code,'type_log.name':request.body.name }},{multi: true},function(errorType, dataType){
    			if(error){
    			    response.status(400).json(errorType);
    			}
    		});
	    	response.status(201).json(data);
	    }
  }); 
} 

exports.listTypeLog = function(request,response){	
	moduleClient.Client.find({ _id: request.params.clientId, 'types_log.ativo':true},'types_log -_id', function(error, data){
		  
		   if(error || data.length ==0){
		       	response.status(201).json({result: false});
		    } else {
		    	var types = data[0].types_log.filter(function (obj) {
		    		if(obj.ativo==true){
		    			return true;
		    		}else{
		    			return false;
		    		}
				}); 
		    	
		    	response.status(201).json(types);
		    }
	 }); 
}

exports.removeTypeLog = function(request, response){

	moduleClient.Client.update({ _id: request.params.clientId , 'types_log._id':request.body.id}, {$set:{'types_log.$.ativo': false}} ,function(error, data){  
	    if(error){
	    	response.status(400).json(error);
	    } else {
	    	response.status(201).json(data);
	    }
  });
}