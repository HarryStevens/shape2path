export default function line2path(options){
  if (!options){
    throw Error("You must pass options to shape2path.line()");
  } else if (options){
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