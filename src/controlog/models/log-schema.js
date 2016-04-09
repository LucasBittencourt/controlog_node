var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ApplicationSchema = new Schema({
	
	  code: {
	    required: [true, 'Código deve ser preenchido!'],
	    type: String,
	  	default: '0'
	  },
	  name: {
	    required: [true, 'Nome deve ser preenchido'],
	    type: String,
	  	default: ''
	  },
	  ativo:{
		type: Boolean,
		default: true
	  }
});

var TypelogSchema = new Schema({
	  code: {
	    required: [true, 'Código deve ser preenchido!'],
	    type: String,
	  	default: '0'
	  },
	  name: {
	    required: [true, 'Nome deve ser preenchido'],
	    type: String,
	  	default: ''
	  },
	  ativo:{
		  type: Boolean,
		  default: true
	  }
});

var LogSchema = new Schema({
	
	date_time : {
		required : [ true, 'Data e hora da criação do log  é obrigatório' ],
		type: Date,
		default: Date.now
	},
	message : {
		 required : [ true, 'Mensagem é obrigatório' ],
		 type : String
	},
	application : ApplicationSchema
	,
	type_log : TypelogSchema
});

exports.Log = mongoose.model('Log', LogSchema);