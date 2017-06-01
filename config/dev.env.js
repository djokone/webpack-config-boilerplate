var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
var conf = require('./conf')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  CONFIG: conf.dev
})
