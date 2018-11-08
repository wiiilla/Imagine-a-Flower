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



function panicle(nBranches, nClustering1, nClustering2, nClustering3) {
  // nClustering1: overall shape, expanding or not, (0, 2)
  // nClustering2: angle of branching, (0, 2)
  // nClustering3: layering, (0,2)
  scale = constrain(nClustering1, 0.25, 1.25)
  branchAngle = map(nClustering2, 0, 2, TWO_PI / 15, TWO_PI / 6)
  nLayers = int(map(nClustering3, 0, 2, 0, 6))

  // ? calculate length based on scale, so that everything remains in boundry
  length = min(width, height) / 5 / scale;

  for (var i = 0; i < nBranches; i++) {
    rotate(TWO_PI / 6);
    noi = 0;
    layer = 0;

    strokeWeight(0.5);
    stroke(0);
    noFill();

    branch(0);

  }

}


// inflorescence functions
function branch(layer) {
  length = length * scale

  if (layer < nLayers) {
    push();
    noi += 0.1;
  	angleNoise = map(noise(noi), 0, 1, 0.5, 1.5)
    rotate(branchAngle * angleNoise);
    line(0,0,0, length);
    translate(0, length);
    branch(layer + 1)
    pop();

    push();
    noi += 0.1;
  	angleNoise = map(random(noi), 0, 1, 0.5, 1.5)
    rotate(-alpha * angleNoise);
    line(0,0,0, length);
    translate(0, length);
    branch(layer + 1);
    pop();
  }

}


function func() {}

function shape(x, y, diam) {
  // generate shape based on description
  strokeWeight(1);
  stroke(1, 59, 98, 1);
  fill(2, 45, 95, 1);
  ellipse(x, y, diam, diam);
}

function drawTexture(x, y, textureParas) {}


// Decorative Functions
function blur() {}

function limit() {}



function setup() {
  // Presets
  var width = 400,
    height = 400;
  var centerX = 0,
    centerY = 0;
  var maxDiam = min(width, height) * 4 / 5
  colorMode(HSB, 360, 100, 100, 1);
  angleMode(RADIANS);

  createCanvas(width, height);
}

function draw() {
  // Presets
  background(90);
  translate(width / 2, height / 2);
  noStroke();
  fill(255);
  ellipse(0, 0, min(width, height) * 4 / 5, min(width, height) * 4 / 5);

  panicle(6, 1, 1, 0.8)

}
