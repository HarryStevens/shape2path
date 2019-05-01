const tape = require("tape"),
    shape2path = require("../");

tape("rect() should have the proper defaults", function(test){
  const rectGenerator = shape2path.rect();

  // 1
  test.equal(rectGenerator.attr("x"), 0);
  // 2
  test.equal(rectGenerator.attr("y"), 0);
  // 3
  test.equal(rectGenerator.attr("width"), 0);
  // 4
  test.equal(rectGenerator.attr("height"), 0);
  // 5
  test.equal(rectGenerator.attr("rx"), 0);
  // 6
  test.equal(rectGenerator.attr("ry"), 0);

  test.end();
});

tape("rect() should convert a rect to a path with numeric attribute inputs", function(test){
  const rectGeneratorNumeric = shape2path.rect()
      .attr("x", 45)
      .attr("y", 70)
      .attr("width", 40)
      .attr("height", 40);

  // 7
  test.equal(rectGeneratorNumeric(), "M45,70 h40 v40 H45 Z");

  test.end();
});

tape("rect() should convert a rect to a path with functional attribute inputs", function(test){
  const rectGeneratorFunctional = shape2path.rect()
      .attr("x", d => d.x)
      .attr("y", d => d.y)
      .attr("width", d => d.width)
      .attr("height", d => d.height);

  // 8
  test.equal(rectGeneratorFunctional({x: 45, y: 70, width: 40, height: 40}), "M45,70 h40 v40 H45 Z");

  test.end();
});

tape("rect() should convert a rounded rect to a path with numeric attribute inputs", function(test){
  const rectGeneratorNumeric = shape2path.rect()
      .attr("x", 20)
      .attr("y", 20)
      .attr("width", 100)
      .attr("height", 100)
      .attr("rx", 10)
      .attr("ry", 20);

  // 9
  test.equal(rectGeneratorNumeric(), "M30,20 h80 s10,0 10,20 v60 s0,20 -10,20 h-80 s-10,0 -10,-20 v-60 s0,-20 10,-20");

  test.end();
});

tape("rect() should convert a rounded rect to a path with functional attribute inputs", function(test){
  const rectGeneratorFunctional = shape2path.rect()
      .attr("x", d => d.x)
      .attr("y", d => d.y)
      .attr("width", d => d.width)
      .attr("height", d => d.height)
      .attr("rx", d => d.rx)
      .attr("ry", d => d.ry);

  // 10
  test.equal(rectGeneratorFunctional({x: 20, y: 20, width: 100, height: 100, rx: 10, ry: 20}), "M30,20 h80 s10,0 10,20 v60 s0,20 -10,20 h-80 s-10,0 -10,-20 v-60 s0,-20 10,-20");

  test.end();
});

tape("rect() should convert a rounded rect to a path with only an rx or ry attribute", function(test){
  const rectGeneratorNoRy = shape2path.rect()
      .attr("x", 20)
      .attr("y", 20)
      .attr("width", 100)
      .attr("height", 100)
      .attr("rx", 10);

  // 11
  test.equal(rectGeneratorNoRy(), "M30,20 h80 s10,0 10,10 v80 s0,10 -10,10 h-80 s-10,0 -10,-10 v-80 s0,-10 10,-10");

  const rectGeneratorNoRx = shape2path.rect()
      .attr("x", 20)
      .attr("y", 20)
      .attr("width", 100)
      .attr("height", 100)
      .attr("ry", 10);

  // 12
  test.equal(rectGeneratorNoRx(), "M30,20 h80 s10,0 10,10 v80 s0,10 -10,10 h-80 s-10,0 -10,-10 v-80 s0,-10 10,-10");

  test.end();
});

tape("rect() should convert a rounded rect to a path with small height and width attributes", function(test){
  const rectGeneratorSmallWidth = shape2path.rect()
      .attr("x", 20)
      .attr("y", 20)
      .attr("width", 10)
      .attr("height", 100)
      .attr("rx", 20)
      .attr("ry", 20);

  // 13
  test.equal(rectGeneratorSmallWidth(), "M25,20 h0 s5,0 5,20 v60 s0,20 -5,20 h0 s-5,0 -5,-20 v-60 s0,-20 5,-20");

  const rectGeneratorSmallHeight = shape2path.rect()
      .attr("x", 20)
      .attr("y", 20)
      .attr("width", 100)
      .attr("height", 10)
      .attr("rx", 20)
      .attr("ry", 20);

  // 14
  test.equal(rectGeneratorSmallHeight(), "M40,20 h60 s20,0 20,5 v0 s0,5 -20,5 h-60 s-20,0 -20,-5 v0 s0,-5 20,-5");

  test.end();
});

tape("rect() should return a valid path string if not provided inputs", function(test){
  // 15
  test.equal(shape2path.rect()(), "M0,0 h0 v0 H0 Z");

  test.end();
});