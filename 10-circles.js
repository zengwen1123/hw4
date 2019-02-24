function setup() {
  createCanvas(400, 400);
}

var x = []; 
var y = []; 

function draw() {
  background(255);
  noFill();

  x.push(mouseX); 
  y.push(mouseY); 

  for (var i = 0; i < x.length; i = i + 10) {
    ellipse(x[i], y[i], 1 + (x.length - i));
  }

  x = x.slice(-100); 
  y = y.slice(-100); 
}
