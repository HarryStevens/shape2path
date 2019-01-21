import { POINTS_DEFAULT } from './constants';

export default function polyline2path(options){
  if (!options){
    throw Error("You must pass options to shape2path.polyline()");
  }

  var points = options.points || POINTS_DEFAULT;
  return points.split(" ").map(function(point, i){ return i == 0 ? "M" + point : "L" + point; }).join(" ");
}
