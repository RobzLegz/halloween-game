var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var height = window.innerHeight, width = window.innerWidth;
var score = 0;
var mouseX = 0;
var mouseY = 0;
var moveAnim = null;
document.addEventListener("mousemove", function (e) {
    var clientX = e.clientX, clientY = e.clientY;
    mouseX = clientX;
    mouseY = clientY;
});
var setup = function () {
    if (!ctx) {
        return;
    }
    canvas.width = width;
    canvas.height = height;
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, width, height);
    var player = new Player(width / 2, height / 2);
    player.draw();
    document.addEventListener("keypress", function (event) {
        if (event.key == "w") {
            player.move("forward");
        }
        else if (event.key == "d") {
            player.move("right");
        }
        else if (event.key == "s") {
            player.move("backward");
        }
        else if (event.key == "a") {
            player.move("left");
        }
    });
};
var Player = /** @class */ (function () {
    function Player(x, y) {
        this.x = x;
        this.y = y;
        this.speed = 10;
        this.x = x;
        this.y = y;
    }
    Player.prototype.draw = function () {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, width, height);
        ctx.beginPath();
        ctx.arc(this.x, this.y, 20, 0, 2 * Math.PI);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
        ctx.stroke();
    };
    Player.prototype.move = function (direction) {
        switch (direction) {
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
    };
    return Player;
}());
setup();
