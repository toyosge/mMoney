/**
 * Created by masahirayamamoto on 2016/09/04.
 */

var https = require('https');
var querystring = require('querystring');

var options = {
    hostname: 'typetalk.in',
    path: '/api/v1/topics/16738?typetalkToken=wIxFtsQHo5osA6WJLlzKgqJvlXpaz8nsOITI73F7wuSRiw516d99l4a7aaVpToKc',
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
req.write(querystring.stringify({'message': 'Hello, Typetalk!'}));
req.end();

