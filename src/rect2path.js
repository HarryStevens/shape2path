export default function rect2Path(options){
  if (!options){
    throw Error("You must pass options to shape2path.rect()");
  } else if (options){
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