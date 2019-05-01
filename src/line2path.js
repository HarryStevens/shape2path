import { resolve, set } from "./attr";

export default function(){
  let attrs = {};
  
  function draw(datum){
    const x1 = resolve(attrs, "x1", datum),
          y1 = resolve(attrs, "y1", datum),
          x2 = resolve(attrs, "x2", datum),
          y2 = resolve(attrs, "y2", datum);
    
    return `M${x1},${y1} L${x2},${y2}`;
  }
  
  draw.attr = function(name, value){
    return set(draw, attrs, name, value);
  }
  
  return draw;
}