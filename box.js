class Box1{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Matter.Bodies.rectangle(x, y, 60, 60, options);
        this.width = 60;
        this.height = 60;
        this.image = loadImage("box1.png");
        Matter.World.add(world, this.body);
      }
      display(){
        if(this.body.position.y<610){
          var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          imageMode(CENTER);
          image(this.image, 0, 0, this.width, this.height);
          pop();
        }
        else{
          Matter.World.remove(world,this.body);
    
        }
        
      }
}