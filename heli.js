let x = 0;
let y = 0;
let dirX = 1;
let dirY = 1;
let spd = 2;
let width = 100;
let height = 200;
let heli = document.getElementById("heli");

function drawHeli(){
    if (x + width > document.body.clientWidth || x < 0) {
        dirX *= -1;
    }
    if (y + height > document.body.clientHeight || y < 0) {
        dirY *= -1;
    }
    x += dirX * spd;
    y += dirY * spd;
    heli.style.left = x-500 + "px";
    heli.style.top = y -200 + "px";
    window.requestAnimationFrame(drawHeli);
}

window.requestAnimationFrame(drawHeli);