'use strict';


/**
 * Get user by id
 *
 * returns User
 **/
exports.userCurrentGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "editedBricks" : [ {
    "alternativeSubject" : "alternativeSubject",
    "subTopic" : "subTopic",
    "brief" : "brief",
    "synthesis" : "synthesis",
    "openQuestion" : "openQuestion",
    "subject" : "subject",
    "questions" : [ {
      "contentBlocks" : "contentBlocks",
      "id" : 1,
      "questionType" : "None",
      "order" : 5
    }, {
      "contentBlocks" : "contentBlocks",
      "id" : 1,
      "questionType" : "None",
      "order" : 5
    } ],
    "revisionLog" : "revisionLog",
    "type" : "Main",
    "title" : "title",
    "attemptsCount" : 6,
    "brickLength" : "0",
    "alternativeTopics" : "alternativeTopics",
    "topic" : "topic",
    "prep" : "prep",
    "id" : 0,
    "locked" : true
  }, {
    "alternativeSubject" : "alternativeSubject",
    "subTopic" : "subTopic",
    "brief" : "brief",
    "synthesis" : "synthesis",
    "openQuestion" : "openQuestion",
    "subject" : "subject",
    "questions" : [ {
      "contentBlocks" : "contentBlocks",
      "id" : 1,
      "questionType" : "None",
      "order" : 5
    }, {
      "contentBlocks" : "contentBlocks",
      "id" : 1,
      "questionType" : "None",
      "order" : 5
    } ],
    "revisionLog" : "revisionLog",
    "type" : "Main",
    "title" : "title",
    "attemptsCount" : 6,
    "brickLength" : "0",
    "alternativeTopics" : "alternativeTopics",
    "topic" : "topic",
    "prep" : "prep",
    "id" : 0,
    "locked" : true
  } ],
  "firstName" : "firstName",
  "lastName" : "lastName",
  "subjects" : [ {
    "name" : "name",
    "id" : 5
  }, {
    "name" : "name",
    "id" : 5
  } ],
  "createBricks" : [ {
    "alternativeSubject" : "alternativeSubject",
    "subTopic" : "subTopic",
    "brief" : "brief",
    "synthesis" : "synthesis",
    "openQuestion" : "openQuestion",
    "subject" : "subject",
    "questions" : [ {
      "contentBlocks" : "contentBlocks",
      "id" : 1,
      "questionType" : "None",
      "order" : 5
    }, {
      "contentBlocks" : "contentBlocks",
      "id" : 1,
      "questionType" : "None",
      "order" : 5
    } ],
    "revisionLog" : "revisionLog",
    "type" : "Main",
    "title" : "title",
    "attemptsCount" : 6,
    "brickLength" : "0",
    "alternativeTopics" : "alternativeTopics",
    "topic" : "topic",
    "prep" : "prep",
    "id" : 0,
    "locked" : true
  }, {
    "alternativeSubject" : "alternativeSubject",
    "subTopic" : "subTopic",
    "brief" : "brief",
    "synthesis" : "synthesis",
    "openQuestion" : "openQuestion",
    "subject" : "subject",
    "questions" : [ {
      "contentBlocks" : "contentBlocks",
      "id" : 1,
      "questionType" : "None",
      "order" : 5
    }, {
      "contentBlocks" : "contentBlocks",
      "id" : 1,
      "questionType" : "None",
      "order" : 5
    } ],
    "revisionLog" : "revisionLog",
    "type" : "Main",
    "title" : "title",
    "attemptsCount" : 6,
    "brickLength" : "0",
    "alternativeTopics" : "alternativeTopics",
    "topic" : "topic",
    "prep" : "prep",
    "id" : 0,
    "locked" : true
  } ],
  "id" : 2,
  "type" : 7,
  "tutorialPassed" : true,
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Mark tutoria as showed for current user
 *
 * no response value expected for this operation
 **/
exports.userTutorialShowedPUT = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get current user
 *
 * returns User
 **/
exports.useruserIdGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "editedBricks" : [ {
    "alternativeSubject" : "alternativeSubject",
    "subTopic" : "subTopic",
    "brief" : "brief",
    "synthesis" : "synthesis",
    "openQuestion" : "openQuestion",
    "subject" : "subject",
    "questions" : [ {
      "contentBlocks" : "contentBlocks",
      "id" : 1,
      "questionType" : "None",
      "order" : 5
    }, {
      "contentBlocks" : "contentBlocks",
      "id" : 1,
      "questionType" : "None",
      "order" : 5
    } ],
    "revisionLog" : "revisionLog",
    "type" : "Main",
    "title" : "title",
    "attemptsCount" : 6,
    "brickLength" : "0",
    "alternativeTopics" : "alternativeTopics",
    "topic" : "topic",
    "prep" : "prep",
    "id" : 0,
    "locked" : true
  }, {
    "alternativeSubject" : "alternativeSubject",
    "subTopic" : "subTopic",
    "brief" : "brief",
    "synthesis" : "synthesis",
    "openQuestion" : "openQuestion",
    "subject" : "subject",
    "questions" : [ {
      "contentBlocks" : "contentBlocks",
      "id" : 1,
      "questionType" : "None",
      "order" : 5
    }, {
      "contentBlocks" : "contentBlocks",
      "id" : 1,
      "questionType" : "None",
      "order" : 5
    } ],
    "revisionLog" : "revisionLog",
    "type" : "Main",
    "title" : "title",
    "attemptsCount" : 6,
    "brickLength" : "0",
    "alternativeTopics" : "alternativeTopics",
    "topic" : "topic",
    "prep" : "prep",
    "id" : 0,
    "locked" : true
  } ],
  "firstName" : "firstName",
  "lastName" : "lastName",
  "subjects" : [ {
    "name" : "name",
    "id" : 5
  }, {
    "name" : "name",
    "id" : 5
  } ],
  "createBricks" : [ {
    "alternativeSubject" : "alternativeSubject",
    "subTopic" : "subTopic",
    "brief" : "brief",
    "synthesis" : "synthesis",
    "openQuestion" : "openQuestion",
    "subject" : "subject",
    "questions" : [ {
      "contentBlocks" : "contentBlocks",
      "id" : 1,
      "questionType" : "None",
      "order" : 5
    }, {
      "contentBlocks" : "contentBlocks",
      "id" : 1,
      "questionType" : "None",
      "order" : 5
    } ],
    "revisionLog" : "revisionLog",
    "type" : "Main",
    "title" : "title",
    "attemptsCount" : 6,
    "brickLength" : "0",
    "alternativeTopics" : "alternativeTopics",
    "topic" : "topic",
    "prep" : "prep",
    "id" : 0,
    "locked" : true
  }, {
    "alternativeSubject" : "alternativeSubject",
    "subTopic" : "subTopic",
    "brief" : "brief",
    "synthesis" : "synthesis",
    "openQuestion" : "openQuestion",
    "subject" : "subject",
    "questions" : [ {
      "contentBlocks" : "contentBlocks",
      "id" : 1,
      "questionType" : "None",
      "order" : 5
    }, {
      "contentBlocks" : "contentBlocks",
      "id" : 1,
      "questionType" : "None",
      "order" : 5
    } ],
    "revisionLog" : "revisionLog",
    "type" : "Main",
    "title" : "title",
    "attemptsCount" : 6,
    "brickLength" : "0",
    "alternativeTopics" : "alternativeTopics",
    "topic" : "topic",
    "prep" : "prep",
    "id" : 0,
    "locked" : true
  } ],
  "id" : 2,
  "type" : 7,
  "tutorialPassed" : true,
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

