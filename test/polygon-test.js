var tape = require("tape"),
    shape2path = require("../");

tape("polygon() should convert a polygon to a path", function(test){
  test.equal(shape2path.polygon({points: "60,20 100,40 100,80 60,100 20,80 20,40"}), "M60,20 L100,40 L100,80 L60,100 L20,80 L20,40 Z");
  test.end();
});
tape("polygon() should convert a polygon to a path with empty options object", function(test){
  test.equal(shape2path.polygon({}), "M0 L0 Z");
  test.end();
});