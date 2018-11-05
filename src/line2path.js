import { NUM_DEFAULT } from './constants';

export default function line2path(options){
  if (!options){
    throw Error("You must pass options to shape2path.line()");
  }

  var x1 = options.x1 || NUM_DEFAULT,
    x2 = options.x2 || NUM_DEFAULT,
    y1 = options.y1 || NUM_DEFAULT,
    y2 = options.y2 || NUM_DEFAULT;
  return "M" + x1 + "," + y1 + " L" + x2 + "," + y2;
}
