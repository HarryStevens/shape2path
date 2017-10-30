export default function polyline2path(options){
  if (!options){
    throw Error("You must pass options to shape2path.polyline()");
  } else if (options){
    if (options.points == undefined) {
      throw Error("You must pass points as an option to shape2path.polyline()");
    }
  }

  return options.points.split(" ").map(function(point, i){ return i == 0 ? "M" + point : "L" + point; }).join(" ");
}