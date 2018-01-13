// rollup.config.js
import typescript from "rollup-plugin-typescript2"

export default {
  input: 'src/app.ts',
  output: {
    file: 'app/app.js',
    format: 'cjs'
  },
  plugins: [
    typescript()
  ],
  external: [
    "tns-core-modules",
    "tns-core-modules/application",
    "preact-nativescript-components",
    "preact-to-nativescript"
  ]
};