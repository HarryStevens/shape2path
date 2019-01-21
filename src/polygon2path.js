import { POINTS_DEFAULT } from './constants';

export default function polygon2path(options){
  var points = options.points || POINTS_DEFAULT;
  
  return points.split(" ").map(function(point, i){ return i == 0 ? "M" + point : "L" + point; }).join(" ") + " Z";
}
