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
