class Ground{

constructor(x,y,w,h,color){

    var options = {
        isStatic: true
        }

        this.body = Bodies.rectangle(x,y,w,h,options)

        this.width = w;
        this.height = h;
        this.color = color;

        World.add(world, this.body);
    }   
    
    display(){

        var pos = this.body.position;

        rectMode(CENTER);
        fill(this.color);
        //noStroke();
        rect(pos.x, pos.y, this.width, this.height);

    }
}