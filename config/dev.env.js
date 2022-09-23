'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"https://www.eqjncvb.com/"'
  // BASE_API: '"https://www.motherhood.com/"'
})
