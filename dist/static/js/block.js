define('js/block', function(require, exports, module) {

  let Brick = require('js/brick');
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  var Maps = {
      'line': [{x: 10, y: 0}, {x: 11, y: 0}, {x: 12, y: 0}, {x: 13, y: 0}],
      'z': [{x: 10, y: 0}, {x: 11, y: 0}, {x: 11, y: 1}, {x: 12, y: 1}],
      'tian': [{x: 10, y: 0}, {x: 11, y: 0}, {x: 10, y: 1}, {x: 11, y: 1}],
      'qi': [{x: 10, y: 0}, {x: 11, y: 0}, {x: 12, y: 0}, {x: 12, y: 1}]
  }
  var Keys = ['line', 'z', 'tian', 'qi'];
  
  class Block {
      constructor($ctn) {
          this.$ctn = $ctn;
          this.bricks = this.getBricks(Keys[getRandomInt(0, 3)]);
      }
      getBricks(name) {
          return Maps[name].map((pos)=> new Brick(this.$ctn, pos.x, pos.y));
      }
      down() {
          this.bricks.forEach((brick)=> brick.down());
      }
      up() {
          this.bricks.forEach((brick)=> brick.up());
      }
      left() {
          this.bricks.forEach((brick)=> brick.left());
      }
      right() {
          this.bricks.forEach((brick)=> brick.right());
      }
  }
  
  module.exports = Block

});
