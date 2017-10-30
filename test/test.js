var expect = require("chai").expect;
var shape2path = require("../build/shape2path");

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
	});

	it ("should convert a line to a path", function(){
		expect(shape2path.line({x1: 20, x2: 100, y1: 110, y2: 30})).to.equal("M20,110 L100,30");
	});

	it ("should convert a polygon to a path", function(){
		expect(shape2path.polygon({points: "60,20 100,40 100,80 60,100 20,80 20,40"})).to.equal("M60,20 L100,40 L100,80 L60,100 L20,80 L20,40 Z");
	});

	it ("should convert a polyline to a path", function(){
		expect(shape2path.polyline({points: "270,100 290,60 320,80 350,20"})).to.equal("M270,100 L290,60 L320,80 L350,20");
	});

	// ERRORS
	// circle
	it("should throw an error when running circle() without options", function(){
		expect(function(){ shape2path.circle(); }).to.throw(Error);
	});
	it("should throw an error when running circle() without options.cx", function(){
		expect(function(){ shape2path.circle({}); }).to.throw(Error);
	});
	it("should throw an error when running circle() without options.cy", function(){
		expect(function(){ shape2path.circle({cx: 0}); }).to.throw(Error);
	});
	it("should throw an error when running circle() without options.r", function(){
		expect(function(){ shape2path.circle({cx: 0, cy: 0}); }).to.throw(Error);
	});

	// ellipse
	it("should throw an error when running ellipse() without options", function(){
		expect(function(){ shape2path.ellipse(); }).to.throw(Error);
	});
	it("should throw an error when running ellipse() without options.cx", function(){
		expect(function(){ shape2path.ellipse({}); }).to.throw(Error);
	});
	it("should throw an error when running ellipse() without options.cy", function(){
		expect(function(){ shape2path.ellipse({cx: 0}); }).to.throw(Error);
	});
	it("should throw an error when running ellipse() without options.rx", function(){
		expect(function(){ shape2path.ellipse({cx: 0, cy: 0}); }).to.throw(Error);
	});	
	it("should throw an error when running ellipse() without options.ry", function(){
		expect(function(){ shape2path.ellipse({cx: 0, cy: 0, rx: 0}); }).to.throw(Error);
	});	

	// line
	it("should throw an error when running line() without options", function(){
		expect(function(){ shape2path.line(); }).to.throw(Error);
	});
	it("should throw an error when running line() without options.x1", function(){
		expect(function(){ shape2path.line({}); }).to.throw(Error);
	});
	it("should throw an error when running line() without options.x2", function(){
		expect(function(){ shape2path.line({x1: 0}); }).to.throw(Error);
	});
	it("should throw an error when running line() without options.y1", function(){
		expect(function(){ shape2path.line({x1: 0, x2: 0}); }).to.throw(Error);
	});	
	it("should throw an error when running line() without options.y2", function(){
		expect(function(){ shape2path.line({x1: 0, x2: 0, y1: 0}); }).to.throw(Error);
	});	

	// polygon
	it("should throw an error when running polygon() without options", function(){
		expect(function(){ shape2path.polygon(); }).to.throw(Error);
	});
	it("should throw an error when running polygon() without options.points", function(){
		expect(function(){ shape2path.polygon({}); }).to.throw(Error);
	});

	// polyline
	it("should throw an error when running polyline() without options", function(){
		expect(function(){ shape2path.polyline(); }).to.throw(Error);
	});
	it("should throw an error when running polyline() without options.points", function(){
		expect(function(){ shape2path.polyline({}); }).to.throw(Error);
	});

	// rect
	it("should throw an error when running rect() without options", function(){
		expect(function(){ shape2path.rect(); }).to.throw(Error);
	});
	it("should throw an error when running rect() without options.x", function(){
		expect(function(){ shape2path.rect({}); }).to.throw(Error);
	});
	it("should throw an error when running rect() without options.y", function(){
		expect(function(){ shape2path.rect({x: 0}); }).to.throw(Error);
	});
	it("should throw an error when running rect() without options.width", function(){
		expect(function(){ shape2path.rect({x: 0, y: 0}); }).to.throw(Error);
	});	
	it("should throw an error when running rect() without options.height", function(){
		expect(function(){ shape2path.rect({x: 0, y: 0, width: 0}); }).to.throw(Error);
	});	
});