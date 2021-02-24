'use strict';


/**
 * Get keyword suggestions
 *
 * suggestion String 
 * returns List
 **/
exports.keywordsSuggest = function(suggestion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "butterfly",
  "id" : 5
}, {
  "name" : "butterfly",
  "id" : 5
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

