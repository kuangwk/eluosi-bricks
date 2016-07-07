define('js/brick.es6', function(require, exports, module) {

  "use strict";
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  var Bricks = (function () {
      function Bricks($ctn) {
          var x = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
          var y = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
  
          _classCallCheck(this, Bricks);
  
          var tpl = this.getTpl();
          $ctn.append(tpl);
      }
  
      _createClass(Bricks, [{
          key: "getTpl",
          value: function getTpl() {
              return "<div class='brick'></div>";
          }
      }]);
  
      return Bricks;
  })();
  
  module.exports = Bricks;

});
