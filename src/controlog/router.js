var express = require('express');
var router = express.Router();
//Rotas de Aplicação
var controllerApp = require('./controllers/application-controller');

router.post('/v1/clients/:clientId/application/add', controllerApp.insertApplication);
router.put('/v1/clients/:clientId/application/edit', controllerApp.editApplication);
router.put('/v1/clients/:clientId/application/remove', controllerApp.removeApplication);
router.get('/v1/clients/:clientId/application/', controllerApp.listApplication);

//Rotas de Log
var controllerLog = require('./controllers/log-controller');

router.post('/v1/clients/:clientId/application/:appId/events', controllerLog.listLog);
router.get('/v1/clients/:clientId/application/:appId/events?', controllerLog.listLog);

/**
 * @api {POST} /v1/clients/:clientId/log/add Insere um novo log.
 * @apiVersion 1.0.0
 * @apiGroup Log
 * @apiHeader Authorization Basic Access Authentication token.
 * @apiHeader Content-Type Application/json
 * @apiParam {Integer} Client ID.
 * 
 * 
 *  * @apiExample Example usage:
 *     endpoint: http://controlog-node.herokuapp.com/v1/clients/570d870f5596d00300c7b1c5/log/add
 *
 *     body:
 *     {
 *     	"date_time": "2015-12-07 15:23:42",
 *	    "message": "Description of log",
 *	    "application": {
 *		     "code": "1"
 *	     },
 *    	"type_log": {
 *		     "code": "1"
 *    	}
 *    }
 *
 * @apiParam {Object} Log object.
 * 
 *  @apiSuccess {json} Insert log 
 *  @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 201 OK
 *    {
 *     "__v": 0,
 *     "_id": "572a7c409afbb5e803ee8984",
 *     "date_time": "2015-12-07T15:23:42.000Z",
 *     "message": "Description of log",
 *     "application": {
 *        	"_id": "570d870f5596d00300c7b1c5",
 *          "name": "Name from Application ",
 *          "code": "1"
 *      },
 *      "type_log": {
 *      	"_id": "570ec89db285c703004f2cbf",
 *      	"name": "Name from type log",
 *      	"code": "1"
 *      }
 *    }
 */
router.post('/v1/clients/:clientId/log/add', controllerLog.insertLog);

//Rotas de Tipo de Log
var controllerTypeLog = require('./controllers/type-log-controller');
router.post('/v1/clients/:clientId/typeLog/add', controllerTypeLog.insertTypeLog);
router.put('/v1/clients/:clientId/typeLog/remove', controllerTypeLog.removeTypeLog);
router.put('/v1/clients/:clientId/typeLog/edit', controllerTypeLog.editTypeLog);
router.get('/v1/clients/:clientId/typeLog/list', controllerTypeLog.listTypeLog);

//Rotas de Cliente
var controllerClient = require('./controllers/client-controller');
router.post('/v1/clients/add', controllerClient.insertClient);
router.put('/v1/clients/edit', controllerClient.editClient);
router.post('/v1/clients/login', controllerClient.loginClient);
router.post('/v1/clients/recoverPassword', controllerClient.recoverPassword);

module.exports = router;