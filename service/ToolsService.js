'use strict';


/**
 * Get api version
 *
 * returns BigDecimal
 **/
exports.getVersion = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = 0.80082819046101150206595775671303272247314453125;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

