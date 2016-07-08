let B = require('./brick');
let $ctn = $('#container');
let b = new B($ctn, 12, 10, 30);

$ctn.swipeDown(()=>{b.down()})
    .swipeUp(()=>{b.up()})
    .swipeLeft(()=>{b.left()})   
    .swipeRight(()=>{b.right()})