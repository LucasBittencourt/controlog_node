var module = require('../models/client-schema');

exports.insertApplication = function(request, response){
	
	module.Client.findByIdAndUpdate(request.params.clientId, { $push: { "applications":{code:request.body.code,name:request.body.name} }} ,function(error, data){
    if(error){
      response.status(400).json({message:error.message});
    } else {
      response.status(201).json(data);
    }
  });
}

exports.editApplication = function(request, response){

	module.Client.update({ _id: request.params.clientId , 'applications._id':request.body._id}, {$set:{'applications.$.code':request.body.code,'applications.$.name':request.body.name }},function(error, data){
		  
	    if(error){
	    	response.status(400).json(error);
	    } else {
	    	response.status(201).json(data);
	    }
  }); 
}

exports.listApplication = function(request,response){
	module.Client.find({ _id: request.params.clientId, 'applications.ativo':true},'applications -_id', function(error, data){
	  
	   if(error || data.length ==0){
	       	response.status(201).json({result: false});
	    } else {
	    	var apps = data[0].applications.filter(function (obj) {
	    		if(obj.ativo==true){
	    			return true;
	    		}else{
	    			return false;
	    		}
			}); 
	    	
	    	response.status(201).json(apps);
	    }
 }); 
}

exports.removeApplication = function(request, response){
	module.Client.update({ _id: request.params.clientId , 'applications._id':request.body.id}, {$set:{'applications.$.ativo': false}} ,function(error, data){  
	    if(error){
	    	response.status(400).json(error);
	    } else {
	    	response.status(201).json(data);
	    }
  }); 
}