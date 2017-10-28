/*
@license: MIT License

Copyright (c) 2017 Harry Stevens

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

var output = (function(){
	function shape2path(){
		this.circle = circle;
		this.ellipse = ellipse;
		this.rect = rect;
	}

	function circle(options) {
		if (!options){
			throw Error("You must pass options to shape2path.circle()");
		} else if (options){
			if (!options.cx) {
				throw Error("You must pass cx as an opiton to shape2path.circle()");
			} else if (!options.cy) {
				throw Error("You must pass cy as an opiton to shape2path.circle()");
			} else if (!options.r) {
				throw Error("You must pass r as an opiton to shape2path.circle()");
			}
		}

		var cx = options.cx, cy = options.cy, r = options.r;
		return "M" + cx + "," + cy + " m" + (-r) + ",0 a" + r + "," + r + " 0 1,0 " + (r * 2) + ",0 a" + r + "," + r + " 0 1,0 " + (-r * 2) + ",0";
	}

	function ellipse(options){
		if (!options){
			throw Error("You must pass options to shape2path.ellipse()");
		} else if (options){
			if (!options.cx) {
				throw Error("You must pass cx as an opiton to shape2path.ellipse()");
			} else if (!options.cy) {
				throw Error("You must pass cy as an opiton to shape2path.ellipse()");
			} else if (!options.rx) {
				throw Error("You must pass rx as an opiton to shape2path.ellipse()");
			} else if (!options.ry) {
				throw Error("You must pass ry as an opiton to shape2path.ellipse()");
			}
		}

		var cx = options.cx, cy = options.cy, rx = options.rx, ry = options.ry;
		return "M" + (cx - rx) + "," + cy + " a" + rx + "," + ry + " 0 1,0 " + (rx * 2) + ",0 a" + rx + "," + ry + " 0 1,0 -" + (rx * 2) + ",0";
	}

	function rect(options){
		if (!options){
			throw Error("You must pass options to shape2path.rect()");
		} else if (options){
			if (!options.x) {
				throw Error("You must pass x as an opiton to shape2path.rect()");
			} else if (!options.y) {
				throw Error("You must pass y as an opiton to shape2path.rect()");
			} else if (!options.width) {
				throw Error("You must pass width as an opiton to shape2path.rect()");
			} else if (!options.height){
				throw Error("You must pass height as an opiton to shape2path.rect()");
			}
		}

		var x = options.x, y = options.y, w = options.width + x, h = options.height + y;

		if (options.rx || options.ry){
			var rx = options.rx ? options.rx : options.ry,
				ry = options.ry ? options.ry : options.rx;

			return "M" + (x + rx) + "," + y + 
		  	" H" + (w - rx) +
		  	" C" + (w - rx) + "," + y + " " + w + "," + y + " " + w + "," + (y + ry) + 
		  	" V" + (h - ry) + 
		  	" C" + w + "," + (h - ry) + " " + w + "," + h + " " + (w - rx) + "," + h +
		  	" H" + (x + rx) +
		  	" C" + (x + rx) + "," + h + " " + x + "," + h + " " + x + "," + (h - ry) +
		  	" V" + (y + ry) +
		  	" C" + x + "," + (y + ry) + " " + x + "," + y + " " + (x + rx) + "," + y;
		} else {
			return "M" + x + "," + y + " H" + w + " V" + h + " H" + x + " Z";
		}

	}

	return new shape2path;
		
}());

if (typeof window === "undefined") {
  module.exports = output;
} else {
  window.shape2path = output;
}