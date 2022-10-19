const canvas: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

const {innerHeight: height, innerWidth: width} = window;

let score = 0;
let mouseX = 0;
let mouseY = 0;
let moveAnim: number | null = null;

let monsters = [];

document.addEventListener("mousemove", (e) => {
    const {clientX, clientY} = e;

    mouseX = clientX;
    mouseY = clientY;
})

class Player {
    speed: number = 10;

    constructor (public x: number, public y: number){
        this.x = x;
        this.y = y
    }
    
    draw(){
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, width, height);    

        ctx.beginPath();
        ctx.arc(this.x, this.y, 20, 0, 2 * Math.PI);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
        ctx.stroke();
    }

    move(direction: string){
        switch(direction){
            case "forward": 
                this.y -= this.speed;
            break;
            case "backward": 
                this.y += this.speed;
            break;
            case "right": 
                this.x += this.speed;
            break;
            case "left": 
                this.x -= this.speed;
            break;
        }
        this.draw();
    }   

    isNextToMonster(){

    }
}

const player = new Player(width / 2, height / 2);


const setup = () => {
    if(!ctx){
        return;
    }

    canvas.width = width;
    canvas.height = height;
    
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, width, height);    
   
    drawMonsters();

    player.draw();

    document.addEventListener("keypress", function(event) {
        if (event.key == "w") {
            player.move("forward");
        }else if (event.key == "d") {
            player.move("right");
        }else if (event.key == "s") {
            player.move("backward");
        }else if (event.key == "a") {
            player.move("left");
        }
    });
}

const genRandBetween = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const monsterTypes = ["ghost", "zombie", "slime"];

class Monster{
    constructor (public x: number, public y: number, public type: string){
        this.x = x;
        this.y = y
        this.type = type;
    }

    isNextToPlayer(){
        
    }
}

const drawMonsters = () => {
    while(monsters.length < 20){
        const x = genRandBetween(0, width);
        const y = genRandBetween(0, height);
        const type = monsterTypes[genRandBetween(0, monsterTypes.length - 1)]

        const monster = new Monster(x, y, type);

        monsters = [...monsters, monster];
    }
}

for(let i = monsters.length - 1; i > 0; i--){
    
}

setup();