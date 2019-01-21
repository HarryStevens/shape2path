var tape = require("tape"),
    shape2path = require("../");

tape("rect() should convert a rect to a path", function(test){
  test.equal(shape2path.rect({x: 45, y: 70, width: 40, height: 40}), "M45,70 H85 V110 H45 Z");
  test.end();
});
tape("rect() should convert a rounded rect to a path", function(test){
  test.equal(shape2path.rect({x: 220, y: 120, width: 200, height: 200, rx: 20, ry: 10}), "M240,120 H400 C400,120 420,120 420,130 V310 C420,310 420,320 400,320 H240 C240,320 220,320 220,310 V130 C220,130 220,120 240,120");
  test.end();
});
tape("rect() should convert a rounded rect with only rx specified to a path", function(test){
  test.equal(shape2path.rect({x: 120, y: 340, width: 100, height: 100, rx: 15}), "M135,340 H205 C205,340 220,340 220,355 V425 C220,425 220,440 205,440 H135 C135,440 120,440 120,425 V355 C120,355 120,340 135,340");
  test.end();
});
tape("rect() should convert a rounded rect with only ry specified to a path", function(test){
  test.equal(shape2path.rect({x: 120, y: 340, width: 100, height: 100, ry: 15}), "M135,340 H205 C205,340 220,340 220,355 V425 C220,425 220,440 205,440 H135 C135,440 120,440 120,425 V355 C120,355 120,340 135,340");
  test.end();
});
tape("rect() should convert a rect to a path with empty options object", function(test){
  test.equal(shape2path.rect({}), "M0,0 H0 V0 H0 Z");
  test.end();
});