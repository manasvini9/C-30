class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);   //transfer all the commands from the parents
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity = 255;
  }
   
  display(){
    if (this.body.speed < 3){
      super.display();
    }
else{
  World.remove(world, this.body);
  push ();
this.Visiblity = this.Visiblity-5;
tint(255, this.Visiblity);
//image(imageName,x,y,w,h)
image(this.image, this.body.position.x, this.body.position.y,50,50);
pop ();
}
  }
};