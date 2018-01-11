var connectionName = "KafkaProducerConnection";
var topic ="test";
var options = {partition: 0};
var msg = '{"message": "CA Live API Creator is ALIVE!" }'; //must be a string
try {
  var response = timerUtil.publishMessage(connectionName,topic,msg,options);
  if(!response.isSuccess) {
    throw "Timer failed to publish to KafkaProducer using connection "+connectionName;
  }
}
catch(e){
  log.debug('Exception while publishing message: ' + e);
}

log.debug("MyTimer has called publishMessage to KafkaProducer topic: test");
