// Floret functions

// floret variables:
// petals: Number of petals
// size
// shape: circle -> lengthy -> pointy,
// contrast: more contrast -> longer stamens, more color contrast:
// Texture: silky -> satin -> velvety -> matte

// Floret functions

// floret variables:
// petals: Number of petals
// size
// shape: circle -> lengthy -> pointy,
// contrast: more contrast -> longer stamens, more color contrast:
// Texture: silky -> satin -> velvety -> matte
function mapb(b){
	if (b<0.2) {return (5/2*b)}
  if (b>=0.2 && b<= 0.3) {return (5/4 * sin(10*PI*b - 0.5*PI) + 7/4)}
  if (b>0.3) {return (20/7 * b + 15/7)}
}

function flower(x, y, fParams) {
  // map parameters
	pqs = [ [3,PI], [5,PI], [7,PI], [4,TWO_PI], [6,TWO_PI], [8,TWO_PI], [2,TWO_PI], [7/3,3*PI], [5/2, 4*PI], [7/2, 4*PI], [8/3, 6*PI], [7/4, 8*PI], [5/3, 3*PI], [3/2, 4*PI], [7/5, 5*PI], [4/3, 6*PI], [5/4, 8*PI], [3/5, 5*PI], [2/3, 6*PI], [3/4, 8*PI], [2/5, 10*PI], [4/5, 10*PI], [6/5, 10*PI] ]
  pq = pqs[int(map(fParams[2], 0, 1, 0, pqs.length-1))][0]
  period = pqs[int(map(fParams[2], 0, 1, 0, pqs.length-1))][1] *2
	b = mapb(fParams[3])
	a = map(fParams[1], 0, 1, 1, 5)
  offset = map(fParams[3], 0, 1, 1.03, 1.05)

//#############################################################################  
  colors = {"outer": color(0, 60, 80, 0.5), "stroke": color(0, 0, 100, 0.7), "inner": color(0, 90, 100, 0.7)}

	rose(x, y, a, pq, b, period, offset, colors)
}

function rose (x0, y0, a, pq, b, period, offset, colors) {

  noStroke()
  fill(colors["outer"])
  beginShape()
  if (b>1) {s = map (1 / b, 0.2, 1, 0.5, 1)} else { s = 1 }
	for (var i = 0; i <= period; i = i + period / 60) {
		x = cos(i)* (a* cos(pq*i) + b) * 3* s * offset
		y = sin(i)* (a* cos(pq*i) + b) * 3* s * offset
    curveVertex(x0+x, y0+y)
	}
  endShape(CLOSE)

  stroke(colors["stroke"])
  strokeWeight(1)
  fill(colors["inner"])

  beginShape()
  if (b>1) {s = map (1 / b, 0.2, 1, 0.5, 1)} else { s = 1 }
	for (var i = 0; i <= period * 2; i = i + period / 90) {
		x = cos(i)* (a* cos(pq*i) + b) * 10* s * random(0.95,1.05)
		y = sin(i)* (a* cos(pq*i) + b) * 10* s * random(0.95,1.05)
    curveVertex(x0+x, y0+y)
	}
  endShape(CLOSE)

}


function color() {}

function drawTexture(x, y, texture) {}
