var pg = require('pg');
var Pool = pg.Pool;
var config = {
    user: 'masahirayamamoto', //env var: PGUSER
    database: 'postgres', //env var: PGDATABASE
    password: 'zxdtih25', //env var: PGPASSWORD
    host: 'localhost', // Server hosting the postgres database
    port: 5432, //env var: PGPORT
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};
//var pool = new Pool(config);


var surroundSingleQuote = function (value) {
    return "\'" + value + "\'";
};


exports.selectFromTable = function () {
    pool.connect(function (err, client, release) {
        if (err) console.log(err);
        var query = client.query('SELECT * from daily_money_report');
        query.on('row', function (row) {
            console.log('user "%s" が使った %d円はぶっちゃけ使いすぎだと思うんだ', row.user_id, row.day_cache);
        });
        query.on('end', function (result) {
//            console.log(result.rowCount + ' rows were received');
            client.end();
        });
    })
};

exports.findByUserId = function (userId) {
    pool.connect(function (err, client, release) {
        if (err) console.log(err);
        var query = client.query('SELECT day_cache from daily_money_report where user_id=' + surroundSingleQuote(userId) + 'LIMIT 1');
        query.on('row', function (row) {
            console.log('%d円', row.day_cache);
        });
        query.on('end', function (result) {
//            console.log(result.rowCount + ' rows were received');
            client.end();
        });
    })
};


// insert into daily_money_report (user_id,day_cache, published_on) values ('massan','340000',NOW())
exports.insertCreditEstimate = function (userId, dayCache) {
    var date = "NOW()";
    var queryPrefix = "INSERT INTO daily_money_report (user_id, day_cache, published_on) VALUES (";
    var queryExecute = queryPrefix + surroundSingleQuote(userId) + "," + dayCache + "," + date +  ")";

//    pool.connect(function (err, client, release) {
//        if (err) console.log(err);
//        var query = client.query(queryExecute);
//        query.on('end', function (result) {
//            //        console.log(result.rowCount + ' rows were received');
//            client.end();
//        });
//    });

    var conString = "tcp://masahirayamamoto:zxdtih25@localhost:5432/postgres";
    pg.connect(conString, function (err, client) {
        if (err) console.log(err);
        var query = client.query(queryExecute);
        query.on('row', function(row) {
//            console.log('user "%s" is %d years old', row.user_id, row.day_cache);
        });
        query.on('end', function(result) {
//            console.log(result.rowCount + ' rows were received');
            client.end();
        });
    });
};