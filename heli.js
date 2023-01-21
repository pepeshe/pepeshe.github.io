let x = 0;
let y = 0;
let dX = Math.random()*2-1;
let dY = Math.random()*2-1;
let spd = 2;
let width = 100;
let height = 200;
let heli = document.getElementById("heli");

function drawHeli(){
    if(heli.style.display == "block"){
        if (x + width > document.body.clientWidth || x < 0) {
            dX *= -1;
        }
        if (y + height > document.body.clientHeight || y < 0) {
            dY *= -1;
        }
        x += dX * spd;
        y += dY * spd;
        heli.style.left = x-500 + "px";
        heli.style.top = y -200 + "px";
    }
    window.requestAnimationFrame(drawHeli);
}

window.requestAnimationFrame(drawHeli);