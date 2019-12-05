'use strict'

function route(handle, pathname, request, response){
    let compeltePathNameIncludingMethod = pathname;
    
    if (request.method === "GET") {
        compeltePathNameIncludingMethod + '_get';
    }
    else if(request.method === "POST"){
        compeltePathNameIncludingMethod + '_post';

    }


    if(typeof handle[compeltePathNameIncludingMethod]!== "function"){
        throw new Error('Request handler required for pathname' + pathname);
    }
    else{
        handle[compeltePathNameIncludingMethod](request, response);
    }
}
module.exports = route;