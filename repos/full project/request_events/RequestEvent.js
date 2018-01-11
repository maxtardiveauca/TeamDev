// Requires insertActions.js & jsonpath-0.8.0.js, from B2B example quick install
var actions = [
    { resource: "PartnerOrder", path: "$..Product", insertActions: "LOOKUP" },
    { resource: "PartnerOrder", path: "Shipper",    insertActions: "LOOKUP" },
    { resource: "SupplierSelfService", path: "",    insertActions: "MERGE_INSERT" }
];
json = insertActions.insertActions(req, json, actions);  // API Server processes this...

