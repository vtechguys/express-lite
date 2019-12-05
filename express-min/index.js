const http = require('http');
const url = require('url');


const routerModule = require('./router');


function onRequest(request, response) {
    const pathname = url.parse(request.url).pathname;
    routerModule.route(routerModule.getAllRoutes(), pathname, request, response);


}

function expressLite() {
    const server = http.createServer(onRequest);
    function listen(port, callback = () => { }) {
        server.listen(port, callback);
    }
    function useMiddleware(middlewareFunction = ( ) => { }, ...argumentsToMiddlewareFunction){
        if(typeof middlewareFunction !== "function"){
            throw new Error("Middleware is needs to be a function.");
        }
        server.on('request', function middlewareFunctionWrapper(request, response){
            middlewareFunction(request, response, ...argumentsToMiddlewareFunction);
        });
    }
    // app
    return {
        listen,
        useMiddleware
    };
}
expressLite.Router = function Router(){
    return {
        get: routerModule.get, 
        post: routerModule.post
    };
}
module.exports = expressLite;