'use strict'
const url = require('url');
function route(handle, pathname, request, response){
    let compeltePathNameIncludingMethod = pathname + '_' + url.parse( request.url ).pathname.toUpperCase();

    if(typeof handle[compeltePathNameIncludingMethod]!== "function"){
        throw new Error('Request handler required for pathname' + pathname);
    }
    else{
        handle[compeltePathNameIncludingMethod](request, response);
    }
}
module.exports = route;