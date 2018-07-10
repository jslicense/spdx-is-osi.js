[![Travis CI](https://img.shields.io/travis/jslicense/spdx-is-osi.js/master.svg)](https://travis-ci.org/jslicense/spdx-is-osi.js)
[![npm](https://img.shields.io/npm/v/spdx-is-osi.svg)](https://www.npmjs.com/package/spdx-is-osi)
[![downloads](https://img.shields.io/npm/dm/spdx-is-osi.svg)](https://www.npmjs.com/package/spdx-is-osi)
[![code style](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This package will test whether a SPDX expression is OSI approved.


```javascript
var assert = require('assert')
var isOSIApproved = require('spdx-is-osi')

// The MIT License
// Has an SPDX identifier
// An OSI-approved license
assert.strictEqual(isOSIApproved('MIT'), true)

// Zope Public License 2.1
// Has an SPDX identifier
// Not an OSI-approved license
assert.strictEqual(isOSIApproved('ZPL-2.1'), false)

// Dual-licensing under MIT and Zope 2.1
assert.strictEqual(isOSIApproved('(MIT OR ZPL-2.1)'), true)

// Double-licensing under MIT and Zope 2.1
assert.strictEqual(isOSIApproved('(MIT AND ZPL-2.1)'), false)

// Licensing under current and subsequent versions.
assert.strictEqual(isOSIApproved('(GPL-2.0+)'), true)
```
