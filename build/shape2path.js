// https://github.com/HarryStevens/shape2path#readme Version 2.0.7. Copyright 2019 Harry Stevens.
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.shape2path = {})));
}(this, (function (exports) { 'use strict';

  const NUM_DEFAULT = 0;
  // The true default is an empty string, but it results in invalid path, so use
  // "0 0"
  const POINTS_DEFAULT = "0 0";

  function circle2Path(options) {
    var cx = options.cx || NUM_DEFAULT,
        cy = options.cy || NUM_DEFAULT,
        r = options.r || NUM_DEFAULT;

    return "M" + cx + "," + cy + " m" + (-r) + ",0 a" + r + "," + r + " 0 1,0 " + (r * 2) + ",0 a" + r + "," + r + " 0 1,0 " + (-r * 2) + ",0";
  }

  function ellipse2path(options){
    var cx = options.cx || NUM_DEFAULT,
        cy = options.cy || NUM_DEFAULT,
        rx = options.rx || NUM_DEFAULT,
        ry = options.ry || NUM_DEFAULT;
      
    return "M" + (cx - rx) + "," + cy + " a" + rx + "," + ry + " 0 1,0 " + (rx * 2) + ",0 a" + rx + "," + ry + " 0 1,0 -" + (rx * 2) + ",0";
  }

  function line2path(options){
  var x1 = options.x1 || NUM_DEFAULT,
      x2 = options.x2 || NUM_DEFAULT,
      y1 = options.y1 || NUM_DEFAULT,
      y2 = options.y2 || NUM_DEFAULT;

    return "M" + x1 + "," + y1 + " L" + x2 + "," + y2;
  }

  function polygon2path(options){
    var points = options.points || POINTS_DEFAULT;
    
    return points.split(" ").map(function(point, i){ return i == 0 ? "M" + point : "L" + point; }).join(" ") + " Z";
  }

  function polyline2path(options){
    var points = options.points || POINTS_DEFAULT;
    
    return points.split(" ").map(function(point, i){ return i == 0 ? "M" + point : "L" + point; }).join(" ");
  }

  function rect2Path(options){
    var x = options.x || NUM_DEFAULT,
        y = options.y || NUM_DEFAULT,
        w = (options.width || NUM_DEFAULT) + x,
        h = (options.height || NUM_DEFAULT) + y;

    if (options.rx || options.ry) {
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
