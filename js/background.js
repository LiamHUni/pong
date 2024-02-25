class backgroundManager{
    constructor(){
        this.oneScore = 0;
        this.twoScore = 0;
    }

    setup(){
        textSize(60);
        textAlign(CENTER, CENTER);
    }

    draw(){
        text(this.oneScore, width/2-60, 60);
        text(this.twoScore, width/2+60, 60);

        line(width/2, 0, width/2, height);
    }
}