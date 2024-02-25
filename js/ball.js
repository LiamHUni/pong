class ballManager{
    constructor(){
        this.ballSprite;
    }

    setup(){
        this.ballSprite = new Sprite();
        this.ballSprite.r = 20;
        this.ballSprite.bounciness = 1.05;
        this.ballSprite.color = "green";
        this.ballSprite.playerOneTurn = null;
        this.ballSprite.maxSpeed = 8;
        this.resetBall();
    }

    draw(){
        this.wallHit();
        this.paddleHit();
        //console.log("Speed:" + this.ballSprite.speed);
    }

    wallHit(){
        //top bottom
        if(this.ballSprite.y <= 0+this.ballSprite.r){
            this.ballSprite.velocity.y = -this.ballSprite.velocity.y;
        }else if(this.ballSprite.y >= height-this.ballSprite.r){
            this.ballSprite.velocity.y = -this.ballSprite.velocity.y;
        }

        //sides
        if(this.ballSprite.x <= 0-this.ballSprite.r){
            //console.log("right player wins");
            backgroundMan.twoScore++;
            this.resetBall();
        }else if(this.ballSprite.x >= width+this.ballSprite.r){
            //console.log("left player wins");
            backgroundMan.oneScore++;
            this.resetBall();
        }
    }

    paddleHit(){
        //left paddle
        if(this.ballSprite.collides(playMaker.playerOne)){
            this.ballSprite.playerOneTurn = true;
            let direction = this.ballSprite.direction;
            //hitting upward
            if(direction <= 0 && direction >= -90){
                direction = random(-60, -20);
                //console.log("left upwards");
            }else if(direction <= 90 && direction >= 0){  //hitting downwards
                direction = random(20, 60);
                //console.log("left downwards");
            }
            console.log(direction);
            //console.log("HIT LEFT");
            this.ballSprite.speed *= 1.1;
            this.ballSprite.direction = direction;
        }else if(this.ballSprite.collides(playMaker.playerTwo)){    //right paddle
            this.ballSprite.playerOneTurn = false;
            let direction = this.ballSprite.direction;
            //hitting upward
            if(direction <= -90 && direction >= -180){
                direction = random(-160, -120);
            }else if(direction <= 180 && direction >=90){  //hitting downwards
                direction = random(120, 160);
            }
            this.ballSprite.speed *= 1.1;
            this.ballSprite.direction = direction;
        }
        if(this.ballSprite.speed < this.ballSprite.maxSpeed){
            this.ballSprite.speed = this.ballSprite.maxSpeed;
        }
    }

    resetBall(){
        this.ballSprite.x = width/2;
        this.ballSprite.y = height/2;
        this.ballSprite.velocity.x = random([random(-5, -2), random(2, 5)]);
        if(this.ballSprite.velocity.x>0){
            this.ballSprite.playerOneTurn = true;
        }else{
            this.ballSprite.playerOneTurn = false;}
        this.ballSprite.velocity.y = random([random(-3, -1), random(1, 3)]);
        
        powerupMan.resetPowerUps();
    }
}




/* DUMP

        if(this.ballSprite.collides(playMaker.playerOne)){
            let direction = this.ballSprite.direction;
            direction = random(-this.ballSprite.direction+90, -this.ballSprite.direction-90);
            this.ballSprite.direction = direction;
        }

*/