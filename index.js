'use strict'
const parentModule = require('parent-module')
const { createRequire } = require('module')
const url = require('url')
module.exports = async (req) => {
  const { resolve } = createRequire(parentModule())
  try {
    const mod = await import(url.pathToFileURL(resolve(req)))
    return mod
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}
