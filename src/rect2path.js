import { resolve, set } from "./attr";

export default function(){
  const attrs = {};
  
  function draw(datum){
    const x = resolve(attrs, "x", datum),
          y = resolve(attrs, "y", datum),
          width = resolve(attrs, "width", datum),
          height = resolve(attrs, "height", datum);
    
    if (attrs.rx || attrs.ry){
      let rx = resolve(attrs, "rx", datum),
          ry = resolve(attrs, "ry", datum);

      if (rx * 2 > width) rx = rx - (rx * 2 - width) / 2;
      if (ry * 2 > height) ry = ry - (ry * 2 - height) / 2;

      return `M${x + rx},${y} h${width - rx * 2} s${rx},0 ${rx},${ry} v${height - ry * 2} s0,${ry} ${-rx},${ry} h${-width + rx * 2} s${-rx},0 ${-rx},${-ry} v${-height + ry * 2} s0,${-ry} ${rx},${-ry}`;
    }
    
    return `M${x},${y} h${width} v${height} H${x} Z`;
  }
  
  draw.attr = function(name, value){
    return set(draw, attrs, name, value);
  }
  
  return draw;
}
