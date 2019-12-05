'use strict'
const logModule = require('./log');
function httpLogger(request, response, pathToSaveLogFile){

    logModule(pathToSaveLogFile, 'http_logger', `Request recived for pathname ${request.url}`);
}
module.exports = httpLogger;