# shape2path
[![Build Status](https://travis-ci.org/HarryStevens/shape2path.svg?branch=master)](https://travis-ci.org/HarryStevens/shape2path)

Convert SVG's [shapes](https://developer.mozilla.org/en-US/docs/Web/SVG/Element#Basic_shapes) to SVG [paths](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/path). Check out [this demo](https://bl.ocks.org/HarryStevens/944fc151f210ddf6bd6ebaeda12c3d05).

## Installation
### npm
```bash
npm install shape2path --save
```
```js
var shape2path = require("shape2path");
```

### Web browser
You can use the CDN from unpkg.
```html
<script src="https://unpkg.com/shape2path/lib/shape2path.js"></script>
<script src="https://unpkg.com/shape2path/lib/shape2path.min.js"></script>
```
If you'd rather host it yourself, download `shape2path.js` or `shape2path.min.js` from the [`lib` directory](https://github.com/HarryStevens/shape2path/tree/master/lib).
```html
<script src="path/to/shape2path.js"></script>
<script src="path/to/shape2path.min.js"></script>
```

## API
shape2path's functions all take a single argument: an options object whose properties correspond to the attributes of an SVG shape. Likewise, they all return a single string: an SVG path's `d` attribute.

<a name="circle" href="#circle">#</a> shape2path.**circle**(*options*)

Draw a path shaped like a [circle](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/circle).

<a name="ellipse" href="#ellipse">#</a> shape2path.**ellipse**(*options*)

Draw a path shaped like an [ellipse](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/ellipse).

<a name="line" href="#line">#</a> shape2path.**line**(*options*)

Draw a path shaped like a [line](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/line).

<a name="polygon" href="#polygon">#</a> shape2path.**polygon**(*options*)

Draw a path shaped like a [polygon](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polygon).

<a name="polyline" href="#polyline">#</a> shape2path.**polyline**(*options*)

Draw a path shaped like a [polyline](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polyline).

<a name="rect" href="#rect">#</a> shape2path.**rect**(*options*)

Draw a path shaped like a [rectangle](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/rect). Add `rx` or `ry` properties to the options to round the corners.
