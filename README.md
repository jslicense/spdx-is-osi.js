```javascript
var assert = require('assert')
var isOSIApproved = require('spdx-is-osi')

// The MIT License
// Has an SPDX identifier
// An OSI-approved license
assert(isOSIApproved('MIT'))

// Zope Public License 2.1
// Has an SPDX identifier
// Not an OSI-approved license
assert(!isOSIApproved('ZPL-2.1'))

// Dual-licensing under MIT and Entessa
assert(isOSIApproved('(MIT OR ZPL-2.1)'))

// Double-licensing under MIT and Entessa
assert(!isOSIApproved('(MIT AND ZPL-2.1)'))
```
