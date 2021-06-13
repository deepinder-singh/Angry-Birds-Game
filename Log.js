
class Log extends BaseClass {
    constructor(x, y, h, angle) {
      super(x, y, 20, h, angle);
      this.image = loadImage('sprites/wood2.png');
      Matter.Body.setAngle(this.body, angle);
    }
  
    display() {
      super.display();
    }
  }