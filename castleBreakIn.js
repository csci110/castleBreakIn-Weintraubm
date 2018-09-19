import { game, Sprite } from "./sgc/sgc.js";

game.setBackground("grass.png");

class Wall extends Sprite {
    constructor(x, y, name, image) {
        super();
        this.x = x;
        this.y = y;
        this.name = name;
        this.setImage(image);
        this.accelerateOnBounce = false;
    }
}

new Wall(0, 0, "A spooky castle wall", "castle.png");

let leftWall = new Wall(0, 200, " Left side wall", "wall.png");

let rightWall = new Wall(game.displayWidth - 48, 200, "right side wall", "wall.png");


class Princess extends Sprite {
    constructor() {
        super();
        this.name = "Princess Ann"
        this.setImage("ann.png");
        this.height = 48;
        this.width = 48;
        this.x = game.displayWidth / 2;
        this.y = game.displayHeight - 48;
        this.speedWhenWalking = 150;
        this.lives = 1;
        this.accelerateOnBounce = false;
        this.defineAnimation("left", 9, 11);
        this.defineAnimation("right", 3, 5);

    }
    handleLeftArrowKey() {
        this.angle = 180;
        this.speed = this.speedWhenWalking;
        this.playAnimation("left");
    }
    handleRightArrowKey() {
        this.angle = 360;
        this.speed = this.speedWhenWalking;
        this.playAnimation("right");
    }
    handleGameLoop() {
        this.x = Math.min(game.displayWidth - rightWall.width - this.width, this.x);
    }
}
    let ann = new Princess();
