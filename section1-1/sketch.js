function setup() {
  createCanvas(128,128);
}

function draw() {
  background(0);
  strokeWeight(4);
  fill(168, 100, 162);
  triangle(11,120,116,120,116,10);
  fill(94, 185, 84);
  triangle(0,106,106,108,106,0);
  fill(250);
  textSize(32);
  textFont("serif");
  text("46", 68, 100);
}
