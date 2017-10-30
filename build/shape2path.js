// https://github.com/HarryStevens/shape2path#readme Version 2.0.3. Copyright 2017 Harry Stevens.
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.shape2path = {})));
}(this, (function (exports) { 'use strict';

function circle2Path(options) {
  if (!options){
    throw Error("You must pass options to shape2path.circle()");
  } else {
    if (options.cx == undefined) {
      throw Error("You must pass cx as an option to shape2path.circle()");
    } else if (options.cy == undefined) {
      throw Error("You must pass cy as an option to shape2path.circle()");
    } else if (options.r == undefined) {
      throw Error("You must pass r as an option to shape2path.circle()");
    }
  }

  var cx = options.cx, cy = options.cy, r = options.r;
  return "M" + cx + "," + cy + " m" + (-r) + ",0 a" + r + "," + r + " 0 1,0 " + (r * 2) + ",0 a" + r + "," + r + " 0 1,0 " + (-r * 2) + ",0";
}

function ellipse2path(options){
  if (!options){
    throw Error("You must pass options to shape2path.ellipse()");
  } else {
    if (options.cx == undefined) {
      throw Error("You must pass cx as an option to shape2path.ellipse()");
    } else if (options.cy == undefined) {
      throw Error("You must pass cy as an option to shape2path.ellipse()");
    } else if (options.rx == undefined) {
      throw Error("You must pass rx as an option to shape2path.ellipse()");
    } else if (options.ry == undefined) {
      throw Error("You must pass ry as an option to shape2path.ellipse()");
    }
  }

  var cx = options.cx, cy = options.cy, rx = options.rx, ry = options.ry;
  return "M" + (cx - rx) + "," + cy + " a" + rx + "," + ry + " 0 1,0 " + (rx * 2) + ",0 a" + rx + "," + ry + " 0 1,0 -" + (rx * 2) + ",0";
}

function line2path(options){
  if (!options){
    throw Error("You must pass options to shape2path.line()");
  } else {
    if (options.x1 == undefined) {
      throw Error("You must pass x1 as an option to shape2path.line()");
    } else if (options.x2 == undefined) {
      throw Error("You must pass x2 as an option to shape2path.line()");
    } else if (options.y1 == undefined) {
      throw Error("You must pass y1 as an option to shape2path.line()");
    } else if (options.y2 == undefined) {
      throw Error("You must pass y2 as an option to shape2path.line()");
    }
  }

  var x1 = options.x1, x2 = options.x2, y1 = options.y1, y2 = options.y2;
  return "M" + x1 + "," + y1 + " L" + x2 + "," + y2;
}

function polygon2path(options){
  if (!options){
    throw Error("You must pass options to shape2path.circle()");
  } else {
    if (options.points == undefined) {
      throw Error("You must pass points as an option to shape2path.polygon()");
    }
  }

  return options.points.split(" ").map(function(point, i){ return i == 0 ? "M" + point : "L" + point; }).join(" ") + " Z";
}

function polyline2path(options){
  if (!options){
    throw Error("You must pass options to shape2path.polyline()");
  } else {
    if (options.points == undefined) {
      throw Error("You must pass points as an option to shape2path.polyline()");
    }
  }

  return options.points.split(" ").map(function(point, i){ return i == 0 ? "M" + point : "L" + point; }).join(" ");
}

function rect2Path(options){
  if (!options){
    throw Error("You must pass options to shape2path.rect()");
  } else {
    if (options.x == undefined) {
      throw Error("You must pass x as an option to shape2path.rect()");
    } else if (options.y == undefined) {
      throw Error("You must pass y as an option to shape2path.rect()");
    } else if (options.width == undefined) {
      throw Error("You must pass width as an option to shape2path.rect()");
    } else if (options.height == undefined){
      throw Error("You must pass height as an option to shape2path.rect()");
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

exports.circle = circle2Path;
exports.ellipse = ellipse2path;
exports.line = line2path;
exports.polygon = polygon2path;
exports.polyline = polyline2path;
exports.rect = rect2Path;

Object.defineProperty(exports, '__esModule', { value: true });

})));
