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