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