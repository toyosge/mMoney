var casper = require('casper').create();

casper.start();
casper.open('http://nodejs.jp/');


//casper.then(function() {
//    this.click("#mailinglist > ul > li:nth-child(1) > a");
//});

//casper.start('http://nodejs.jp/', function() {
//    var hoge = this.getElementAttribute("#logo", 'alt');
//    console.log("hoge is :" + hoge);
//});

casper.then(function () {
    //casper.fetchText("#header > a > h1");
//    var hoge = this.getElementAttribute("#logo", 'alt');
    var hoge = this.getElementInfo("#header > a > h1").text;
    console.log("hoge is :" + hoge);
});



//casper.then(function () {
//    casper.capture("nodejs.png");
//});

casper.run();