var Nightmare = require('nightmare');
var nightmare = Nightmare({'show': false});
var Config = require('./config.js');
var service = require('./app/service/execute.js');

nightmare
    .goto(Config.AccessConfig.targetUrl)
    .type('#userid', Config.AccessConfig.userId)
    .type('#password', Config.AccessConfig.userPass)
    .click("input[type=\"image\"]")
    .wait('#vp_alcor_view_Label_7')
    .evaluate(function () {
        console.log("hello");
        return document.querySelector('#vp_alcor_view_Label_7').textContent
    })
    .end()
    .then(function (result) {
        console.log(result);
        service.addedPayMoney("massan", result);
        console.log("https://wwws.jp-bank.japanpost.jp/credit1/service/point/point.html");
    })
    .catch(function (error) {
        console.error('Search failed:', error);
    });
