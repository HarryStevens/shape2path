var tape = require("tape"),
    shape2path = require("../");

tape("circle() shiould convert a circle to a path", function(test){
	test.equal(shape2path.circle({cx: 65, cy: 20, r: 20}), "M65,20 m-20,0 a20,20 0 1,0 40,0 a20,20 0 1,0 -40,0");
	test.end();
});
tape("circle() should convert a circle to a path with empty options object", function(test){
	test.equal(shape2path.circle({}), "M0,0 m0,0 a0,0 0 1,0 0,0 a0,0 0 1,0 0,0");
		test.end();
});