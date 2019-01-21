import { NUM_DEFAULT } from './constants';

export default function rect2Path(options){
  if (!options){
    throw Error("You must pass options to shape2path.rect()");
  }

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
