var game = document.getElementById("GameArea");
var context = game.getContext("2d");
function Quadrilateral(width, height, color, x, y, density) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.area = this.width * this.height;
  this.density = density;
  this.mass = this.density * this.area;
  this.weight = this.mass * gravity;
  this.update = function() {
    ctx = game.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
