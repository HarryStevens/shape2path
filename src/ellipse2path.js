import { NUM_DEFAULT } from './constants';

export default function ellipse2path(options){
  if (!options){
    throw Error("You must pass options to shape2path.ellipse()");
  }

  var cx = options.cx || NUM_DEFAULT,
    cy = options.cy || NUM_DEFAULT,
    rx = options.rx || NUM_DEFAULT,
    ry = options.ry || NUM_DEFAULT;
  return "M" + (cx - rx) + "," + cy + " a" + rx + "," + ry + " 0 1,0 " + (rx * 2) + ",0 a" + rx + "," + ry + " 0 1,0 -" + (rx * 2) + ",0";
}
