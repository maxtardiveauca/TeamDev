var connectionName = "MQTTConnection";
var topic ="lac";
var message = parameters.message || "Got it";
var options = null;
try {
  var success = SysUtility.publishMessage(connectionName,topic,message,options);
  return {message: message};
}
catch(e){
  log.error('Exception while publishing message: ' + e);
}
