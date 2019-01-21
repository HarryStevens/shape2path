import { NUM_DEFAULT } from './constants';

export default function circle2Path(options) {
  if (!options){
    throw Error("You must pass options to shape2path.circle()");
  }

  var cx = options.cx || NUM_DEFAULT,
    cy = options.cy || NUM_DEFAULT,
    r = options.r || NUM_DEFAULT;
  return "M" + cx + "," + cy + " m" + (-r) + ",0 a" + r + "," + r + " 0 1,0 " + (r * 2) + ",0 a" + r + "," + r + " 0 1,0 " + (-r * 2) + ",0";
}
