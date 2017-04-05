
import babel from 'rollup-plugin-babel'

export default {
  entry: 'lib/notify.js',
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
}
