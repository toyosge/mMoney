/**
 *
 */

var https = require('https');
var querystring = require('querystring');
var Config = require("../config.js");

var service = require("./service/execute.js");

var options = {
    hostname: 'typetalk.in',
    path: '/api/v1/topics/' + Config.TypetalkConfig.topicId + '?typetalkToken=' + Config.TypetalkConfig.token,
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};
var req = https.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
    });
});


// 外だしして、コールバック地獄にしてやる。
// sqlはしってから、postするように変えたい
var money = service.getPayMoney("massan");
console.log("this:"+ money);

req.write(querystring.stringify({'message': 'This month cost is ' + money +  ' yen' }));
req.end();

