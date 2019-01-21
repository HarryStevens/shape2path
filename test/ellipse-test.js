var tape = require("tape"),
    shape2path = require("../");

tape("ellipse() should convert an ellipse to a path", function(test){
  test.equal(shape2path.ellipse({cx:60, cy:120, rx:50, ry:25}), "M10,120 a50,25 0 1,0 100,0 a50,25 0 1,0 -100,0");
  test.end();
});
tape("ellipse() should conver an ellipse to a path when running ellipse() without options.ry", function(test){
  test.equal(shape2path.ellipse({}), "M0,0 a0,0 0 1,0 0,0 a0,0 0 1,0 -0,0");
  test.end();
});