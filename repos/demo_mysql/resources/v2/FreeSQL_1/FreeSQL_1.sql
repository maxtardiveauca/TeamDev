SELECT sum(`amount_total`) as SUM_AMOUNT
-- Comment from Max
      ,`salesrep_id`
  FROM `@{CATALOG}`.`PurchaseOrder` o
 inner join `@{CATALOG}`.`LineItem` i
    on o.`order_number` = i.`order_number`
 where `paid` = 1
   and i.`product_number` in
  (SELECT l.`product_number`
     FROM `@{CATALOG}`.`LineItem` l
    group by l.`product_number`
   having count(*) > 20)
 group by `salesrep_id`