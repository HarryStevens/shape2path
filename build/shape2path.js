// https://github.com/HarryStevens/shape2path#readme Version 3.0.5. Copyright 2024 Harry Stevens.
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.shape2path = {})));
}(this, (function (exports) { 'use strict';

  // A utility function for setting attribute values.
  function set(draw, attrs, name, value, defaultValue) {
    return typeof value !== "undefined" ? (attrs[name] = value, draw) : attrs[name] || defaultValue || 0;
  } // A utility function for resolving attribute values.

  function resolve(attrs, name, datum) {
    return !attrs[name] ? 0 : typeof attrs[name] === "function" ? attrs[name](datum) : attrs[name];
  }

  function circle2path () {
    var attrs = {};

    function draw(datum) {
      var cx = resolve(attrs, "cx", datum),
          cy = resolve(attrs, "cy", datum),
          r = resolve(attrs, "r", datum);
      return "M".concat(cx, ",").concat(cy, " m").concat(-r, ",0 a").concat(r, ",").concat(r, " 0 1,0 ").concat(r * 2, ",0 a").concat(r, ",").concat(r, " 0 1,0 ").concat(-r * 2, ",0");
    }

    draw.attr = function (name, value) {
      return set(draw, attrs, name, value);
    };

    return draw;
  }

  function ellipse2path () {
    var attrs = {};

    function draw(datum) {
      var cx = resolve(attrs, "cx", datum),
          cy = resolve(attrs, "cy", datum),
          rx = resolve(attrs, "rx", datum),
          ry = resolve(attrs, "ry", datum);
      return "M".concat(cx - rx, ",").concat(cy, " a").concat(rx, ",").concat(ry, " 0 1,0 ").concat(rx * 2, ",0 a").concat(rx, ",").concat(ry, " 0 1,0 ").concat(-rx * 2, ",0");
    }

    draw.attr = function (name, value) {
      return set(draw, attrs, name, value);
    };

    return draw;
  }

  function line2path () {
    var attrs = {};

    function draw(datum) {
      var x1 = resolve(attrs, "x1", datum),
          y1 = resolve(attrs, "y1", datum),
          x2 = resolve(attrs, "x2", datum),
          y2 = resolve(attrs, "y2", datum);
      return "M".concat(x1, ",").concat(y1, " L").concat(x2, ",").concat(y2);
    }

    draw.attr = function (name, value) {
      return set(draw, attrs, name, value);
    };

    return draw;
  }

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function polygon2path () {
    var attrs = {};

    function draw(datum) {
      var points = resolve(attrs, "points", datum);

      if (!points.length) {
        return "M0,0 L0,0 Z";
      } else if (_typeof(points) === "object") {
        return "M".concat(points.join(" L"), " Z");
      } else if (typeof points === "string") {
        return points.split(" ").map(function (p, i) {
          return i == 0 ? "M" + p : "L" + p;
        }).join(" ") + " Z";
      }
    }

    draw.attr = function (name, value) {
      return set(draw, attrs, name, value, "0,0");
    };

    return draw;
  }

  function polyline2path () {
    var attrs = {};

    function draw(datum) {
      var points = resolve(attrs, "points", datum);

      if (!points.length) {
        return "M0,0 L0,0";
      } else if (_typeof(points) === "object") {
        return "M".concat(points.join(" L"));
      } else if (typeof points === "string") {
        return points.split(" ").map(function (p, i) {
          return i == 0 ? "M" + p : "L" + p;
        }).join(" ");
      }
    }

    draw.attr = function (name, value) {
      return set(draw, attrs, name, value, "0,0");
    };

    return draw;
  }

  function rect2path () {
    var attrs = {};

    function draw(datum) {
      var x = resolve(attrs, "x", datum),
          y = resolve(attrs, "y", datum),
          width = resolve(attrs, "width", datum),
          height = resolve(attrs, "height", datum);

      if (attrs.rx || attrs.ry) {
        var rx = resolve(attrs, attrs.rx ? "rx" : "ry", datum),
            ry = resolve(attrs, attrs.ry ? "ry" : "rx", datum);
        if (rx * 2 > width) rx = rx - (rx * 2 - width) / 2;
        if (ry * 2 > height) ry = ry - (ry * 2 - height) / 2;
        return "M".concat(x + rx, ",").concat(y, " h").concat(width - rx * 2, " s").concat(rx, ",0 ").concat(rx, ",").concat(ry, " v").concat(height - ry * 2, " s0,").concat(ry, " ").concat(-rx, ",").concat(ry, " h").concat(-width + rx * 2, " s").concat(-rx, ",0 ").concat(-rx, ",").concat(-ry, " v").concat(-height + ry * 2, " s0,").concat(-ry, " ").concat(rx, ",").concat(-ry);
      }

      return "M".concat(x, ",").concat(y, " h").concat(width, " v").concat(height, " H").concat(x, " Z");
    }

    draw.attr = function (name, value) {
      return set(draw, attrs, name, value);
    };

    return draw;
  }

  exports.circle = circle2path;
  exports.ellipse = ellipse2path;
  exports.line = line2path;
  exports.polygon = polygon2path;
  exports.polyline = polyline2path;
  exports.rect = rect2path;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
