function setup() {
  createCanvas(500, 500);
  background(0);

  var y = 300
  var x = 250
  var j = 55
  for (var x = 250; x > 10; x = x - 10) {

    fill(20, 20, 20, j);
    stroke(0);
    ellipse(650, x, 1000, x);

    stroke(0, 0, 100, j);
    ellipse(942, x, 600, 50);

    fill(120, 120, 120, j);
    stroke(0);
    ellipse(x, x, 400)

    fill(100, 50, 50, j);
    stroke(0);
    ellipse(x, x, 1000, x);

    stroke(0, 0, 0, 50);
    ellipse(x+10, x/4, x, j);

    rotate(.5);
    fill(60, 150, 60, j);
    stroke(0);
    ellipse(600, x*8, y+40)

    stroke(0);
    ellipse(x, x, y, 500);


    fill(0, 0, 0, j);
    stroke(0);
    ellipse(x, x-50, 50, 1000)

    fill(90, 90, 90, j);
    stroke(0)
    rect(300, x, x-20, 100, 100);

    fill(100, 100, 100, j);
    stroke(0)
    rect(x*2, 400, y/30, 300, 150);


    }

  for (var x = 10; x > 100; x * 100) {


  }
  //this is for rect, maybe add once I understand. I never understood.


}

function draw() {


}
