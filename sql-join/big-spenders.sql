select
  "payments"."amount",
  "customers"."firstName",
  "customers"."lastName"
  from "payments"
  join "customers" using ("customerId")
  order by
    "payments"."amount" DESC
    Limit 10;
