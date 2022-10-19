var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var height = window.innerHeight, width = window.innerWidth;
var score = 0;
var mouseX = 0;
var mouseY = 0;
var moveAnim = null;
var monsters = [];
document.addEventListener("mousemove", function (e) {
    var clientX = e.clientX, clientY = e.clientY;
    mouseX = clientX;
    mouseY = clientY;
});
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
    Player.prototype.isNextToMonster = function () {
    };
    return Player;
}());
var player = new Player(width / 2, height / 2);
var setup = function () {
    if (!ctx) {
        return;
    }
    canvas.width = width;
    canvas.height = height;
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, width, height);
    drawMonsters();
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
var genRandBetween = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
var monsterTypes = ["ghost", "zombie", "slime"];
var Monster = /** @class */ (function () {
    function Monster(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.x = x;
        this.y = y;
        this.type = type;
    }
    Monster.prototype.isNextToPlayer = function () {
    };
    return Monster;
}());
var drawMonsters = function () {
    while (monsters.length < 20) {
        var x = genRandBetween(0, width);
        var y = genRandBetween(0, height);
        var type = monsterTypes[genRandBetween(0, monsterTypes.length - 1)];
        var monster = new Monster(x, y, type);
        monsters = __spreadArray(__spreadArray([], monsters, true), [monster], false);
    }
};
for (var i = monsters.length - 1; i > 0; i--) {
}
setup();
