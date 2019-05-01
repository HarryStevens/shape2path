const tape = require("tape"),
    shape2path = require("../");

tape("rect() should have the proper defaults", function(test){
  const rectGenerator = shape2path.rect();

  test.equal(rectGenerator.attr("x"), 0);
  test.equal(rectGenerator.attr("y"), 0);
  test.equal(rectGenerator.attr("width"), 0);
  test.equal(rectGenerator.attr("height"), 0);
  test.equal(rectGenerator.attr("rx"), 0);
  test.equal(rectGenerator.attr("ry"), 0);
  test.end();
});

tape("rect() should convert a rect to a path", function(test){
  const rectGeneratorNumeric = shape2path.rect()
      .attr("x", 45)
      .attr("y", 70)
      .attr("width", 40)
      .attr("height", 40);

  test.equal(rectGeneratorNumeric(), "M45,70 h40 v40 H45 Z");

  const rectGeneratorFunctional = shape2path.rect()
      .attr("x", d => d.x)
      .attr("y", d => d.y)
      .attr("width", d => d.width)
      .attr("height", d => d.height);

  test.equal(rectGeneratorNumeric({x: 45, y: 70, width: 40, height: 40}), "M45,70 h40 v40 H45 Z");

  test.end();
});

tape("rect() should convert a rounded rect to a path", function(test){
  const rectGeneratorNumeric = shape2path.rect()
      .attr("x", 20)
      .attr("y", 20)
      .attr("width", 100)
      .attr("height", 100)
      .attr("rx", 10)
      .attr("ry", 20);

  test.equal(rectGeneratorNumeric(), "M30,20 h80 s10,0 10,20 v60 s0,20 -10,20 h-80 s-10,0 -10,-20 v-60 s0,-20 10,-20");

  const rectGeneratorFunctional = shape2path.rect()
      .attr("x", d => d.x)
      .attr("y", d => d.y)
      .attr("width", d => d.width)
      .attr("height", d => d.height)
      .attr("rx", d => d.rx)
      .attr("ry", d => d.ry);

  test.equal(rectGeneratorNumeric({x: 20, y: 20, width: 100, height: 100, rx: 10, ry: 20}), "M30,20 h80 s10,0 10,20 v60 s0,20 -10,20 h-80 s-10,0 -10,-20 v-60 s0,-20 10,-20");

  const rectGeneratorNoRy = shape2path.rect()
      .attr("x", 20)
      .attr("y", 20)
      .attr("width", 100)
      .attr("height", 100)
      .attr("rx", 10);

  test.equal(rectGeneratorNoRy(), "M30,20 h80 s10,0 10,0 v100 s0,0 -10,0 h-80 s-10,0 -10,0 v-100 s0,0 10,0");

  const rectGeneratorNoRx = shape2path.rect()
      .attr("x", 20)
      .attr("y", 20)
      .attr("width", 100)
      .attr("height", 100)
      .attr("ry", 10);

  test.equal(rectGeneratorNoRx(), "M20,20 h100 s0,0 0,10 v80 s0,10 0,10 h-100 s0,0 0,-10 v-80 s0,-10 0,-10");

  const rectGeneratorSmallWidth = shape2path.rect()
      .attr("x", 20)
      .attr("y", 20)
      .attr("width", 10)
      .attr("height", 100)
      .attr("rx", 20)
      .attr("ry", 20);

  test.equal(rectGeneratorSmallWidth(), "M25,20 h0 s5,0 5,20 v60 s0,20 -5,20 h0 s-5,0 -5,-20 v-60 s0,-20 5,-20");

  const rectGeneratorSmallHeight = shape2path.rect()
      .attr("x", 20)
      .attr("y", 20)
      .attr("width", 100)
      .attr("height", 10)
      .attr("rx", 20)
      .attr("ry", 20);

  test.equal(rectGeneratorSmallHeight(), "M40,20 h60 s20,0 20,5 v0 s0,5 -20,5 h-60 s-20,0 -20,-5 v0 s0,-5 20,-5");

  test.end();
});

tape("rect() should return a valid path string if not provided inputs", function(test){
  test.equal(shape2path.rect()(), "M0,0 h0 v0 H0 Z");

  test.end();
});

// tape("rect() should convert a rect to a path", function(test){
//   test.equal(shape2path.rect({x: 45, y: 70, width: 40, height: 40}), "M45,70 H85 V110 H45 Z");
//   test.end();
// });
// tape("rect() should convert a rounded rect to a path", function(test){
//   test.equal(shape2path.rect({x: 220, y: 120, width: 200, height: 200, rx: 20, ry: 10}), "M240,120 H400 C400,120 420,120 420,130 V310 C420,310 420,320 400,320 H240 C240,320 220,320 220,310 V130 C220,130 220,120 240,120");
//   test.end();
// });
// tape("rect() should convert a rounded rect with only rx specified to a path", function(test){
//   test.equal(shape2path.rect({x: 120, y: 340, width: 100, height: 100, rx: 15}), "M135,340 H205 C205,340 220,340 220,355 V425 C220,425 220,440 205,440 H135 C135,440 120,440 120,425 V355 C120,355 120,340 135,340");
//   test.end();
// });
// tape("rect() should convert a rounded rect with only ry specified to a path", function(test){
//   test.equal(shape2path.rect({x: 120, y: 340, width: 100, height: 100, ry: 15}), "M135,340 H205 C205,340 220,340 220,355 V425 C220,425 220,440 205,440 H135 C135,440 120,440 120,425 V355 C120,355 120,340 135,340");
//   test.end();
// });
// tape("rect() should convert a rect to a path with empty options object", function(test){
//   test.equal(shape2path.rect({}), "M0,0 H0 V0 H0 Z");
//   test.end();
// });