class Cannon{ 
    constructor(x,y,width,heigth,angle){/// propiedades
        this.x = x;
        this.y = y;
        this.width = width;
        this.heigth = heigth;
        this.angle = angle;
        this.cannon_image = loadImage("assets/canon.png");
        this.cannon_base = loadImage("assets/cannonBase.png");
    }
    display(){//funcion/ lo hace
        console.log(this.angle)
        if(keyIsDown(RIGHT_ARROW) && this.angle<70 ){
                this.angle += 1;
        }

        if(keyIsDown(LEFT_ARROW) && this.angle>30 ){
            this.angle -= 1;
    }
        //SUPERIOR DEL CAÑON
        push();
        translate(this.x, this.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.cannon_image,0,0,this.width,this.heigth);
        pop();
        //PARTE INFERIOR
        image(this.cannon_base,70,20,200,200);
        noFill();

    }
}