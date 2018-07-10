'use strict'

module.exports = spdxIsOSI

var osi = require('spdx-osi')
var satisfies = require('spdx-satisfies')

var approved = osi.join(' OR ')

function spdxIsOSI (expression) {
  return satisfies(expression, approved)
}
