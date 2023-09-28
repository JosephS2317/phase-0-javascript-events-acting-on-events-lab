// Your code here
document.addEventListener("keydown", function (event) {
    console.log(event);
  });

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    else if (e.key === "arrowRight") {
      moveDodgerRight();
    }
    
});
function moveDodgerLeft() {
        const leftNumbers = dodger.style.left.replace("px", "");
        const left = parseInt(leftNumbers, 10);
           if (left > 0) {
          dodger.style.left = `${left - 10}px`;
        }
}
  
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left < 360) {
      dodger.style.left = `${left + 10}px`;
    }
}