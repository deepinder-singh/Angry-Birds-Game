class Bird extends BaseClass{

    constructor(x,y){

        super(x,y,50,50);
        this.image  = loadImage("Sprites/bird.png");
        this.smoke = loadImage("Sprites/smoke.png");

        this.tranjectory = [];

    }

    display(){

      
        super.display();

        if(this.body.velocity.x>10 && this.body.position.x>200){
            var position = [this.body.position.x, this.body.position.y];
            this.tranjectory.push(position);
        }



        for(var i = 0; i<this.tranjectory.length;i++){
            image(this.smoke, this.tranjectory[i][0],this.tranjectory[i][1]);
        }
        
    }
}