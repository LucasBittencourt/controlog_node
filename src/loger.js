var auth = require('basic-auth')
var sha1 = require('node-sha1');

var loger = function(req,res,next){
	var module = require('./controlog/models/client-schema');
	var user = auth(req);
 //TODO hack para passar sem autenticar. Remover isso
	if(req.originalUrl.search( /\/clients\/login/g ) != -1 || req.originalUrl.search( /\/clients\/add/g ) != -1){
		next();
	}else{
		if(user){
			if (req.originalUrl.search( /\/log\/add/g ) != -1) {
				user.pass = sha1(user.pass);
			}
			module.Client.find({ email: user.name, password: user.pass }, function(error, data){
				if(error || data.length ==0){
					res.status(500).send('Autenticação Inválida!');
				} else {
					next();
				}
			});
		}else{
			res.status(500).send('Autenticação Inválida!');
		} 
	}
}

module.exports = loger;