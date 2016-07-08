define('dist/static/js/brick', function(require, exports, module) {

  define('js/brick', function(require, exports, module) {
  
    class Bricks  {
        constructor ($ctn=$('body'), x=0, y=0, size=10) {
            this.x = x
            this.y = y
            this.size = size
            this.$ctn = $ctn
            this.id = 'b_' + (+new Date());
            this.append();
            console.log('this.elt', this.$ele);
        }
        append () {
            let tpl = this.getTpl();
            this.$ctn.append(tpl);
            this.$ele = this.$ctn.find(`#${this.id}`);
        }
        getTpl () {
            return `<div class='brick' id="${this.id}" style="
                       top: ${this.x * this.size}px;
                       left: ${this.y * this.size}px;
                       width: ${this.size}px;
                       height: ${this.size}px;
                       "></div>`
        }
        down () {
            this.x++;
            this.$ele.css({
                top: this.x * this.size + 'px'
            })
        }
    }
    
    module.exports = Bricks
  
  });
  

});
