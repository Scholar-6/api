'use strict';


/**
 * Add a new brick
 * 
 *
 * body Brick Brick object that needs to be added
 * returns Brick
 **/
exports.addBrick = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "topic" : "topic",
  "subTopic" : "subTopic",
  "synthesis" : "synthesis",
  "preparationBrief" : "preparationBrief",
  "subject" : "subject",
  "alternativeTopics" : "alternativeTopics",
  "questions" : "questions",
  "revisionLog" : "revisionLog",
  "id" : 0,
  "investigationBrief" : "investigationBrief",
  "type" : "type",
  "title" : "title"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all bricks
 *
 * returns ArrayOfBricks
 **/
exports.brickGET = function() {
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


/**
 * Get specific brick by id
 *
 * id Integer 
 * returns Brick
 **/
exports.brickIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "topic" : "topic",
  "subTopic" : "subTopic",
  "synthesis" : "synthesis",
  "preparationBrief" : "preparationBrief",
  "subject" : "subject",
  "alternativeTopics" : "alternativeTopics",
  "questions" : "questions",
  "revisionLog" : "revisionLog",
  "id" : 0,
  "investigationBrief" : "investigationBrief",
  "type" : "type",
  "title" : "title"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing brick
 * 
 *
 * body Brick Brick object that needs to be updated
 * returns Brick
 **/
exports.updateBrick = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "topic" : "topic",
  "subTopic" : "subTopic",
  "synthesis" : "synthesis",
  "preparationBrief" : "preparationBrief",
  "subject" : "subject",
  "alternativeTopics" : "alternativeTopics",
  "questions" : "questions",
  "revisionLog" : "revisionLog",
  "id" : 0,
  "investigationBrief" : "investigationBrief",
  "type" : "type",
  "title" : "title"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

