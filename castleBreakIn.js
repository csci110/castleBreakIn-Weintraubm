import {game, Sprite} from "./sgc/sgc.js";

game.setBackground("grass.png");

class Wall extends Sprite() {
    Constructor(x,y,name,image) {
        super();
        this.x =
        this.y =
        this.name =
        this.setImage(""); 
        this.accelerateOnBounce = false;
    }
}

new Wall(0,0,"A spooky castle wall","castle.png");

new Wall(0,200," Left side wall","wall.png");

new Wall(game.displayWidth-48,200,"right side wall","wall,png");

new Wall(game.displayHeight-48,200,"Bottom wall","wall.png");