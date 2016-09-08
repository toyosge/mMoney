var Pool = require('pg').Pool;
var Config = require('../../config.js');
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


exports.insertCreditEstimate = function (userId, dayCache) {
    var queryPrefix = "INSERT INTO daily_money_report (user_id, day_cache) VALUES (";
    var queryExecute = queryPrefix + surroundSingleQuote(userId) + "," + dayCache + ")";

    pool.connect(function (err, client, release) {
        if (err) console.log(err);
        var query = client.query(queryExecute);
        query.on('end', function (result) {
            //        console.log(result.rowCount + ' rows were received');
            client.end();
        });
    });
};

