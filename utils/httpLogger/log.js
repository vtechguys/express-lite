'use strict'

const fs = require('fs');
const path = require('path');
const writeOptions = {
    flags: 'a'  // appending flag
};

function log(pathTo, loggerType, logData) {
    const fileName = loggerType + '.log';
    const stream = fs.createWriteStream(path.join(pathTo, fileName), writeOptions);
    const dataLog = ( ( new Date() ).toISOString() ) + ' ' + logData + '\n';
    stream.write(dataLog);
    stream.end();
}
module.exports = log;