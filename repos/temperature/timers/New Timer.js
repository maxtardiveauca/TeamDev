
var payload = {
  "temperature" : 78
};
var params = {
    
};
var url = "http://localhost:8080/rest/default/avmuy/v1/main:Readings";
var settings = { "headers": {"Authorization" :  "CALiveAPICreator fVqM22lI6FNR9pDi04Tk:1"}};
var json = timerUtil.restPost(url,params, settings, payload);
var responseObject = JSON.parse(json);
log.debug("The response   is: " + json);
