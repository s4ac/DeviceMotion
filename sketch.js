let initialPosition = null;
let currentPosition = null;
let pos;
let positionIniatilized = false;
let x = 0;
let y = 0;
// const watchOptions = {
//   enableHighAccuracy: true,
//   timeout: 1000,
//   maximumAge: 0
// };
// function setup() {
//     pos = createVector();
//     watchPosition(positionChanged, watchOptions);
//     console.log(initialPosition)
//     createCanvas(innerWidth, innerHeight);
//     background(51);

// }
// function draw() {
//     // background(51);
//     translate(width / 2, height / 2);
//     // console.log(initialPosition);
//     // for (const pos of position) {
//     ellipse(pos.x, pos.y, 30);
//     // }
//     if (frameCount % 60 == 0) console.log(pos);
// }
// function positionChanged(position) {
//     document.getElementById('X').innerHTML = 'X: ' + position.latitude;
//     document.getElementById('Y').innerHTML = 'Y: ' + position.longitude;
//     currentPosition = position;
//     // here we get the starting position
//     if (!positionIniatilized && position != undefined) {
//         initialPosition = position;
//         positionIniatilized = true;
//     }

//     pos = coordToXY(currentPosition, initialPosition);
//     console.log(pos);
// }

// function coordToXY(current, initial) {
//     let curr = createVector(current.latitude, current.longitude);
//     let init = createVector(initial.latitude, initial.longitude);

//     let result = p5.Vector.sub(init, curr);
//     return result.mult(100000);
// }

// function windowResized() {
//     resizeCanvas(innerWidth, innerHeight);
// }


function handleMotionEvent(event) {

    x = event.accelerationIncludingGravity.x;
    y = event.accelerationIncludingGravity.y;
    document.getElementById('X').innerHTML = 'X: ' + x;
    document.getElementById('Y').innerHTML = 'Y: ' + y;
    // var z = event.accelerationIncludingGravity.z;

    // Do something awesome.
}

window.addEventListener("devicemotion", handleMotionEvent, true);