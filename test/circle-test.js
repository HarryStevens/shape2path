const tape = require("tape"),
    shape2path = require("../");

tape("circle() should have the proper defaults", function(test){
  const circleGenerator = shape2path.circle();

  test.equal(circleGenerator.attr("cx"), 0);
  test.equal(circleGenerator.attr("cy"), 0);
  test.equal(circleGenerator.attr("r"), 0);
  test.end();
});

tape("circle() should convert a circle to a path", function(test){
  const circleGeneratorNumeric = shape2path.circle()
      .attr("cx", 65)
      .attr("cy", 20)
      .attr("r", 20);

  test.equal(circleGeneratorNumeric(), "M65,20 m-20,0 a20,20 0 1,0 40,0 a20,20 0 1,0 -40,0");

  const circleGeneratorFunctional = shape2path.circle()
      .attr("cx", d => d.cx)
      .attr("cy", d => d.cy)
      .attr("r", d => d.r);

  test.equal(circleGeneratorNumeric({cx: 65, cy: 20, r: 20}), "M65,20 m-20,0 a20,20 0 1,0 40,0 a20,20 0 1,0 -40,0");

  test.end();
});

tape("circle() should return a valid path string if not provided inputs", function(test){
  test.equal(shape2path.circle()(), "M0,0 m0,0 a0,0 0 1,0 0,0 a0,0 0 1,0 0,0");

  test.end();
});