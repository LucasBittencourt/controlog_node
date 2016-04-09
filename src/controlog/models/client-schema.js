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


var ClientSchema = new Schema({
  
  name: {
    required: [true, 'Nome deve ser preenchido'],
    type: String
  },
  type_doc: {
	   enum: ['CPF', 'CNPJ', 'OUTROS'],
	    required: [true, 'Tipo de documento deve ser preenchido'],
	    type: String
  },
  document: {
	  required: [true, 'Documento deve ser preenchido'],
	  type: String
  },
  
  email: {
	  unique: true,
	  required: [true, 'Email deve ser preenchido'],
	/*  validate: [validateEmail, 'e-mail inválido'],*/
	  type: String
  },
  password: {	   
	  required: [true, 'Senha deve ser preenchido'],
	  minlength: [8, 'Senha deve conter no mínimo 8 caracteres'], 
	  type: String
  },
  applications: [ApplicationSchema],
  types_log: [TypelogSchema]
});





var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

exports.Client = mongoose.model('Client', ClientSchema);