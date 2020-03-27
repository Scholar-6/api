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
    "subject" : {
      "name" : "name",
      "id" : 5
    },
    "created" : "created",
    "questions" : [ {
      "contentBlocks" : "contentBlocks",
      "id" : 5,
      "questionType" : "None",
      "order" : 2
    }, {
      "contentBlocks" : "contentBlocks",
      "id" : 5,
      "questionType" : "None",
      "order" : 2
    } ],
    "revisionLog" : "revisionLog",
    "type" : "Main",
    "title" : "title",
    "subjectId" : 1,
    "attemptsCount" : 6,
    "brickLength" : "0",
    "alternativeTopics" : "alternativeTopics",
    "topic" : "topic",
    "prep" : "prep",
    "id" : 0,
    "locked" : true,
    "updated" : "updated"
  }, {
    "alternativeSubject" : "alternativeSubject",
    "subTopic" : "subTopic",
    "brief" : "brief",
    "synthesis" : "synthesis",
    "openQuestion" : "openQuestion",
    "subject" : {
      "name" : "name",
      "id" : 5
    },
    "created" : "created",
    "questions" : [ {
      "contentBlocks" : "contentBlocks",
      "id" : 5,
      "questionType" : "None",
      "order" : 2
    }, {
      "contentBlocks" : "contentBlocks",
      "id" : 5,
      "questionType" : "None",
      "order" : 2
    } ],
    "revisionLog" : "revisionLog",
    "type" : "Main",
    "title" : "title",
    "subjectId" : 1,
    "attemptsCount" : 6,
    "brickLength" : "0",
    "alternativeTopics" : "alternativeTopics",
    "topic" : "topic",
    "prep" : "prep",
    "id" : 0,
    "locked" : true,
    "updated" : "updated"
  } ],
  "firstName" : "firstName",
  "lastName" : "lastName",
  "subjects" : [ "", "" ],
  "createBricks" : [ {
    "alternativeSubject" : "alternativeSubject",
    "subTopic" : "subTopic",
    "brief" : "brief",
    "synthesis" : "synthesis",
    "openQuestion" : "openQuestion",
    "subject" : {
      "name" : "name",
      "id" : 5
    },
    "created" : "created",
    "questions" : [ {
      "contentBlocks" : "contentBlocks",
      "id" : 5,
      "questionType" : "None",
      "order" : 2
    }, {
      "contentBlocks" : "contentBlocks",
      "id" : 5,
      "questionType" : "None",
      "order" : 2
    } ],
    "revisionLog" : "revisionLog",
    "type" : "Main",
    "title" : "title",
    "subjectId" : 1,
    "attemptsCount" : 6,
    "brickLength" : "0",
    "alternativeTopics" : "alternativeTopics",
    "topic" : "topic",
    "prep" : "prep",
    "id" : 0,
    "locked" : true,
    "updated" : "updated"
  }, {
    "alternativeSubject" : "alternativeSubject",
    "subTopic" : "subTopic",
    "brief" : "brief",
    "synthesis" : "synthesis",
    "openQuestion" : "openQuestion",
    "subject" : {
      "name" : "name",
      "id" : 5
    },
    "created" : "created",
    "questions" : [ {
      "contentBlocks" : "contentBlocks",
      "id" : 5,
      "questionType" : "None",
      "order" : 2
    }, {
      "contentBlocks" : "contentBlocks",
      "id" : 5,
      "questionType" : "None",
      "order" : 2
    } ],
    "revisionLog" : "revisionLog",
    "type" : "Main",
    "title" : "title",
    "subjectId" : 1,
    "attemptsCount" : 6,
    "brickLength" : "0",
    "alternativeTopics" : "alternativeTopics",
    "topic" : "topic",
    "prep" : "prep",
    "id" : 0,
    "locked" : true,
    "updated" : "updated"
  } ],
  "id" : 7,
  "type" : 9,
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
    "subject" : {
      "name" : "name",
      "id" : 5
    },
    "created" : "created",
    "questions" : [ {
      "contentBlocks" : "contentBlocks",
      "id" : 5,
      "questionType" : "None",
      "order" : 2
    }, {
      "contentBlocks" : "contentBlocks",
      "id" : 5,
      "questionType" : "None",
      "order" : 2
    } ],
    "revisionLog" : "revisionLog",
    "type" : "Main",
    "title" : "title",
    "subjectId" : 1,
    "attemptsCount" : 6,
    "brickLength" : "0",
    "alternativeTopics" : "alternativeTopics",
    "topic" : "topic",
    "prep" : "prep",
    "id" : 0,
    "locked" : true,
    "updated" : "updated"
  }, {
    "alternativeSubject" : "alternativeSubject",
    "subTopic" : "subTopic",
    "brief" : "brief",
    "synthesis" : "synthesis",
    "openQuestion" : "openQuestion",
    "subject" : {
      "name" : "name",
      "id" : 5
    },
    "created" : "created",
    "questions" : [ {
      "contentBlocks" : "contentBlocks",
      "id" : 5,
      "questionType" : "None",
      "order" : 2
    }, {
      "contentBlocks" : "contentBlocks",
      "id" : 5,
      "questionType" : "None",
      "order" : 2
    } ],
    "revisionLog" : "revisionLog",
    "type" : "Main",
    "title" : "title",
    "subjectId" : 1,
    "attemptsCount" : 6,
    "brickLength" : "0",
    "alternativeTopics" : "alternativeTopics",
    "topic" : "topic",
    "prep" : "prep",
    "id" : 0,
    "locked" : true,
    "updated" : "updated"
  } ],
  "firstName" : "firstName",
  "lastName" : "lastName",
  "subjects" : [ "", "" ],
  "createBricks" : [ {
    "alternativeSubject" : "alternativeSubject",
    "subTopic" : "subTopic",
    "brief" : "brief",
    "synthesis" : "synthesis",
    "openQuestion" : "openQuestion",
    "subject" : {
      "name" : "name",
      "id" : 5
    },
    "created" : "created",
    "questions" : [ {
      "contentBlocks" : "contentBlocks",
      "id" : 5,
      "questionType" : "None",
      "order" : 2
    }, {
      "contentBlocks" : "contentBlocks",
      "id" : 5,
      "questionType" : "None",
      "order" : 2
    } ],
    "revisionLog" : "revisionLog",
    "type" : "Main",
    "title" : "title",
    "subjectId" : 1,
    "attemptsCount" : 6,
    "brickLength" : "0",
    "alternativeTopics" : "alternativeTopics",
    "topic" : "topic",
    "prep" : "prep",
    "id" : 0,
    "locked" : true,
    "updated" : "updated"
  }, {
    "alternativeSubject" : "alternativeSubject",
    "subTopic" : "subTopic",
    "brief" : "brief",
    "synthesis" : "synthesis",
    "openQuestion" : "openQuestion",
    "subject" : {
      "name" : "name",
      "id" : 5
    },
    "created" : "created",
    "questions" : [ {
      "contentBlocks" : "contentBlocks",
      "id" : 5,
      "questionType" : "None",
      "order" : 2
    }, {
      "contentBlocks" : "contentBlocks",
      "id" : 5,
      "questionType" : "None",
      "order" : 2
    } ],
    "revisionLog" : "revisionLog",
    "type" : "Main",
    "title" : "title",
    "subjectId" : 1,
    "attemptsCount" : 6,
    "brickLength" : "0",
    "alternativeTopics" : "alternativeTopics",
    "topic" : "topic",
    "prep" : "prep",
    "id" : 0,
    "locked" : true,
    "updated" : "updated"
  } ],
  "id" : 7,
  "type" : 9,
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

