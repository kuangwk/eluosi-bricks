let B = require('./brick');
let $ctn = $('#container');
let b = new B($ctn, 12, 10, 30);

function prevent(e) {
    e.stopPropagation();
    e.preventDefault();
}


$ctn.swipeDown((e)=>{prevent();b.down()})
    .swipeUp((e)=>{prevnt(); b.up()})
    .swipeLeft((e)=>{prevnt(); b.left()})   
    .swipeRight((e)=>{prevnt(); b.right()})