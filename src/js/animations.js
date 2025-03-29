const boxes = document.querySelectorAll(".animated-box");

let scale = 1;
let isGrowing = true;
function changeSize() {
  scale = isGrowing ? scale + 0.1 : scale - 0.1;
  boxes[0].style.transform = `scale(${scale})`;
  if (scale >= 1.5) {
    isGrowing = false;
  } else if (scale <= 0) {
    isGrowing = true;
  }
}

let positionY = 25;
let positionX = 25;
let hasMovedY = false;
let hasMovedX = false;
function changePosY() {
  positionY = hasMovedY ? positionY - 10 : positionY + 10;
  positionX = hasMovedX ? positionX - 10 : positionX + 10;
  boxes[1].style.transform = `translateY(${positionY}px)`;
  boxes[2].style.transform = `translateX(${positionX}px)`;

  if (positionY >= 275) {
    hasMovedY = true;
  } else if (positionY <= -10) {
    hasMovedY = false;
  }

  if (positionX >= 350) {
    hasMovedX = true;
  } else if (positionX <= -10) {
    hasMovedX = false;
  }
}

let rotation = 0;
let hasRotated = false;
function changeAngle() {
  rotation = hasRotated ? rotation - 10 : rotation + 10;

  boxes[3].style.transform = `rotate(${rotation}deg)`;
  if (rotation >= 200) {
    hasRotated = true;
  } else if (rotation <= -200) {
    hasRotated = false;
  }
}

let animationOn = false;
let timer1;
let timer2;
let timer3;
document.querySelector(".animations-button").addEventListener("click", (e) => {
  animationOn = !animationOn;

  if (animationOn) {
    timer1 = setInterval(changeSize, 100);
    timer2 = setInterval(changePosY, 50);
    timer3 = setInterval(changeAngle, 50);
  } else {
    clearInterval(timer1);
    clearInterval(timer2);
    clearInterval(timer3);
  }
});
