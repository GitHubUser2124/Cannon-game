class CannonBall {
    constructor(x, y) {
        var options = {
            isStatic: true
        }
        this.r = 25;
        this.body = Bodies.circle(x, y, this.r, options);
        this.cannonBall_image = loadImage("assets/cannonball.png");
        this.trajectory = [];
        World.add(world, this.body);
      
    }
    
    shoot(){
        var newAngle = cannon.angle-40;
        //Converting angle to Radians
        newAngle = newAngle*(3.14/180);
        var velocity = p5.Vector.fromAngle(newAngle);
        velocity.mult(0.5);
        Body.setStatic(this.body, false);
        Body.setVelocity(this.body, {x: velocity.x*(180/3.14), y: velocity.y*(180/3.14)})
    }


    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.cannonBall_image, pos.x, pos.y, this.r, this.r);
        pop();


        if(this.body.velocity.x>0 && pos.x>20){
            var position = [pos.x, pos.y];
            this.trajectory.push(position);
        }

        for(var i = 0; i<this.trajectory.length; i++){
            image(this.cannonBall_image, this.trajectory[i][0], this.trajectory[i][1], 5, 5);
        }
    }
  }
