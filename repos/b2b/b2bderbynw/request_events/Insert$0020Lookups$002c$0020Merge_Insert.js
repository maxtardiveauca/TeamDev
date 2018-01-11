var actions = [
	{resource: "PartnerOrder", path: "$..Product", insertActions: "LOOKUP"},
	{resource: "PartnerOrder", path: "Shipper",    insertActions: "LOOKUP"},
	{resource: "SupplierSelfService", path: "",    insertActions: "MERGE_INSERT"}
];
json = insertActions.insertActions(req, json, actions);  // API Server processes this...
// log.debug("requestEvent json: " + json);
