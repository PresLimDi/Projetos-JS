function setup() {
    createCanvas(1000, 700);
    background("white")
  }
  
  function draw() {
    noStroke();
    fill("red");
    
    
    if (mouseIsPressed) {
      ellipse(mouseX, mouseY, 20, 20);
    }
  }
  