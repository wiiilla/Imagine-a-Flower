// Qualitative Variables

// dictionary mapping adjs to style set (stroke, weight and fill for flowers, venations, and branches)
function palette(img){

}

function sliders_setup () {
  // general variable: color palette

  sliders={};
  // inflorescense variables:
  // branches: Number of branches
  // scale: the strokeWeight multiplier as a branch develops
  // angle: the angle between 2 adjacent branches
  // variance: the mutiplier for change, creating more or less organic effect

  sliders["inflorescense"] = {};
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

  // floret variables:
  // petals: Number of petals
  // size
  // shape: circle -> lengthy -> pointy,
  // contrast: more contrast -> longer stamens, more color contrast:
  // Texture: silky -> satin -> velvety -> matte
  sliders["floret"] = {};
  sliders["floret"]["petals"] = createSlider(0, 1, random(0, 1), 0.02);
  sliders["floret"]["petals"].position(690, 10);
  sliders["floret"]["petals"].style('width', '100px');

  sliders["floret"]["size"] = createSlider(0, 1, random(0, 1), 0.02);
  sliders["floret"]["size"].position(690, 30);
  sliders["floret"]["size"].style('width', '100px');

  sliders["floret"]["shape"] = createSlider(0, 1, random(0, 1), 0.02);
  sliders["floret"]["shape"].position(690, 50);
  sliders["floret"]["shape"].style('width', '100px');

  sliders["floret"]["contrast"] = createSlider(0, 1, random(0, 1), 0.02);
  sliders["floret"]["contrast"].position(690, 70);
  sliders["floret"]["contrast"].style('width', '100px');

  sliders["floret"]["texture"] = createSlider(0, 1, random(0, 1), 0.02);
  sliders["floret"]["texture"].position(690, 90);
  sliders["floret"]["texture"].style('width', '100px');

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

  var params = []
  params.push(sliders["inflorescense"]["branches"].value())
  params.push(sliders["inflorescense"]["scale"].value())
  params.push(sliders["inflorescense"]["angle"].value())
  params.push(sliders["inflorescense"]["layers"].value())
  params.push(sliders["inflorescense"]["variance"].value())

  params.push(sliders["floret"]["petals"].value())
  params.push(sliders["floret"]["size"].value())
  params.push(sliders["floret"]["shape"].value())
  params.push(sliders["floret"]["contrast"].value())
  params.push(sliders["floret"]["texture"].value())

  branch(params);
}

function mouseReleased() {
  //sliders_setup()
  redraw();
}
