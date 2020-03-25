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


/**
 * Get brick summary
 *
 * returns BrickSummaryModel
 **/
exports.playBrickSummarybrickIdGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "highScore" : 1,
  "totalUsers" : 0,
  "brick" : {
    "alternativeSubject" : "alternativeSubject",
    "subTopic" : "subTopic",
    "brief" : "brief",
    "synthesis" : "synthesis",
    "openQuestion" : "openQuestion",
    "subject" : "subject",
    "questions" : [ {
      "contentBlocks" : "contentBlocks",
      "id" : 6,
      "questionType" : "None",
      "order" : 1
    }, {
      "contentBlocks" : "contentBlocks",
      "id" : 6,
      "questionType" : "None",
      "order" : 1
    } ],
    "revisionLog" : "revisionLog",
    "type" : "Main",
    "title" : "title",
    "brickLength" : "0",
    "alternativeTopics" : "alternativeTopics",
    "topic" : "topic",
    "prep" : "prep",
    "id" : 0,
    "locked" : true
  },
  "averageScore" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

