var tape = require("tape"),
    shape2path = require("../");

tape("line() should convert a line to a path", function(test){
  test.equal(shape2path.line({x1: 20, x2: 100, y1: 110, y2: 30}), "M20,110 L100,30");
  test.end();
});
tape("line() should convert an line to a path with empty options object", function(test){
  test.equal(shape2path.line({}), "M0,0 L0,0");
  test.end();
});