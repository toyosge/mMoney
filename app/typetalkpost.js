/**
 *
 */

var https = require('https');
var querystring = require('querystring');
var Config = require("../config.js");

exports.typetalkPost = function (postMessage) {

    var options = {
        hostname: 'typetalk.in',
        path: '/api/v1/topics/' + Config.TypetalkConfig.topicId + '?typetalkToken=' + Config.TypetalkConfig.token,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };
    var req = https.request(options, function (res) {
        console.log('STATUS: ' + res.statusCode);
        res.on('data', function (chunk) {
            console.log('BODY: ' + chunk);
        });
    });

    req.write(querystring.stringify({'message': postMessage }));
    req.end();

};
