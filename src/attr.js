// A utility function for setting attribute values.
export function set(draw, attrs, name, value, defaultValue){
  return value ? (attrs[name] = value, draw) : attrs[name] || defaultValue || 0;
}

// A utility function for resolving attribute values.
export function resolve(attrs, name, datum){
  return !attrs[name] ? 0 : typeof attrs[name] === "function" ? attrs[name](datum) : attrs[name];
}