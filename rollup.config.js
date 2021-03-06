import buble from 'rollup-plugin-buble'
import pkg from './package.json'

var external = Object.keys(pkg.dependencies).concat('path');

export default {
	input: 'index.js',
	plugins: [ buble() ],
	external,
	output: [
		{ file: pkg.main, format: 'cjs' },
		{ file: pkg.module, format: 'es' }
	]
}
