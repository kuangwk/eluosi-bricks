let B = require('./brick');
let $ctn = $('#container');
let b = new B($ctn, 12, 10, 30);
var inv = setInterval( ()=> {
    b.down();
}, 1000);
window.i = inv;