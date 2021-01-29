class BaseClass {
    constructor(x, y, width, height, angle) {
      var options = {
        'density':1.2,
        'friction': 1.3,
        'restitution':0.5
      };
      this.image = loadImage ("sprites/base.png");
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = width;
      this.height = height;
      this.angle = angle;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      //pos.x = mouseX;
      //pos.y = mouseY;
      var angle = this.body.angle;
  
      push();
      angleMode (RADIANS);
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('blue')
      fill('red')
      //rectMode(CENTER)
      //rect(0, 0, this.width, this.height);
      imageMode (CENTER);
      image (this.image, 0,0, this.width, this.height);
      pop();
    };
  };
