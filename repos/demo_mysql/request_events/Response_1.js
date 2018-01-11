log.debug(req.resourceName);
if(req.resourceName == 'MongoDB_1') {
    var data = json;  // json from the request
    if (Array.isArray(data) && data.length > 0) {
           var resp = data[0];
           for ( var i = 0; i < resp.length; i ++) {
                delete resp[i]["_id"];
           }
           json = resp;
    }
}
