class controllerManager{
    constructor(){
        
    }

    movePlayer(player){
        if(kb.pressing(player.up) && player.y > 0+player.h/2){
            player.y -= player.movementSpeed;
        }
        if(kb.pressing(player.down) && player.y < height-player.h/2){
            player.y += player.movementSpeed;
        }
    }
}