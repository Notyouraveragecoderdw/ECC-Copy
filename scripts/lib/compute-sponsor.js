'use strict';

// Compute-vendor sponsor copy removed in this personal fork.
// Kept as a module because scripts/ecc.js and scripts/install-apply.js
// require() it at load time; returns a neutral, vendor-neutral line.
function getComputeSponsorCopy() {
  return 'Run or self-host any open-source model with any GPU provider you choose.';
}

module.exports = Object.freeze({
  getComputeSponsorCopy,
});
