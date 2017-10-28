var expect = require("chai").expect;
var shape2path = require("../lib/shape2path");

describe("#shape2path", function() {
	it ("should convert a circle to a path", function(){
		expect(shape2path.circle({cx: 65, cy: 20, r: 20})).to.equal("M65,20 m-20,0 a20,20 0 1,0 40,0 a20,20 0 1,0 -40,0");
	});

	it ("should convert a rect to a path", function(){
		expect(shape2path.rect({x: 45, y: 70, width: 40, height: 40})).to.equal("M45,70 H85 V110 H45 Z");
	});

	it ("should convert a rounded rect to a path", function(){
		expect(shape2path.rect({x: 220, y: 120, width: 200, height: 200, rx: 20, ry: 10})).to.equal("M240,120 H400 C400,120 420,120 420,130 V310 C420,310 420,320 400,320 H240 C240,320 220,320 220,310 V130 C220,130 220,120 240,120");
	});

	it ("should convert a rounded rect with only one rounded attribute specified to a path", function(){
		expect(shape2path.rect({x: 120, y: 340, width: 100, height: 100, rx: 15})).to.equal("M135,340 H205 C205,340 220,340 220,355 V425 C220,425 220,440 205,440 H135 C135,440 120,440 120,425 V355 C120,355 120,340 135,340");
	});

	it ("should convert an ellipse to a path", function(){
		expect(shape2path.ellipse({cx:60, cy:120, rx:50, ry:25})).to.equal("M10,120 a50,25 0 1,0 100,0 a50,25 0 1,0 -100,0");
	})
});