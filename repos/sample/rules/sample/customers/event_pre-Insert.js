// With this rule in place, we can post an empty {} json to the Customer table and it will not fail for the missing primary key.

logicContext.logDebug("PreInsert-PreInsertEvent name::" + row.name);
if (row.name === null) {
  row.name="Customer" + Math.floor(Math.random() * 200000);
}
if(!row.credit_limit){
  row.credit_limit =100;
}
logicContext.logDebug("PreInsert-PreInsertEvent name::" + row.name);