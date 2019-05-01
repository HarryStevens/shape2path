import { resolve, set } from "./attr";

export default function(){
  const attrs = {};

  function draw(datum){
    const cx = resolve(attrs, "cx", datum),
          cy = resolve(attrs, "cy", datum),
          r = resolve(attrs, "r", datum);
    
    return `M${cx},${cy} m${-r},0 a${r},${r} 0 1,0 ${r * 2},0 a${r},${r} 0 1,0 ${-r * 2},0`;
  }

  draw.attr = function(name, value){
    return set(draw, attrs, name, value);
  }
  
  return draw;
}