const tape = require("tape"),
    shape2path = require("../");

tape("line() should have the proper defaults", function(test){
  const lineGenerator = shape2path.line();

  test.equal(lineGenerator.attr("x1"), 0);
  test.equal(lineGenerator.attr("x2"), 0);
  test.equal(lineGenerator.attr("y1"), 0);
  test.equal(lineGenerator.attr("y2"), 0);
  test.end();
});

tape("line() should convert a line to a path", function(test){
  const lineGeneratorNumeric = shape2path.line()
      .attr("x1", 20)
      .attr("x2", 100)
      .attr("y1", 110)
      .attr("y2", 30);

  test.equal(lineGeneratorNumeric(), "M20,110 L100,30");

  const lineGeneratorFunctional = shape2path.line()
      .attr("x1", d => d.x1)
      .attr("x2", d => d.x2)
      .attr("y1", d => d.y1)
      .attr("y2", d => d.y2);

  test.equal(lineGeneratorNumeric({x1: 20, x2: 100, y1: 110, y2: 30}), "M20,110 L100,30");

  test.end();
});

tape("line() should return a valid path string if not provided inputs", function(test){
  test.equal(shape2path.line()(), "M0,0 L0,0");

  test.end();
});