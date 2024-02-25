"use strict";

let playMaker = new playerConstructer();
let playerCon = new controllerManager();
let ballCon = new ballManager();
let backgroundMan = new backgroundManager();
let powerupMan = new powerupManager();

function preload(){
    powerupMan.preload();
}

function setup(){
    new Canvas (1200, 800);
    playMaker.setup();
    ballCon.setup();
    backgroundMan.setup();
    powerupMan.setup();
}

function draw(){
    background("grey");
    playerCon.movePlayer(playMaker.playerOne);
    playerCon.movePlayer(playMaker.playerTwo);

    ballCon.draw();
    backgroundMan.draw();
    powerupMan.draw();
}

function uiDraw(){
    if(backgroundMan.oneScore == 10){
        text("PLAYER 1 WINS", width/2, height/2);
        ballCon.ballSprite.maxSpeed = 0;
        ballCon.ballSprite.speed = 0;
    }
    if(backgroundMan.twoScore == 10){
        text("PLAYER 2 WINS", width/2, height/2);
        ballCon.ballSprite.maxSpeed = 0;
        ballCon.ballSprite.speed = 0;
    }
}
