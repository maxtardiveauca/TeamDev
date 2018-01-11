select * from "SAMPLE"."orders" where "ident" not in
 (select o."ident" from "SAMPLE"."orders" o
 join "SAMPLE"."lineitems" l on l."order_ident" = o."ident"
 left join "SAMPLE"."products" p on p."name" = l."product_name"
 where p."is_secret" = true)