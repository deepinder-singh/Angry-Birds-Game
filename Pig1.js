class Pig1 extends BaseClass{

    constructor(x,y){

       super(x,y,50,50);
       this.image = loadImage("Sprites/Pgi.png");
       this.image2 = loadImage("Sprites/Pgiout.png");
       this.visibilty = 255;
    }

    display(){

      if(this.body.speed<3){
         super.display();
      }else{

       World.remove(world,this.body);
       push();
       this.visibility = this.visibility-2;
       tint(255,this.visibility);
       image(this.image2, this.body.position.x, this.body.position.y,50,50);
       pop();
      }
    }

    
    Score(){

      if(this.visibility<0 && this.visibility>120){

         score = score+1;
         console.log(this.visibility);

         if(this.x>1200){
            score = score+1;
         }
      }
    }

}