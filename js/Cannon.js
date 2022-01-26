class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannon_image = loadImage("assets/cannon.png");
    this.cannonbase_image = loadImage("assets/cannonBase.png");
  }
  
  display(){
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.cannon_image, 0, 0, this.width, this.height);
    pop();

    image(this.cannonbase_image, 70, 20, 200, 200);
  }
}
