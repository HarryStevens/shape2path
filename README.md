# shape2path
Convert SVG [shapes](https://developer.mozilla.org/en-US/docs/Web/SVG/Element#Basic_shapes) to SVG [paths](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/path). Check out [this demo](https://bl.ocks.org/HarryStevens/944fc151f210ddf6bd6ebaeda12c3d05). [![Build Status](https://travis-ci.org/HarryStevens/shape2path.svg?branch=master)](https://travis-ci.org/HarryStevens/shape2path)

## Installation
If you use NPM, `npm install shape2path`. Otherwise, download the [latest release](https://github.com/HarryStevens/shape2path/blob/master/build/shape2path.zip). AMD, CommonJS, and vanilla environments are supported. In vanilla, a shape2path global is exported:

```html
<script src="https://unpkg.com/shape2path@3.0.1/build/shape2path.min.js"></script>
<script>

const path = shape2path.circle()
  .r(50) // Paths can be configured with numeric arguments...
  .cx(d => d.cx); // or with functional arguments. 

// The cy attribute defaults to zero because it was not specified.
path({cx: 50}); // M50,0 m-50,0 a50,50 0 1,0 100,0 a50,50 0 1,0 -100,0

</script>
```

## API
shape2path's methods return configurable functions that can be used to produce the [d attribute](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d) required to draw an SVG path identical to a corresponding SVG basic shape. Each method corresponds to a basic SVG shape: [circle](#circle), [ellipse](#ellipse), [line](#line), [polygon](#polygon), [polyline](#polyline), and [rect](#rect).

<a name="circle" href="#circle">#</a> shape2path.<b>circle</b>() [<>](https://github.com/HarryStevens/shape2path/blob/master/src/circle2path.js "Source")

Creates a new [circle](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/circle) generator whose ["cx"](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/cx), ["cy"](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/cy), and ["r"](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/r) attributes are set to 0.

<a name="ellipse" href="#ellipse">#</a> shape2path.<b>ellipse</b>() [<>](https://github.com/HarryStevens/shape2path/blob/master/src/ellipse2path.js "Source")

Creates a new [ellipse](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/ellipse) generator whose ["cx"](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/cx), ["cy"](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/cy), ["rx"](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/rx), and ["ry"](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/ry) attributes are set to 0.

<a name="line" href="#line">#</a> shape2path.<b>line</b>() [<>](https://github.com/HarryStevens/shape2path/blob/master/src/line2path.js "Source")

Creates a new [line](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/line) generator whose ["x1"](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/x1), ["y1"](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/y1), ["x2"](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/x2), and ["y2"](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/y2) attributes default to 0.

<a name="polygon" href="#polygon">#</a> shape2path.<b>polygon</b>() [<>](https://github.com/HarryStevens/shape2path/blob/master/src/polygon2path.js "Source")

Creates a new [polygon](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polygon) generator whose ["points"](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/points) attribute defaults to "0,0".

<a name="polyline" href="#polyline">#</a> shape2path.<b>polyline</b>() [<>](https://github.com/HarryStevens/shape2path/blob/master/src/polyline2path.js "Source")

Creates a new [polyline](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polyline) generator whose ["points"](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/points) attribute defaults to "0,0".

<a name="rect" href="#rect">#</a> shape2path.<b>rect</b>() [<>](https://github.com/HarryStevens/shape2path/blob/master/src/rect2path.js "Source")

Creates a new [rect](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/rect) generator whose ["x"](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/x), ["y"](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/y), ["width"](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/width), ["height"](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/height), ["rx"](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/rx), and ["ry"](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/ry) attributes default to 0.

<a name="_shape" href="#_shape">#</a> <em>shape</em>([<em>datum</em>]) [<>](https://github.com/HarryStevens/shape2path/blob/master/src/circle2path.js#L6 "Source")

Returns a string representing the path's d attribute, whose appearance will be identical to an SVG basic shape corresponding to the generator's attributes. If <em>datum</em> is specified, applies the generator's functional accessors on the specified datum.

<a name="shape_attr" href="#shape_attr">#</a> <em>shape</em>.<b>attr</b>(<em>name</em>[, <em>value</em>]) [<>](https://github.com/HarryStevens/shape2path/blob/master/src/circle2path.js#L14 "Source")

If <em>value</em> is specified, sets the attribute <em>name</em> to the specified value and returns the generator. For instance, to set a circle generator's "cx" attribute to 10:
```js
shape2path.circle()
  .attr("cx", 10);
```
If the <em>value</em> is constant, sets the position to that constant. Constants must be specified as numbers except unless you are setting a "points" attribute, in which case you can set the constant to a string (e.g. `"0,0 1,1"`) or an array of points (e.g. `[[0,0], [1,1]]`). 

If <em>value</em> is a function, the function is evaluated for the passed datum, and the function's return value is used to set the attributes value. For instance, to set a circle generator's "cx" attribute to a datum's "left" attribute:
```js
shape2path.circle()
  .attr("cx", d => d.left)
  ({left: 10});
```
If <em>value</em> is not specified, returns the current value of the attribute. For all attributes other than "points", the value defaults to 0; for "points", it defaults to "0,0".