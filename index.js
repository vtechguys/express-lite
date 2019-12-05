'use strict'

const express = require('./express-min');

const httpLogger = require('./utils/httpLogger');
const path = require('path');

const app = express();
app.useMiddleware(httpLogger, path.join(__dirname, '/logs'));

// these routes get included ... may write a method...
const logs = require('./router/check-log');

// app.registerRoutes( logs ); --- need to create something like this later maybe??

app.listen(5500, function serverStartCb(){
    console.log('Server running');
});

