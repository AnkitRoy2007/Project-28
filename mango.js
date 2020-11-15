class Mango {
    constructor(x,y,r){
        this.body = Bodies.circle(x,y,r,{isStatic:true});
        this.r = r;
        this.image = loadImage("images/mango.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        rotate(angle);
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}