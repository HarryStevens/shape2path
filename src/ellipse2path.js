import { resolve, set } from "./attr";

export default function(){
  let attrs = {};

  function draw(datum){
    const cx = resolve(attrs, "cx", datum),
          cy = resolve(attrs, "cy", datum),
          rx = resolve(attrs, "rx", datum),
          ry = resolve(attrs, "ry", datum);
    
    return `M${cx - rx},${cy} a${rx},${ry} 0 1,0 ${rx * 2},0 a${rx},${ry} 0 1,0 ${-rx * 2},0`;
  }
  
  draw.attr = function(name, value){
    return set(draw, attrs, name, value);
  }
  
  return draw;
}