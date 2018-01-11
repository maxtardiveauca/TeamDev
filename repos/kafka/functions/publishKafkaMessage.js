log.debug("Kafka Publish Function");
var connectionName = "KafkaProducerConnection";
//var exists = SysUtility.getConnection(connectionName);
//if(!exists || !exists.length) {
//    throw "Connection does not exist "+connectionName;
//}
var partition = parameters.partition || 0; //default
var topic = parameters.topic;
var options = {key: 'myKey',partition: 0};
var m = parameters.message;
try {
  var response = SysUtility.publishMessage(connectionName,topic,m,options);
  log.debug(JSON.stringify(response));
  log.debug("Publish Message to KafkaProducerConnection");
}
catch(e) {
  log.error("Error while publishing message:" + e);
}
return {publishIsSuccess: true};
