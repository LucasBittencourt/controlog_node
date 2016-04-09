var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TypelogSchema = new Schema({
  code: {
	index: { unique:true },
    required: [true, 'Código deve ser preenchido!'],
    type: String
  },
  name: {
    required: [true, 'Nome deve ser preenchido'],
    type: String
  },
  ativo:{
	  type: Boolean,
	  default: true
  }
});

exports.TypeLog = mongoose.model('Typelog', TypelogSchema);