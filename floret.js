// Floret functions

// Floret variables:
// number/blossom : total number of branches
// size/mass : the scaling factor; the strokeWeight multiplier as a branch develops
// shape1/shape: the angle between 2 adjacent branches
// shape2/volume: the number of layers a branch branches out
// color/color: the mutiplier for randomization, creating more or less organic effect

function mapb(b){
  // Discontinuous mapping of b
	if (b<0.2) {return (5/2*b)}
  if (b>=0.2 && b<= 0.3) {return (5/4 * sin(10*PI*b - 0.5*PI) + 7/4)}
  if (b>0.3) {return (20/7 * b + 15/7)}
}

function flower(fParams) {
  // Map parameters according to rose curve function r = a * cos(p/q * theta + b)

  // Shape
  // List for the p/q combinations and their periodicity for some desirable curve shapes
	pqs = [ [3,PI], [5,PI], [7,PI], [4,TWO_PI], [6,TWO_PI], [8,TWO_PI], [7/3,3*PI], [5/2, 4*PI], [7/2, 4*PI], [8/3, 6*PI], [7/4, 8*PI], [5/3, 3*PI], [3/2, 4*PI], [7/5, 5*PI], [4/3, 6*PI], [5/4, 8*PI], [3/5, 5*PI], [2/3, 6*PI], [3/4, 8*PI], [2/5, 10*PI], [4/5, 10*PI], [6/5, 10*PI] ];
  pq = pqs[int(map(fParams[2], 0, 1, 0, pqs.length-1))][0];
  period = pqs[int(map(fParams[2], 0, 1, 0, pqs.length-1))][1] *2;
	b = mapb(fParams[3]);
  // Size
	a = map(fParams[1], 0, 1, 1, 5);
  // As b increases, overall size of the flower increase
  // Adjust Overall Size by mutiplier m
  if (b>1) {m = map (1 / b, 0.2, 1, 0.5, 1)} else { m = 1 };
  m = m* random(0.95, 1.05)
  offset = map(fParams[3], 0, 1, 1, 1.5);
  // Color
  colors = palette(fParams[4]);

	rose(a, pq, b, m, period, colors);
}

function rose (a, pq, b, m, period, colors) {
  // Draw inner
  noStroke()
  fill(colors["inner"])
  beginShape()
	for (var i = 0; i <= period; i = i + period / 60) {
		x = cos(i)* (a* cos(pq*i) + b) * 4* m * offset
		y = sin(i)* (a* cos(pq*i) + b) * 4* m * offset
    curveVertex(x, y)
	}
  endShape(CLOSE)

  // Draw Outer
  stroke(colors["stroke"])
  strokeWeight(0.5)
  fill(colors["outer"])
  beginShape()
	for (var i = 0; i <= period*2; i = i + period / 90) {
		x = cos(i)* (a* cos(pq*i) + b) * 10* m * random(0.95,1.05)
		y = sin(i)* (a* cos(pq*i) + b) * 10* m * random(0.95,1.05)
    curveVertex(x, y)
	}
  endShape(CLOSE)
}
