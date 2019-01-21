var tape = require("tape"),
    shape2path = require("../");

tape("polyline() should convert a polyline to a path", function(test){
  test.equal(shape2path.polyline({points: "270,100 290,60 320,80 350,20"}), "M270,100 L290,60 L320,80 L350,20");
  test.end();
});
tape("polyline() should convert a polyline to a path with empty options object", function(test){
  test.equal(shape2path.polyline({}), "M0 L0");
  test.end();
});