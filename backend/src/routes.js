const express = require('express');

const SessionController = require('./controllers/SessionController');
const UserController = require('./controllers/UserController');
const ProfileController = require('./controllers/ProfileController');
const ToolController = require('./controllers/ToolController');

const routes = express.Router();

routes.post('/sessions', SessionController.index);

routes.get('/users', UserController.index);
routes.post('/users', UserController.create);

routes.get('/profile', ProfileController.index);

routes.get('/tools', ToolController.index);
routes.post('/tools', ToolController.create);
routes.delete('/tools/:id', ToolController.delete);

module.exports = routes;