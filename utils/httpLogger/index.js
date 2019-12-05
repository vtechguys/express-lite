'use strict'
const logModule = require('./log');
const url = require('url');
function httpLogger(request, response, pathToSaveLogFile){
    const urlLog = url.parse(request.url).pathname;
    logModule(pathToSaveLogFile, 'http_logger', `Requested pathname ${urlLog}`);
}
module.exports = httpLogger;