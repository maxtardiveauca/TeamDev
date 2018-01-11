// Get the full URL of the resource.
var url = req.fullBaseURL;
var domain = url.replace("http://","").replace("https://","").split(/[/?#]/)[0];
// Allow Origin only from baseURL of the resource.
var corsResponseObject = {
    "Access-Control-Allow-Methods" : "GET,OPTIONS,POST,PUT",
    "Access-Control-Allow-Origin" : "http://"+domain,
    "Access-Control-Allow-Headers" : "authorization,content-type, accept",
    "Access-Control-Max-Age" : 2400 ,
    "HTTPStatusCode" : 200
};

if(req.resourceName === 'demo:PurchaseOrder')
{
    // Restrict access of demo:PurchaseOrder to calls from the same domain
    return corsResponseObject;
}
else{
    // For the other resources, allow access from all origins.
    corsResponseObject["Access-Control-Allow-Methods"] = "GET,POST,OPTIONS";
    corsResponseObject["Access-Control-Allow-Origin"] = "*";
    return corsResponseObject;
}

