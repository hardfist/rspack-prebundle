const { defineConfig } = require("@rspack/cli");
const path = require('path');
const pkg = require("./package.json").dependencies;
let entry = {};
for (const [key, value] of Object.entries(pkg)) {
  // entry[key] = {import:`https://www.unpkg.com/${key}@${value}`}
  entry[key] = { import: require.resolve(key) }
}
console.log('pkg',entry);
module.exports = defineConfig({
  entry: entry,
  output: {
    path: path.resolve(__dirname, 'dist/prebundle'),
    library: {
      type: 'module',
    },
  },
  optimization: {
    minimize:false
  },
  experiments: {
    outputModule: true
  },
  module: {
    rules: [{
      test: /\.js$/,
      sideEffects:true
    }]
  }
  // experiments: {
  //   buildHttp: {
  //     allowedUris: ['https://www.unpkg.com'],
  //     frozen: false
  //   }
  // },
})