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
  // generate shape based on description
  strokeWeight(1);
  stroke(1, 59, 98, 0.7);
  fill(2, 45, 95, 0.7);
  ellipse(x, y, 10, 10);

	rose(x, y, fParams[1], fParams[2], fParams[3])
}

function rose (x0, y0, size_a, shape_pq, contrast_b) {
	a = map(size_a, 0, 1, 1, 5)
	// pqs = [3, 5, 7, 4, 6, 8, 2, 7/3, 5/2, 7/2, 8/3, 7/4, 5/3, 3/2, 7/5, 4/3, 5/4, 3/5, 2/3, 3/4, 2/5, 4/5, 6/5]
	// pq = pqs[int(map(shape_pq, 0, 1, 0, pqs.length))]
	pqs = [ [3,PI], [5,PI], [7,PI], [4,TWO_PI], [6,TWO_PI], [8,TWO_PI], [2,TWO_PI], [7/3,3*PI], [5/2, 4*PI], [7/2, 4*PI], [8/3, 6*PI], [7/4, 8*PI], [5/3, 3*PI], [3/2, 4*PI], [7/5, 5*PI], [4/3, 6*PI], [5/4, 8*PI], [3/5, 5*PI], [2/3, 6*PI], [3/4, 8*PI], [2/5, 10*PI], [4/5, 10*PI], [6/5, 10*PI] ]
  pq = pqs[int(map(shape_pq, 0, 1, 0, pqs.length-1))][0]
  period = pqs[int(map(shape_pq, 0, 1, 0, pqs.length-1))][1] *2
	b = mapb(contrast_b)

  stroke(255)
	strokeWeight(1)
	color(0, 100, 100, 0.3)
  fill(0, 100, 100, 0.1)

  //Pack into Function/ Restructure
  beginShape()
	for (var i = 0; i <= period; i = i + period / 360) {
		x = cos(i)* (a* cos(pq*i) + b) * 10
		y = sin(i)* (a* cos(pq*i) + b) * 10
    curveVertex(x0+x, y0+y)
	}
  endShape(CLOSE)
}

function color() {}

function drawTexture(x, y, texture) {}
