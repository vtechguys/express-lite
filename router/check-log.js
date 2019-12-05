const express = require('../express-min');
const router = express.Router();

const fs = require('fs');
const path = require('path');

router.get('/log', (request, response) => {
    const fileName = 'http_logger.log';
    const filePath = path.join(__dirname, './../', './logs', fileName);
    fs.exists(filePath, function (exists) {
        if (exists) {
            response.writeHead(200, {
                "Content-Type": "text/plain",
            });
            fs.createReadStream(filePath).pipe(response);
        } else {
            response.writeHead(400, { "Content-Type": "text/plain" });
            response.write('ERROR file doest not exist');
            response.end();
        }
    });
});
module.exports = router;