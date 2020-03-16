'use strict';


/**
 * Create attempt
 *
 * no response value expected for this operation
 **/
exports.playAttemptPOST = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update attempt
 *
 * no response value expected for this operation
 **/
exports.playAttemptPUT = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get all attempts
 *
 * returns ArrayOfBrickAttempts
 **/
exports.playAttemptsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

