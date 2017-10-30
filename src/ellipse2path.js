export default function ellipse2path(options){
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