// Flower Generator

// Developed by Willa Hua as an art project
// Based on plant morphology, recursion and rose curves
// Inspired by ################
// willahua.com
// Github username: wiiilla


// Variables Documentation
// Format:
// Name in code/ Name on UI: Descriptions

// Inflorescense variables:
// branches/brancing : total number of branches
// scale/scaling : the scaling factor; the strokeWeight multiplier as a branch develops
// angle/expansion: the angle between 2 adjacent branches
// layers/laying: the number of layers a branch branches out
// variance/randomization: the mutiplier for randomization, creating more or less organic effect

// Floret variables:
// number/blossom : total number of branches
// size/mass : the scaling factor; the strokeWeight multiplier as a branch develops
// shape1/shape: the angle between 2 adjacent branches
// shape2/volume: the number of layers a branch branches out
// color/color: the mutiplier for randomization, creating more or less organic effect

//#############
function palette(i){
  // Costumize color palette here
  p = [
    {"inner": color(0, 90, 90, 1), "stroke": color(0, 0, 100, 0.5), "outer": color(0, 90, 100, 0.6)}
  ];
  return  (p[int(map(i, 0, 1, 0, p.length))]);
}


function sliders_setup () {
  sliders={};
  // Inflorescense variables:
  sliders["inflorescense"] = {};
  sliders["inflorescense"]["branches"] = createSlider(0, 1, random(0.8, 1), 0.02);
  sliders["inflorescense"]["branches"].position(140, 70);
  sliders["inflorescense"]["branches"].style('width', '100px');

  sliders["inflorescense"]["scale"] = createSlider(0, 1, random(0, 0.5), 0.02);
  sliders["inflorescense"]["scale"].position(140, 95);
  sliders["inflorescense"]["scale"].style('width', '100px');

  sliders["inflorescense"]["angle"] = createSlider(0, 1, random(0, 0.5), 0.02);
  sliders["inflorescense"]["angle"].position(140, 120);
  sliders["inflorescense"]["angle"].style('width', '100px');

  sliders["inflorescense"]["layers"] = createSlider(0, 1, random(0.8, 1), 0.02);
  sliders["inflorescense"]["layers"].position(140, 145);
  sliders["inflorescense"]["layers"].style('width', '100px');

  sliders["inflorescense"]["variance"] = createSlider(0, 1, random(0.2, 0.6), 0.02);
  sliders["inflorescense"]["variance"].position(140, 170);
  sliders["inflorescense"]["variance"].style('width', '100px');

  // Floret variables:
  sliders["floret"] = {};
  sliders["floret"]["blossom"] = createSlider(0, 1, random(0.2, 0.6), 0.02);
  sliders["floret"]["blossom"].position(500, 70);
  sliders["floret"]["blossom"].style('width', '100px');

  sliders["floret"]["size"] = createSlider(0, 1, random(0.1, 0.6), 0.02);
  sliders["floret"]["size"].position(500, 95);
  sliders["floret"]["size"].style('width', '100px');

  sliders["floret"]["shape1"] = createSlider(0, 1, random(0, 1), 0.02);
  sliders["floret"]["shape1"].position(500, 120);
  sliders["floret"]["shape1"].style('width', '100px');

  sliders["floret"]["shape2"] = createSlider(0, 1, random(0, 0.8), 0.02);
  sliders["floret"]["shape2"].position(500, 145);
  sliders["floret"]["shape2"].style('width', '100px');

  sliders["floret"]["color"] = createSlider(0, 1, random(0, 1), 0.02);
  sliders["floret"]["color"].position(500, 170);
  sliders["floret"]["color"].style('width', '100px');

}


function setup() {
  // Presets
  var width = 800, height = 1000;
  var centerX = 0, centerY = 0;
  saveCounter = 1;
  maxDiam = min(width, height) * 4 / 5
  colorMode(HSB, 360, 100, 100, 1);
  angleMode(RADIANS);
  noLoop();

  // Sliders
  sliders_setup();

  createCanvas(width, height);
}

function draw() {
  // UI
  background(90);
  noStroke();
  fill(70);
  rect(0, 0, width, 200);

  fill(100);
  ellipse(400, 600, min(width, height) * 4 / 5, min(width, height) * 4 / 5);

  fill(255);
  textSize(16);
  textLeading(20);
  textAlign(LEFT, CENTER);
  text ("Flower Generator - more documentation available at willahua.com \nSlide to generate, click to redraw, double-click to save image to local computer.", 20, 35)
  var text1 = ["Branching", "Scaling", "Expansion", "Layering", "Randomization"];
  var text2 = ["Blossom", "Mass", "Shape", "Volume", "Color"];

  for (var i= 0; i <= 4; i++ ) {text(text1[i], 20, 78+25*i)}
  for (var i= 0; i <= 4; i++ ) {text(text2[i], 400, 78+25*i)}

  translate(width / 2, height / 2+100);
  smooth();

  // Push Slider Value to default drawing
  var params = []
  params.push(sliders["inflorescense"]["branches"].value())
  params.push(sliders["inflorescense"]["scale"].value())
  params.push(sliders["inflorescense"]["angle"].value())
  params.push(sliders["inflorescense"]["layers"].value())
  params.push(sliders["inflorescense"]["variance"].value())
  params.push(sliders["floret"]["blossom"].value())
  params.push(sliders["floret"]["size"].value())
  params.push(sliders["floret"]["shape1"].value())
  params.push(sliders["floret"]["shape2"].value())
  params.push(sliders["floret"]["color"].value())

  // Draw
  branch(params);
}

function mouseReleased() {
  redraw();
}

function doubleClicked() {
  // Default file name
  // ########
  save("flower"+str(saveCounter)+".png")
  saveCounter = saveCounter + 1;
}
