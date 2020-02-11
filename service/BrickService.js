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
  "alternativeSubject" : "alternativeSubject",
  "subTopic" : "subTopic",
  "synthesis" : "synthesis",
  "openQuestion" : "openQuestion",
  "subject" : "subject",
  "questions" : [ {
    "contentBlocks" : "contentBlocks",
    "id" : 6
  }, {
    "contentBlocks" : "contentBlocks",
    "id" : 6
  } ],
  "revisionLog" : "revisionLog",
  "investigationBrief" : "investigationBrief",
  "type" : "type",
  "title" : "title",
  "preparationBrief" : "preparationBrief",
  "alternativeTopics" : "alternativeTopics",
  "topic" : "topic",
  "id" : 0
};
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
  "alternativeSubject" : "alternativeSubject",
  "subTopic" : "subTopic",
  "synthesis" : "synthesis",
  "openQuestion" : "openQuestion",
  "subject" : "subject",
  "questions" : [ {
    "contentBlocks" : "contentBlocks",
    "id" : 6
  }, {
    "contentBlocks" : "contentBlocks",
    "id" : 6
  } ],
  "revisionLog" : "revisionLog",
  "investigationBrief" : "investigationBrief",
  "type" : "type",
  "title" : "title",
  "preparationBrief" : "preparationBrief",
  "alternativeTopics" : "alternativeTopics",
  "topic" : "topic",
  "id" : 0
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
exports.bricksGET = function() {
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
  "alternativeSubject" : "alternativeSubject",
  "subTopic" : "subTopic",
  "synthesis" : "synthesis",
  "openQuestion" : "openQuestion",
  "subject" : "subject",
  "questions" : [ {
    "contentBlocks" : "contentBlocks",
    "id" : 6
  }, {
    "contentBlocks" : "contentBlocks",
    "id" : 6
  } ],
  "revisionLog" : "revisionLog",
  "investigationBrief" : "investigationBrief",
  "type" : "type",
  "title" : "title",
  "preparationBrief" : "preparationBrief",
  "alternativeTopics" : "alternativeTopics",
  "topic" : "topic",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

