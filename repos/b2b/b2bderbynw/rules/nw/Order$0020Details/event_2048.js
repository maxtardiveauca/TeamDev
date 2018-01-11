var product = row.Products;    // role accessor
var supplier = product.Suppliers;
if (supplier.URL !== null ) 
    B2B.putPropertyMap(logicContext, "order.supplierHooks", supplier.CompanyName, supplier.URL);