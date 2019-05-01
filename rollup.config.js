import babel from "rollup-plugin-babel";

export default {
  input: "index.js",
  output: {
    file: "build/shape2path.js",
    format: "umd",
    name: "shape2path"
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]  
}