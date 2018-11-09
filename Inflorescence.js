// inflorescence functions
function constrainLength (l) {
	total = 0;
  var lTemp = l;
  for (var i =0; i<=nLayers; i++ ) {
  	total += lTemp*cos(branchAngle)
    lTemp = lTemp*s
  }
  if (total >= maxDiam/2) {
    var j = 0
    for (var n =0; n<=nLayers; n++ ) {
      j += pow(s, n)
    }
    l = maxDiam/2/cos(branchAngle)/j
    if (s>=1) {
        l /= 1.4;
    } else {
        l *= 1.1;
    }
  }
  return l
}

function curvyLine(x1, y1, x2, y2) {
  xs = [0, random(0,y2*0.03), y2*0.04, 0];
  ys = [0, y2/3, y2/3*2, y2];

  beginShape();
  curveVertex(x1, y1);
  for (var i = 0; i < xs.length; i++) {
    curveVertex(xs[i], ys[i]);
  }
  curveVertex(x2, y2);
  endShape();
}

function branch(layer) {
  if (layer <= nLayers) {

    if (random(1) < 0.7 && layer<= nLayers) {
      push();
      rotate(branchAngle + variance * random(-TWO_PI/12, TWO_PI/12));
      sTemp = vary (s, variance, -0.1, 0.1);
      scale(sTemp);
      curvyLine(0, 0, 0, length1);
      translate(0, length1);
      length1=constrainLength(vary(length1, variance, -0.1, 0.1))
      branch(layer + 1);
      if (layer == nLayers) {
        for (var i = 0; i <= nLayers; i++) {
          scale(1/s)
        }
        shape(0,0,10)
      }
      pop();

      push();
      rotate(-branchAngle + variance * random(-TWO_PI/12, TWO_PI/12));
      sTemp = vary (s, variance, -0.1, 0.1);
      scale(sTemp);
      curvyLine(0, 0, 0, length2);
      translate(0, length2);
      length2=constrainLength(vary(length2, variance, -0.1, 0.1))
      branch(layer + 1);
      if (layer == nLayers) {
        for (var i = 0; i <= nLayers; i++) {
          scale(1/s)
        }
        shape(0,0,10)
      }
      pop();

    }
    else {
      branch(layer)
    }
	}
}

function panicle(v1, v2, v3, v4, v5) {
  // v1: num of branches
  // v2: overall shape, expanding or not, scale
  // v3: angle of branching
  // v4: layering
  // v5: variance
  nBranches = map(pow(v1, 3/4), 0, 1, 1, 10)
  s = map(v2, 0, 1, 0.5, 1.01);
  branchAngle = map(v3, 0, 1, TWO_PI / 30, TWO_PI / 15);
  nLayers = int(map(pow(v4, 3/4), 0, 1, 0, 8));
  variance = pow(v5, 1/4);


  noi1 = 0
  for (var i = 0; i < nBranches; i++) {
    rotate(vary(TWO_PI / nBranches, variance, -0.05, 0.05));
    layer = 0;

    var lTemp = vary( min(width, height)/4, variance, -1, 0);
    length1 = constrainLength( lTemp);
    length2 = constrainLength( lTemp);
    strokeJoin(ROUND)
    strokeCap(ROUND)
    strokeWeight(2);
    stroke(0, 0, 50, 1);
    noFill();

    branch(0);
  }

}
