'use strict';


/**
 * Create attempt
 *
 * body BrickAttempt BrickAttempt object that needs to be created
 * no response value expected for this operation
 **/
exports.playAttemptPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update attempt
 *
 * body BrickAttemptUpdateModel BrickAttempt model object that needs to be updated
 * no response value expected for this operation
 **/
exports.playAttemptPUT = function(body) {
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

