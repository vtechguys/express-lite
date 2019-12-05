'use strict'

// Router Handler
const routerHandlers = {}; // records all routes
function registerRoute(pathname, handle) {
    routerHandlers[pathname] = handle;
}
function getAllRoutes() {
    return routerHandlers;
}
//route methods
function post(pathname, handler) {
    const completePathNameIncludingMethod = pathname + '_POST';
    registerRoute(completePathNameIncludingMethod, handler);
}
function get(pathname, handler) {
    const completePathNameIncludingMethod = pathname + '_GET';
    registerRoute(completePathNameIncludingMethod, handler);
}
//route
function route(handle, pathname, request, response) {
    let compeltePathNameIncludingMethod = pathname + '_' + request.method;


    if (typeof handle[compeltePathNameIncludingMethod] !== "function") {
        throw new Error('Request handler required for pathname' + pathname);
    }
    else {
        handle[compeltePathNameIncludingMethod](request, response);
    }
}

module.exports = {
    post, 
    get,
    getAllRoutes,
    route
};