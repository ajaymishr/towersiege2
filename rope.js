class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling3=loadImage("sling3.png");
        this.pointB = pointB
        this.sling = Matter.Constraint.create(options);
        Matter.World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA=body;
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(48,22,8)
            strokeWeight(5);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
            image(this.sling3,pointA.x-30,pointA.y-10,15,30)
            pop();
        }
    }
    
}