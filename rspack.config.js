const { defineConfig } = require("@rspack/cli");
const pkg = require("./package.json").dependencies;
let externals = {};
for (const [key, value] of Object.entries(pkg)) {
  externals[key] = key
 
}
console.log('externals:', externals);
module.exports = defineConfig({
    entry: {
        main: './src/index.mjs'
    },
    externalsType: 'global',
    externals
})