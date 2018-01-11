// Listener code goes here or check out examples ( see top right dropdown menu ) 
log.debug(" Message "+ message);
var connectionName = "MQTTConnection";
var topic ="lacresponse";
var options = null;
var m = {"message": message.toString() };
try {
  var success = listenerUtil.publishMessage(connectionName,topic,m,options);
  log.debug(success);
}
catch(e){
  log.error('Error publishing message: ' + e);
}
