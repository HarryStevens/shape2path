const tape = require("tape"),
    shape2path = require("../");

tape("ellipse() should have the proper defaults", function(test){
  const ellipseGenerator = shape2path.ellipse();

  test.equal(ellipseGenerator.attr("cx"), 0);
  test.equal(ellipseGenerator.attr("cy"), 0);
  test.equal(ellipseGenerator.attr("rx"), 0);
  test.equal(ellipseGenerator.attr("ry"), 0);
  test.end();
});

tape("ellipse() should convert an ellipse to a path", function(test){
  const ellipseGeneratorNumeric = shape2path.ellipse()
      .attr("cx", 60)
      .attr("cy", 120)
      .attr("rx", 50)
      .attr("ry", 25);

  test.equal(ellipseGeneratorNumeric(), "M10,120 a50,25 0 1,0 100,0 a50,25 0 1,0 -100,0");

  const ellipseGeneratorFunctional = shape2path.ellipse()
      .attr("cx", d => d.cx)
      .attr("cy", d => d.cy)
      .attr("rx", d => d.rx)
      .attr("ry", d => d.ry);

  test.equal(ellipseGeneratorNumeric({cx: 60, cy: 120, rx: 50, ry: 25}), "M10,120 a50,25 0 1,0 100,0 a50,25 0 1,0 -100,0");

  test.end();
});

tape("ellipse() should return a valid path string if not provided inputs", function(test){
  test.equal(shape2path.ellipse()(), "M0,0 a0,0 0 1,0 0,0 a0,0 0 1,0 0,0");

  test.end();
});