var now = new Date();
row.ts = SysUtility.databaseNowDeferred();
row.ts_hour = now.getHours();
row.ts_day = now.getDate();
row.ts_month = now.getMonth() + 1;
