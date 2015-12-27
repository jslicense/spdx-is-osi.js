```javascript
var assert = require('assert')
var isOSIApproved = require('spdx-is-osi')

// The MIT License
// An OSI-approved license
assert(isOSIApproved('MIT'))

// Entessa Public License v1.0
// Not an OSI-approved license
assert(!isOSIApproved('Entessa'))

// Dual-licensing under MIT and Entessa
assert(isOSIApproved('(MIT OR Entessa)'))
```
