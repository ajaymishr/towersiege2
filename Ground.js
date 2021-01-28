class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Matter.Bodies.rectangle(x,y,width,20,options);
      this.width = width;
      this.height = 20;
      this.image=loadImage("ground.jpg")
      Matter.World.add(world, this.body);
    }
    display(){
      push();
      var pos =this.body.position;
      translate(pos.x,pos.y)
      imageMode(CENTER);
      image(this.image,0,0, this.width, this.height);
      pop();
    }
  };
