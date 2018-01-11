// Getting the string equivalent of the message.
var messageContent = message.toString();
// Create the payload
var messageAudit = {};
var date  = new Date();
messageAudit.date = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' +  date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
messageAudit.message = messageContent;
// Insert the payload into the audit table
var resourceURL = 'http://localhost:8080/APIServer/rest/default/demo_mysql/v1/demo:message_audit';
var parms = {};
var settings = { 'headers': {'Authorization' : 'CALiveAPICreator demo_full:1'}};
var postResponse = listenerUtil.restPost(resourceURL, parms, settings, messageAudit);
log.debug(postResponse);
log.debug('Logged '+messageAudit+' into message_audit table.');
// Listener code goes here or check out examples ( see top right dropdown menu ) 
