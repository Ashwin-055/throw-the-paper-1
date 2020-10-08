class Bin{
  constructor(x,y,width,height){
    var options = {
        isStatic: true
    }
    this.body1 = Bodies.rectangle(x,y,width,height,options);
    this.body2 = Bodies.rectangle(x+85,y,width,height,options);
    this.body3 = Bodies.rectangle(x+42.5,y+40,width+70,height-80,options);
    this.width = width;
    this.height = height;
    this.image = loadImage("bin.png");
    World.add(world,this.body1);
    World.add(world,this.body2);
    World.add(world,this.body3);
  }
  display(){
    var p1 = this.body1.position;
    var p2 = this.body2.position;
    var p3 = this.body3.position;
    rectMode(CENTER);
    fill("red");
    /*rect(p3.x,p3.y,this.width+70,this.height-80);
    rect(p1.x,p1.y,this.width,this.height);
    rect(p2.x,p2.y,this.width,this.height);*/
    push();
    translate(this.width,this.height);
    imageMode(CENTER);
    image(this.image,p3.x-15,p3.y-140,90,105);
    pop();
  }
}