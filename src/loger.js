var auth = require('basic-auth')
var sha1 = require('node-sha1');

var loger = function(req,res,next){
	var module = require('./controlog/models/client-schema');
	var user = auth(req);

	if(user.pass){
		user.pass = sha1(user.pass);
	}
	module.Client.find({ email: user.name, password: user.pass }, function(error, data){
		if(error || data.length ==0){
			res.status(500).send('Autenticação Inválida!');
		} else {
			next();
		}
	});
}

module.exports = loger;