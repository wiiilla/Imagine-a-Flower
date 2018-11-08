// Qualitative Variables

// dictionary mapping adjs to style set (stroke, weight and fill for flowers, venations, and branches)
var colorsDict = {};
// dictionary mapping adjs to texture-drawing functions/ subClass
var textureDict = {
  "silky": func,
  "satin": func,
  "velvety": func,
  "matte": func
};
// dictionary mapping adjs to shape parameters
var shapeDict = {
  "shape": "paras"
};
// dictionary mapping adjs to sizes
var sizeDict = {
  "adj": "num"
};
// dictionary mapping adjs to overal qualitives
var qualityDict = {
  "adj": "num"
};



function panicle(nBranches, v1, v2, v3, v4) {
  // v1: overall shape, expanding or not, scale (0, 1)
  // v2: angle of branching, (0, 1)
  // v3: layering, (0,1)
  // v4: variance, (0,1)
  s = constrain(v1, 0.25, 0.9)
  branchAngle = map(v2, 0, 1, TWO_PI / 30, TWO_PI / 15)
  nLayers = int(map(v3, 0, 1, 0, 10))
	//?
  variance = v4


  for (var i = 0; i < nBranches; i++) {
    rotate(TWO_PI / nBranches + variance * random(-0.05, 0.05));
    noi = 0;
    layer = 0;

    // ? calculate length based on scale, so that everything remains in boundry
    length1 = min(width, height) / 8+ min(width, height) /8 * variance*2 * random(-1,0)
    length2 = min(width, height) / 8+ min(width, height) /8 * variance*2 * random(-1,0)

    strokeWeight(2);
    stroke(0, 0, 50, 1);
    noFill();

    branch(0);
  }

}


// inflorescence functions
function branch(layer) {
  if (layer <= nLayers) {

    if (random(1) < 0.7 && layer< nLayers) {
      push();
      rotate(branchAngle + variance * random(-0.5, 0.5));
      scale(s * random(0.9, 1.1))
      line(0, 0, 0, length1 + variance * random(-0.5, 0.5));
      translate(0, length1 + variance * random(-0.5, 0.5));
      branch(layer + 1);
      pop();

      push();
      rotate(-branchAngle + variance * random(-0.5, 0.5));
      scale(s * random(0.9, 1.1))
      line(0, 0, 0, length2 + variance * random(-0.5, 0.5));
      translate(0, length2 + variance * random(-0.5, 0.5));
      branch(layer + 1);
      pop();
    } else if (layer == nLayers) {
      push();
      rotate(branchAngle + variance * random(-0.5, 0.5));
      scale(s * random(0.9, 1.1))
      line(0, 0, 0, length1 + variance * random(-0.5, 0.5));
      translate(0, length1 + variance * random(-0.5, 0.5));
      for (i = 0; i <= nLayers; i++) {
      	scale(1/s)
      }
      shape(0,0,10)
      pop();

      push();
      rotate(-branchAngle + variance * random(-0.5, 0.5));
      scale(s * random(0.9, 1.1))
      line(0, 0, 0, length2 + variance * random(-0.5, 0.5));
      translate(0, length2 + variance * random(-0.5, 0.5));
      // for (i = 0; i <= nLayers; i++) {
      // 	scale(1/s)
      // }

      shape(0,0,10)
      pop();
    }
    else {
      branch(layer)
    }
	}
}


function func() {}

function shape(x, y, diam) {
  // generate shape based on description
  strokeWeight(1);
  stroke(1, 59, 98, 0.7);
  fill(2, 45, 95, 0.7);
  ellipse(x, y, diam, diam);
}

function drawTexture(x, y, textureParas) {}


// Decorative Functions
function blur() {}

function limit() {}



function setup() {
  // Presets
  var width = 800,
    height = 800;
  var centerX = 0,
    centerY = 0;
  var maxDiam = min(width, height) * 4 / 5
  colorMode(HSB, 360, 100, 100, 1);
  angleMode(RADIANS);
  noLoop();

  createCanvas(width, height);
}

function draw() {
  // Presets
  background(90);
  translate(width / 2, height / 2);
  noStroke();
  fill(255);
  ellipse(0, 0, min(width, height) * 4 / 5, min(width, height) * 4 / 5);

  panicle(6, 0.75, 0, 0.6, 1)

}

function mouseReleased() {
  redraw();
}
