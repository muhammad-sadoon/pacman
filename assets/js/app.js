const pacman = document.getElementById("pacman");

let up = 0;
let left = 0;
let speed = 10;

function toRightDirection() {
    if (left < 90) {
        setTimeout(() => {
            pacman.style.left = left + "%";
            left++
            pacman.style.transform = "rotateY(0deg)";
            toRightDirection();
        }, speed)
    }
}
function toDownDirection() {
    if (up < 90) {
        setTimeout(() => {
            pacman.style.top = up + "%";
            up++;
            pacman.style.transform = "rotateZ(90deg)";
            toDownDirection();
        }, speed);
    }
}
function toUpDirection() {
    if (up > 0) {
        setTimeout(() => {
            pacman.style.top = up + "%";
            up--;
            pacman.style.transform = "rotateZ(270deg)";
            toUpDirection();
        }, speed);
    }
}
function toLeftDirection() {
    if (left > 0) {
        setTimeout(() => {
            pacman.style.left = left + "%";
            left--;
            pacman.style.transform = "rotateY(180deg)"
            toLeftDirection();
        }, speed)
    }
}

window.addEventListener("keydown", e => {
    switch (e.key) {
        case "ArrowUp" || "w" || "W":
            toUpDirection();
            break;
        case "ArrowDown" || "S" || "s":
            toDownDirection();
            break;
        case "ArrowLeft" || "a" || "A":
            toLeftDirection();
            break;
        case "ArrowRight" || "d" || "D":
            toRightDirection();
            break;
        default:
            break;
    }
})