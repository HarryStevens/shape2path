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
		this.line = line;
		this.polygon = polygon;
		this.polyline = polyline;
		this.rect = rect;
	}

	function circle(options) {
		if (!options){
			throw Error("You must pass options to shape2path.circle()");
		} else if (options){
			if (options.cx == undefined) {
				throw Error("You must pass cx as an opiton to shape2path.circle()");
			} else if (options.cy == undefined) {
				throw Error("You must pass cy as an opiton to shape2path.circle()");
			} else if (options.r == undefined) {
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
			if (options.cx == undefined) {
				throw Error("You must pass cx as an opiton to shape2path.ellipse()");
			} else if (options.cy == undefined) {
				throw Error("You must pass cy as an opiton to shape2path.ellipse()");
			} else if (options.rx == undefined) {
				throw Error("You must pass rx as an opiton to shape2path.ellipse()");
			} else if (options.ry == undefined) {
				throw Error("You must pass ry as an opiton to shape2path.ellipse()");
			}
		}

		var cx = options.cx, cy = options.cy, rx = options.rx, ry = options.ry;
		return "M" + (cx - rx) + "," + cy + " a" + rx + "," + ry + " 0 1,0 " + (rx * 2) + ",0 a" + rx + "," + ry + " 0 1,0 -" + (rx * 2) + ",0";
	}

	function line(options){
		if (!options){
			throw Error("You must pass options to shape2path.line()");
		} else if (options){
			if (options.x1 == undefined) {
				throw Error("You must pass x1 as an opiton to shape2path.line()");
			} else if (options.x2 == undefined) {
				throw Error("You must pass x2 as an opiton to shape2path.line()");
			} else if (options.y1 == undefined) {
				throw Error("You must pass y1 as an opiton to shape2path.line()");
			} else if (options.y2 == undefined) {
				throw Error("You must pass y2 as an opiton to shape2path.line()");
			}
		}

		var x1 = options.x1, x2 = options.x2, y1 = options.y1, y2 = options.y2;
		return "M" + x1 + "," + y1 + " L" + x2 + "," + y2;
	}

	function polygon(options){
		if (!options){
			throw Error("You must pass options to shape2path.circle()");
		} else if (options){
			if (options.points == undefined) {
				throw Error("You must pass points as an option to shape2path.polygon()");
			}
		}

		return options.points.split(" ").map(function(point, i){ return i == 0 ? "M" + point : "L" + point; }).join(" ") + " Z";
	}

	function polyline(options){
		if (!options){
			throw Error("You must pass options to shape2path.polyline()");
		} else if (options){
			if (options.points == undefined) {
				throw Error("You must pass points as an option to shape2path.polyline()");
			}
		}

		return options.points.split(" ").map(function(point, i){ return i == 0 ? "M" + point : "L" + point; }).join(" ");
	}

	function rect(options){
		if (!options){
			throw Error("You must pass options to shape2path.rect()");
		} else if (options){
			if (options.x == undefined) {
				throw Error("You must pass x as an opiton to shape2path.rect()");
			} else if (options.y == undefined) {
				throw Error("You must pass y as an opiton to shape2path.rect()");
			} else if (options.width == undefined) {
				throw Error("You must pass width as an opiton to shape2path.rect()");
			} else if (options.height == undefined){
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