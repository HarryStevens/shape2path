const tape = require("tape"),
    shape2path = require("../");

tape("polyline() should have the proper defaults", function(test){
  const polylineGenerator = shape2path.polyline();

  test.equal(polylineGenerator.attr("points"), "0,0");
  test.end();
});

tape("polyline() should convert a polyline to a path", function(test){
  const polylineGeneratorString = shape2path.polyline()
      .attr("points", "60,20 100,40 100,80 60,100 20,80 20,40");

  test.equal(polylineGeneratorString(), "M60,20 L100,40 L100,80 L60,100 L20,80 L20,40");

  const polylineGeneratorArray = shape2path.polyline()
      .attr("points", [[60, 20], [100, 40], [100, 80], [60, 100], [20, 80], [20, 40]]);

  test.equal(polylineGeneratorArray(), "M60,20 L100,40 L100,80 L60,100 L20,80 L20,40");

  const polylineGeneratorFunctionalPoints = shape2path.polyline()
      .attr("points", d => d);

  test.equal(polylineGeneratorFunctionalPoints("60,20 100,40 100,80 60,100 20,80 20,40"), "M60,20 L100,40 L100,80 L60,100 L20,80 L20,40");

  const polylineGeneratorFunctionalArray = shape2path.polyline()
      .attr("points", d => d);

  test.equal(polylineGeneratorFunctionalArray([[60, 20], [100, 40], [100, 80], [60, 100], [20, 80], [20, 40]]), "M60,20 L100,40 L100,80 L60,100 L20,80 L20,40");

  test.end();
});

tape("polyline() should return a valid path string if not provided inputs", function(test){
  test.equal(shape2path.polyline()(), "M0,0 L0,0");

  test.end();
});