function setup() {
  createCanvas(400, 400);
colorMode(HSB)
}


function draw() {
  background(255);

	for (var x = 60; x < width-20; x = x + 10) {
    stroke(x,x,x);
		line(x, height/2, mouseX, mouseY);
  }
}
