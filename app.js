/**
 * When you login to need ssl, you should use following command
 * casperjs --ssl-protocol=tlsv1 app.js
 *
 */
//var Repo = require('./app/repository/daily-money-report.js');
console.log("1");

var casper = require("casper").create();
console.log("2");

var Config = require('./config.js');
console.log("3");

var Service = require('./execute.js');


console.log("hoge");

casper.start(Config.AccessConfig.targetUrl, function () {
    this.fillSelectors("form", {
        "input[name='userid']": Config.AccessConfig.userId,
        "input[name='password']": Config.AccessConfig.userPass
    }, false);
});

casper.then(function() {
    this.click("input[type=\"image\"]");
});

//クリックしてからロードに時間かかるのでまってみた
casper.wait(5000);

casper.then(function () {
    var targetText = this.getElementInfo("#vp_alcor_view_Label_7").text;
    console.log("your pay money is: " + targetText + "円です。今月もガンバ！！");
    Service.executeQuery();
//    Repo.insertCreditEstimate("massan",targetText);
});

// スクリーンショットもとれるお
//casper.then(function () {
//    casper.capture("shot.png");
//});

casper.run();