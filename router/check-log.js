const express = require('../express-min');
const router = express.Router();

router.get('/log', (request, response)=>{
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('hello world');
    response.end();
});
module.exports = router;