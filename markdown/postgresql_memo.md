# postgresql 
## place
cd /usr/local/var/postgres/

## pg commander 接続先
### host
127.0.0.1 
### port
5432
### database
postgres

## 起動
$ pg_ctl -D /usr/local/var/postgres -l ~/postgres.log start

## 接続前 （データベース一覧）
$ psql -l

## 接続
$ psql -d postgres

## psql内
### version
`#select version();`

### ユーザー一覧
`# \du`

### データベース一覧
`# \l`


## sample
```
create table daily_money_report(
  user_id VARCHAR(256) NOT NULL,
  day_cache VARCHAR(256) NOT NULL,
  published_on DATE NOT NULL
);
```

```
insert into daily_money_report ( user_id,day_cache, published_on) values ('massan','340000',NOW())

```


## node + psotgres sample
### 1

```
var pg = require('pg');
var conString = "tcp://{userId:{password}@localhost:5432/postgres";

pg.connect(conString, function (err, client) {
    if (err) {
        console.log(err);
    } else {
        client.query('SELECT * from {table_name}', function (err, result) {
            console.log("Row count: %d", result.rows.length);
            for (i = 0; i < result.rows.length; i++) {
                console.log(result.rows[i].user_id + ", " + result.rows[i].day_cache);
            }
            client.end();
        });
    }
});

```

### 2

```
var pg = require('pg');
var conString = "tcp://{userId:{password}@localhost:5432/postgres";

pg.connect(conString, function (err, client) {
    if (err) console.log(err);
    var query = client.query('SELECT * from table_name');
    query.on('row', function(row) {
        console.log('user "%s" is %d years old', row.user_id, row.day_cache);
    });
    query.on('end', function(result) {
        console.log(result.rowCount + ' rows were received');
        client.end();
    });
});

```

### 3 (connection pool 編)

```
var config = {
    user: '', //env var: PGUSER
    database: '', //env var: PGDATABASE
    password: '', //env var: PGPASSWORD
    host: '', // Server hosting the postgres database
    port: , //env var: PGPORT
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};

var Pool = require('pg').Pool;
var pool = new Pool(config);
pool.connect(function(err, client, release) {
    // TODO - you'll want to handle the error in real code

    if (err) console.log(err);
    var query = client.query('SELECT * from daily_money_report');
    query.on('row', function(row) {
        console.log('user "%s" is %d years old', row.user_id, row.day_cache);
    });
    query.on('end', function(result) {
        console.log(result.rowCount + ' rows were received');
        client.end();
    });
});

```



## 参考
http://qiita.com/mm36/items/1801573a478cb2865242