const esbuild = require('esbuild')
const path = require('path');
const pkg = require("../package.json").dependencies;
let entry = {};
for (const [key, value] of Object.entries(pkg)) {
  // entry[key] = {import:`https://www.unpkg.com/${key}@${value}`}
  entry[key] = require.resolve(key)
}
console.log(entry);
esbuild.build({
    entryPoints: entry,
    bundle:true,
    splitting:true,
    format: 'esm',
    outdir: path.resolve(__dirname, '../dist/prebundle')
})