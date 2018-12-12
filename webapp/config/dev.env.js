'use strict'
const merge = require('webpack-merge')  //合拼常用配置，merge在特定环境的配置中使用，以便轻松地将我们的常用配置包含在dev和中prod。
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {   //这个地方把生成环境中的配置也合入开发环境中，方便在开发环境中直接使用，而不用再重复写一遍
  NODE_ENV: '"development"'
})
