let B = require('./brick');
let $ctn = $('#container');
let b = new B($ctn, 12, 10, 30);

$ctn.swipeDown(function() {
    b.down();
})