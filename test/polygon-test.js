const tape = require("tape"),
    shape2path = require("../");

tape("polygon() should have the proper defaults", function(test){
  const polygonGenerator = shape2path.polygon();

  test.equal(polygonGenerator.attr("points"), "0,0");
  test.end();
});

tape("polygon() should convert a polygon to a path", function(test){
  const polygonGeneratorString = shape2path.polygon()
      .attr("points", "60,20 100,40 100,80 60,100 20,80 20,40");

  test.equal(polygonGeneratorString(), "M60,20 L100,40 L100,80 L60,100 L20,80 L20,40 Z");

  const polygonGeneratorArray = shape2path.polygon()
      .attr("points", [[60, 20], [100, 40], [100, 80], [60, 100], [20, 80], [20, 40]]);

  test.equal(polygonGeneratorArray(), "M60,20 L100,40 L100,80 L60,100 L20,80 L20,40 Z");

  const polygonGeneratorFunctionalPoints = shape2path.polygon()
      .attr("points", d => d);

  test.equal(polygonGeneratorFunctionalPoints("60,20 100,40 100,80 60,100 20,80 20,40"), "M60,20 L100,40 L100,80 L60,100 L20,80 L20,40 Z");

  const polygonGeneratorFunctionalArray = shape2path.polygon()
      .attr("points", d => d);

  test.equal(polygonGeneratorFunctionalArray([[60, 20], [100, 40], [100, 80], [60, 100], [20, 80], [20, 40]]), "M60,20 L100,40 L100,80 L60,100 L20,80 L20,40 Z");

  test.end();
});

tape("polygon() should return a valid path string if not provided inputs", function(test){
  test.equal(shape2path.polygon()(), "M0,0 L0,0 Z");

  test.end();
});