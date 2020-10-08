class head{
  constructor(x,y){
    this.x=x;
    this.y=y;
    this.image=loadImage("head.png");
  }
  display(){
    var Head = createSprite(this.x,this.y,1,1);
    Head.addImage("Head",this.image);
  }
}