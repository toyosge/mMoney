var pg = require('pg');
var Pool = pg.Pool;
var Config = require("../../config.js");
var pool = new Pool(Config.PostgresConfig);

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
        var query = client.query('SELECT day_cache from daily_money_report where user_id=' + surroundSingleQuote(userId) + 'ORDER BY published_on DESC LIMIT 1');
        query.on('row', function (row) {
            console.log('%s円', row.day_cache);
            return row.day_cache;
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
    var queryExecute = queryPrefix + surroundSingleQuote(userId) + "," + surroundSingleQuote(dayCache) + "," + date +  ")";
    console.log(queryExecute);

    pool.connect(function (err, client, release) {
        if (err) console.log(err);
        var query = client.query(queryExecute);
        query.on('row', function (row) {
        });
        query.on('end', function (result) {
            client.end();
        });
    });
};