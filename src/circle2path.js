export default function circle2Path(options) {
  if (!options){
    throw Error("You must pass options to shape2path.circle()");
  } else if (options){
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