'use strict';


/**
 * Get specific question by id
 *
 * id Integer 
 * returns Question
 **/
exports.questionIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "contentBlocks" : "contentBlocks",
  "id" : 2,
  "questionType" : "None",
  "order" : 7
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing question
 * 
 *
 * body Question Brick object that needs to be updated
 * returns Question
 **/
exports.updateQuestion = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "contentBlocks" : "contentBlocks",
  "id" : 2,
  "questionType" : "None",
  "order" : 7
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

