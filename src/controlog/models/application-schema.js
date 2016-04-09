var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ApplicationSchema = new Schema({
  code: {
	index: { unique:true },
    required: [true, 'Código deve ser preenchido!'],
    type: String
  },
  name: {
    required: [true, 'Nome deve ser preenchido'],
    type: String
  },
  clientId: {
	required: [true, 'Id do Cliente é Obrigatório'],
	type: String
  },
  ativo:{
	type: Boolean,
	default: true
  }
});
exports.Application = mongoose.model('Application', ApplicationSchema);