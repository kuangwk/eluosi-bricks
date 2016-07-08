define('js/main', function(require, exports, module) {

  let B = require('js/brick');
  let $ctn = $('#container');
  let b = new B($ctn, 12, 10, 30);
  
  $('body').on('touchmove', function (event) {event.preventDefault();});
  
  function prevent(e) {
      e.stopPropagation();
      e.preventDefault();
  }
  
  
  $ctn.swipeDown((e)=>{prevent(e);b.down()})
      .swipeUp((e)=>{prevent(e); b.up()})
      .swipeLeft((e)=>{prevent(e); b.left()})   
      .swipeRight((e)=>{prevent(e); b.right()})

});
