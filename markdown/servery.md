
調査

# 0905
nodejs + postgresql
ついに永続化なのであります。
http://shuzo-kino.hateblo.jp/entry/2015/06/09/234904

# 0901
## selenium
https://techblog.recruitjobs.net/development/geb_test_automation
Javaでいくなら、セレニウムもありかも。

# 0902
## jsoup
https://jsoup.org/
jsoup は Java で HTML の解析・編集を行うためのライブラリ。

## selenium ide
firefoxのアドオンでブラウザの動きを覚えていてくれるらしい
http://qiita.com/showmurai/items/eb9d2a09c584b46727aa

## phantomjs
nodejsでスクレイピングをやるにはこれ
http://tips.hecomi.com/entry/20121229/1356785834

## casperjs
phamtomjsのラッパー


### fbにログインするサンプル

```
var casper = require("casper").create();

casper.start("https://www.facebook.com/", function () {
    this.fillSelectors("form#login_form", {
        "input[name='email']": "あなたのメール",
        "input[name='pass']": "あなたのぱす"
    }, true);
});

//casper.thenEvaluate(function () {
//    document.querySelector("#contentArea form #mentionsInput textarea").textContent = "test";
//    document.querySelector("#pagelet_composer div div div form").submit();
//});

casper.then(function () {
    console.log("10");
    casper.capture("shot.png");
});

casper.run();

```


## nightmarejs 
同じくphamtomjsのラッパー。こちらの方がcaperより新しめ？らしい。

### tips

これだと動かない。

```
var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true })

nightmare
    .goto('http://yahoo.com')
    .wait(1000)
    .screenshot('hoge.png')
    .end();
    
```


chach()がいるっぽい、謎


```
var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true })

nightmare
    .goto('http://yahoo.com')
    .wait(1000)
    .screenshot('hoge.png')
    .end()
    .then()
    .catch(function (error) {
        console.error('screen shot:', error);
    });

```

 