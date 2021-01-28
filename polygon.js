class polygon{
    constructor(x, y,sides,radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Matter.Bodies.polygon(x, y, 6, 60, options);
        this.sides = 6;
        this.radius = 60;
        this.image = loadImage("polygon.png");
        Matter.World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius,this.radius);
        pop();
      }
}