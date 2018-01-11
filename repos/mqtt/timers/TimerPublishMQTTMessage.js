// Timer code goes here
var connectionName = "MQTTConnection";
var topic ="lacresponse";
var options = null;
var m = {"message": "ALIVE!" };
try {
  var success = timerUtil.publishMessage(connectionName,topic,m,options);
  if(!success) {
      throw "Timer failed to publish to MQTT connection "+connectionName;
  }
}
catch(e){
  log.error('Exception thrown while publishing MQTT message: ' + e);
}
log.debug("My timer has posted a message to MQTT");
