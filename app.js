/**
 * When you login to need ssl, you should use following command
 * casperjs --ssl-protocol=tlsv1 app.js
 *
 */

var casper = require("casper").create();
var Config = require('./config.js');

casper.start(Config.AccessConfig.targetUrl, function () {
    this.fillSelectors("form", {
        "input[name='userid']": Config.AccessConfig.userId,
        "input[name='password']": Config.AccessConfig.userPass
    }, false);
});

casper.then(function() {
    this.click("input[type=\"image\"]");
});

casper.waitUntilVisible("#vp_alcor_view_Label_7");


casper.then(function () {
    var targetText = this.getElementInfo("#vp_alcor_view_Label_7").text;
    console.log("your pay money is: " + targetText + "円です。今月もガンバ！！");
//    var Repo = require('./app/repository/daily-money-report.js');
//    Repo.insertCreditEstimate("massan",targetText);

    var Service = require('./execute.js');
    Service.executeQuery();
});

// スクリーンショットもとれるお
//casper.then(function () {
//    casper.capture("shot.png");
//});

casper.run();
