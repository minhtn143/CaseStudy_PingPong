const PLAYER_SPEED = 15;
const PLAYER_WIDTH = 15;
const PLAYER_HEIGHT = 150;
const PLAYER_X_POSITION = 20;
const PLAYER_Y_POSITION = TABLE_HEIGHT/2 - PLAYER_HEIGHT/2;

class Player {
    constructor(name, xPosition, yPosition, width, height, color) {
        this.name = name;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.width = width;
        this.height = height;
        this.color = color;
        this.point = 0;
    }

    drawPlayer(table){
        table.drawRectangle(this.xPosition,this.yPosition, this.width, this.height,this.color);
    }

    //di chuyển lên xuống
    moveUp() {
        this.yPosition -= PLAYER_SPEED;
    }
    moveDown() {
            this.yPosition += PLAYER_SPEED;
    }

    //cộng điểm
    hitPoint (){
        this.point++;
    }

    //vị trí của player
    playerTop(){
        return this.yPosition;
    }
    playerBottom(){
        return this.yPosition + this.height;
    }
    playerLeft(){
        return  this.xPosition;
    }
    playerRight(){
        return  this.xPosition + this.width;
    }
}




