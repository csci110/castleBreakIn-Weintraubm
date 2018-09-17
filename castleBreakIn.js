import {game, Sprite} from "./sgc/sgc.js";

game.setBackground("grass.png");

class Wall extends Sprite() {
    constructor(x,y,name,image) {
        this.x = x;
        this.y = y;
        this.name =name;
        this.setImage(image); 
        this.accelerateOnBounce = false;
    }
}

new Wall(0,0,"A spooky castle wall","castle.png");

let leftWall = new Wall(0,200," Left side wall","wall.png");

let rightWall = new Wall(game.displayWidth-48,200,"right side wall","wall,png");

