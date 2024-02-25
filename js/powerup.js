class powerupManager{
    constructor(){
        this.images = [];
        this.activePowerups;
        this.powerUpGroup;
        this.powerFunctions;
        this.powerFunctions = [this.growBall, this.growPaddle, this.invertPaddle, this.shrinkBall, this.shrinkPaddle, this.slowBall, this.slowPaddle, this.speedBall];
    }
    
    preload(){
        this.images.push("./assests/growBall.png");
        this.images.push("./assests/growPaddle.png");
        this.images.push("./assests/invertPaddle.png");
        this.images.push("./assests/shrinkBall.png");
        this.images.push("./assests/shrinkPaddle.png");
        this.images.push("./assests/slowBall.png");
        this.images.push("./assests/slowPaddle.png");
        this.images.push("./assests/speedBall.png");
    }
    
    setup(){
        this.powerUpGroup = new Group();
        this.activePowerups = new Group();

        for(let i=0; i<this.images.length; i++){
            let newPowerUp = new Sprite();
            newPowerUp.img = this.images[i];
            newPowerUp.functions = this.powerFunctions[i];
            newPowerUp.w = 10;
            newPowerUp.h = 10;
            newPowerUp.scale = 5;
            newPowerUp.rotationLock = true;
            //newPowerUp.debug = true;
            newPowerUp.visible = false;
            newPowerUp.collider = "n";
            this.powerUpGroup.push(newPowerUp);
        }
    }

    draw(){
        this.spawnPowerups();
        this.collisionCheck();
    }

    spawnPowerups(){
        if(this.activePowerups.length < 3){
            let powerUp = random(this.powerUpGroup);
            while(powerUp.visible === true){
                powerUp = random(this.powerUpGroup);
            }
            powerUp.visible = true;
            powerUp.collider = "s";
            powerUp.x = random(width*0.1, width*0.9);
            powerUp.y = random(height*0.1, height*0.9);
            this.activePowerups.push(powerUp);
        }
    }

    collisionCheck(){
        for(let i = 0; i < this.activePowerups.length; i++){
            if(this.activePowerups[i].overlaps(ballCon.ballSprite)){
                console.log("powerup hit");
                this.activePowerups[i].collider = "n";
                this.activePowerups[i].visible = false;
                this.activePowerups[i].functions()
                this.activePowerups.remove(i);
            }
        }
    }

    /*
    Powerup functions
    */
    growBall(){
        ballCon.ballSprite.r *= 2;
    }

    growPaddle(){
        if(ballCon.ballSprite.playerOneTurn){
            playMaker.playerOne.scale = 2;
        }else if(!ballCon.ballSprite.playerOneTurn){
            playMaker.playerTwo.scale = 2;
        }
    }

    invertPaddle(){
        if(ballCon.ballSprite.playerOneTurn){
            let upControl = playMaker.playerTwo.up;
            playMaker.playerTwo.up = playMaker.playerTwo.down;
            playMaker.playerTwo.down = upControl;
        }else if(!ballCon.ballSprite.playerOneTurn){
            let upControl = playMaker.playerOne.up;
            playMaker.playerOne.up = playMaker.playerOne.down;
            playMaker.playerOne.down = upControl;
        }
    }

    shrinkBall(){
        ballCon.ballSprite.r *= 0.5;
    }

    shrinkPaddle(){
        if(ballCon.ballSprite.playerOneTurn){
            playMaker.playerTwo.scale = 0.5;
        }else if(!ballCon.ballSprite.playerOneTurn){
            playMaker.playerOne.scale = 0.5;
        }
    }

    slowBall(){
        ballCon.ballSprite.maxSpeed = 5;
        ballCon.ballSprite.speed = 5;
    }

    slowPaddle(){
        if(ballCon.ballSprite.playerOneTurn){
            playMaker.playerTwo.movementSpeed = 3;
        }else if(!ballCon.ballSprite.playerOneTurn){
            playMaker.playerOne.movementSpeed = 3;
        }
    }

    speedBall(){
        ballCon.ballSprite.maxSpeed = 10;
        ballCon.ballSprite.speed = 10;
    }

    //Resets values to starter values
    resetPowerUps(){
        ballCon.ballSprite.maxSpeed = 8;
        ballCon.ballSprite.r = 20;
        playMaker.playerOne.scale = 1;
        playMaker.playerOne.movementSpeed = 5;
        playMaker.playerTwo.scale = 1;
        playMaker.playerTwo.movementSpeed = 5;
        playMaker.playerOne.up = "w";
        playMaker.playerOne.down = "s";
        playMaker.playerTwo.up = "arrowUp";
        playMaker.playerTwo.down = "arrowDown";
    }
}