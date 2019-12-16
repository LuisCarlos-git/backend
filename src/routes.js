const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const routes = express.Router();
const upload = multer(uploadConfig)

const sessionController = require('./controllers/sessionController');
const spotController = require('./controllers/spotController');

routes.post('/session', sessionController.store );
routes.get('/spots', spotController.index );
routes.post('/spots', upload.single('thumbnail'), spotController.store );

module.exports = routes;