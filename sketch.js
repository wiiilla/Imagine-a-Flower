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

function sliders_setup () {
  sliders={};
  sliders["inflorescense"] = {};
  sliders["floret"] = {};
  sliders["inflorescense"]["branches"] = createSlider(0, 1, random(0.8, 1), 0.02);
  sliders["inflorescense"]["branches"].position(10, 10);
  sliders["inflorescense"]["branches"].style('width', '100px');

  sliders["inflorescense"]["scale"] = createSlider(0, 1, random(0, 0.5), 0.02);
  sliders["inflorescense"]["scale"].position(10, 30);
  sliders["inflorescense"]["scale"].style('width', '100px');

  sliders["inflorescense"]["angle"] = createSlider(0, 1, random(0, 0.5), 0.02);
  sliders["inflorescense"]["angle"].position(10, 50);
  sliders["inflorescense"]["angle"].style('width', '100px');

  sliders["inflorescense"]["layers"] = createSlider(0, 1, random(0.8, 1), 0.02);
  sliders["inflorescense"]["layers"].position(10, 70);
  sliders["inflorescense"]["layers"].style('width', '100px');

  sliders["inflorescense"]["variance"] = createSlider(0, 1, random(0.8, 1), 0.02);
  sliders["inflorescense"]["variance"].position(10, 90);
  sliders["inflorescense"]["variance"].style('width', '100px');
}

function vary (n, v, bound1, bound2) {
  v = map(v, 0, 1, 0.1, 0.99)
  var lst = [bound1, bound1*0.95, bound1*0.9, bound1*0.8,bound1*0.5, bound2, bound2*0.9, bound2*0.95, bound2*0.8, bound2*0.5]
 	var pick = Math.round(Math.random())
  var multiplier = pow(v, 2) * lst[int(random(0,8))]

	return n*(1+multiplier)
}

function func() {}


// Decorative Functions
function blur() {}

function setup() {
  // Presets
  var width = 800, height = 800;
  var centerX = 0, centerY = 0;
  maxDiam = min(width, height) * 4 / 5
  colorMode(HSB, 360, 100, 100, 1);
  angleMode(RADIANS);
  noLoop();

  // Sliders
  sliders_setup()

  createCanvas(width, height);
}

function draw() {
  // Presets
  background(90);
  translate(width / 2, height / 2);
  noStroke();
  fill(255);
  ellipse(0, 0, min(width, height) * 4 / 5, min(width, height) * 4 / 5);
  smooth();

  v1 = sliders["inflorescense"]["branches"].value();
  v2 = sliders["inflorescense"]["scale"].value();
  v3 = sliders["inflorescense"]["angle"].value();
  v4 = sliders["inflorescense"]["layers"].value();
  v5 = sliders["inflorescense"]["variance"].value();
  panicle(v1, v2, v3, v4, v5);
}

function mouseReleased() {
  //sliders_setup()
  redraw();
}
