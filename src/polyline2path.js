import { resolve, set } from "./attr";

export default function(){
  let attrs = {};
  
  function draw(datum){
    const points = resolve(attrs, "points", datum);
    
    if (!points.length){
      return "M0,0 L0,0";
    }
    else if (typeof points === "object"){
      return `M${points.join(" L")}`;
    }
    else if (typeof points === "string"){
      return points.split(" ").map((p, i) => i == 0 ? "M" + p : "L" + p).join(" ");
    }
  }
  
  draw.attr = function(name, value){
    return set(draw, attrs, name, value, "0,0");
  }
  
  return draw;
}