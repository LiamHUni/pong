class playerConstructer{
    constructor(){
        this.playerOne;
        this.playerTwo;
    }

    setup(){
        this.playerOne = this.makePlayer(20, "w", "s", "red");
        this.playerTwo = this.makePlayer(width-20, "arrowUP", "arrowDown", "blue");
    }

    draw(){
    }

    makePlayer(x, upCon, downCon, col){
        let p = new Sprite();
        p.w = 10;
        p.h = 60;
        p.x = x;
        p.color = col;
        p.collider = "k";
        p.bounciness = 1;
        p.up = upCon;
        p.down = downCon;
        p.movementSpeed = 5;
        return(p);
    }
}