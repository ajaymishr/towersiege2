var bg,ground1,ground2,ground3,engine,world;
var box1,box2;
function preload(){
bg=loadImage("Tech.png")
}
function setup(){
    createCanvas(1550,700);
    engine=Matter.Engine.create();
    world=engine.world;
    textSize(30);
    fill("red");
    stroke("black");
    strokeWeight(3)
    ground1=new Ground(775,690,1550);
    ground2=new Ground(700,600,500);
    ground3=new Ground(1100,300,400);
    box1=new Box1(520,560);
    box2=new Box1(580,560);
    box3=new Box1(640,560);
    box4=new Box1(700,560);
    box5=new Box1(760,560);
    box6=new Box1(820,560);
    box7=new Box1(880,560);
    
    box21=new Box2(580,500);
    box22=new Box2(640,500);
    box23=new Box2(700,500);
    box24=new Box2(760,500);
    box25=new Box2(820,500);

    box8=new Box1(640,440);
    box9=new Box1(700,440);
    box10=new Box1(760,440);

    box26=new Box2(700,380);

    box27=new Box2(980,260);
    box28=new Box2(1040,260);
    box29=new Box2(1100,260);
    box210=new Box2(1160,260);
    box211=new Box2(1220,260);

    box11=new Box1(1040,200);
    box12=new Box1(1100,200);
    box13=new Box1(1160,200);

    box212=new Box2(1100,140)

    poly=new polygon(250,280);
    rope=new SlingShot(poly.body,{x:250,y:280});
    Matter.Engine.run(engine);
}
function draw(){
    background(bg);

    ground1.display();
    ground2.display();
    ground3.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box210.display();
    box211.display();
    box212.display();
    poly.display();
    rope.display();
    text("drag the hexagonal stone and release it, to launch it towards the blocks",10,50);
    if(keyWentDown("space")){
        Matter.Body.setPosition(poly.body,{x:250,y:280})
        rope.attach(poly.body)
    }
    if(poly.body.position.x>520||poly.body.position.x<10||poly.body.position.y>620||poly.body.position.y<50){
        text("press space to launch again",10,100);
    }
}
function mouseDragged(){
    Matter.Body.setPosition(poly.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rope.fly();
}