let B = require('./brick');
let $ctn = $('#container');
let b = new B($ctn, 12, 10, 30);

$ctn.swipeDown((e)=>{e.stopPropagation();b.down()})
    .swipeUp((e)=>{e.stopPropagation();b.up()})
    .swipeLeft((e)=>{e.stopPropagation();b.left()})   
    .swipeRight((e)=>{e.stopPropagation();b.right()})