'use strict';


/**
 * Get a specific comment on a brick.
 *
 * brickId Integer 
 * commentId Integer 
 * returns Comment
 **/
exports.brickBrickIdCommentCommentIdGET = function(brickId,commentId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 0,
  "text" : "Comment text...",
  "brick" : {
    "alternativeSubject" : "alternativeSubject",
    "subTopic" : "subTopic",
    "brief" : "brief",
    "synthesis" : "synthesis",
    "openQuestion" : "openQuestion",
    "created" : "2000-01-23T04:56:07.000+00:00",
    "revisionLog" : "revisionLog",
    "title" : "title",
    "subjectId" : 1,
    "attemptsCount" : 6,
    "brickLength" : "0",
    "alternativeTopics" : "alternativeTopics",
    "topic" : "topic",
    "prep" : "prep",
    "id" : 0,
    "locked" : true,
    "updated" : "2000-01-23T04:56:07.000+00:00"
  },
  "question" : {
    "contentBlocks" : "contentBlocks",
    "id" : 7,
    "questionType" : "None",
    "order" : 9
  },
  "author" : {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "subjects" : [ "", "" ],
    "roles" : [ {
      "roleId" : 2
    }, {
      "roleId" : 2
    } ],
    "id" : 6,
    "tutorialPassed" : true,
    "email" : "email"
  },
  "children" : [ ],
  "timestamp" : "2000-01-23T04:56:07.000+00:00",
  "readBy" : [ {
    "id" : 1
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Post a new comment on a brick.
 *
 * body Body_3  (optional)
 * returns Comment
 **/
exports.bricksCommentPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 0,
  "text" : "Comment text...",
  "brick" : {
    "alternativeSubject" : "alternativeSubject",
    "subTopic" : "subTopic",
    "brief" : "brief",
    "synthesis" : "synthesis",
    "openQuestion" : "openQuestion",
    "created" : "2000-01-23T04:56:07.000+00:00",
    "revisionLog" : "revisionLog",
    "title" : "title",
    "subjectId" : 1,
    "attemptsCount" : 6,
    "brickLength" : "0",
    "alternativeTopics" : "alternativeTopics",
    "topic" : "topic",
    "prep" : "prep",
    "id" : 0,
    "locked" : true,
    "updated" : "2000-01-23T04:56:07.000+00:00"
  },
  "question" : {
    "contentBlocks" : "contentBlocks",
    "id" : 7,
    "questionType" : "None",
    "order" : 9
  },
  "author" : {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "subjects" : [ "", "" ],
    "roles" : [ {
      "roleId" : 2
    }, {
      "roleId" : 2
    } ],
    "id" : 6,
    "tutorialPassed" : true,
    "email" : "email"
  },
  "children" : [ ],
  "timestamp" : "2000-01-23T04:56:07.000+00:00",
  "readBy" : [ {
    "id" : 1
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all comments for a brick.
 *
 * brickId Integer 
 * returns List
 **/
exports.bricksCommentsBrickIdGET = function(brickId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 0,
  "text" : "Comment text...",
  "brick" : {
    "alternativeSubject" : "alternativeSubject",
    "subTopic" : "subTopic",
    "brief" : "brief",
    "synthesis" : "synthesis",
    "openQuestion" : "openQuestion",
    "created" : "2000-01-23T04:56:07.000+00:00",
    "revisionLog" : "revisionLog",
    "title" : "title",
    "subjectId" : 1,
    "attemptsCount" : 6,
    "brickLength" : "0",
    "alternativeTopics" : "alternativeTopics",
    "topic" : "topic",
    "prep" : "prep",
    "id" : 0,
    "locked" : true,
    "updated" : "2000-01-23T04:56:07.000+00:00"
  },
  "question" : {
    "contentBlocks" : "contentBlocks",
    "id" : 7,
    "questionType" : "None",
    "order" : 9
  },
  "author" : {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "subjects" : [ "", "" ],
    "roles" : [ {
      "roleId" : 2
    }, {
      "roleId" : 2
    } ],
    "id" : 6,
    "tutorialPassed" : true,
    "email" : "email"
  },
  "children" : [ ],
  "timestamp" : "2000-01-23T04:56:07.000+00:00",
  "readBy" : [ {
    "id" : 1
  } ]
}, {
  "id" : 0,
  "text" : "Comment text...",
  "brick" : {
    "alternativeSubject" : "alternativeSubject",
    "subTopic" : "subTopic",
    "brief" : "brief",
    "synthesis" : "synthesis",
    "openQuestion" : "openQuestion",
    "created" : "2000-01-23T04:56:07.000+00:00",
    "revisionLog" : "revisionLog",
    "title" : "title",
    "subjectId" : 1,
    "attemptsCount" : 6,
    "brickLength" : "0",
    "alternativeTopics" : "alternativeTopics",
    "topic" : "topic",
    "prep" : "prep",
    "id" : 0,
    "locked" : true,
    "updated" : "2000-01-23T04:56:07.000+00:00"
  },
  "question" : {
    "contentBlocks" : "contentBlocks",
    "id" : 7,
    "questionType" : "None",
    "order" : 9
  },
  "author" : {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "subjects" : [ "", "" ],
    "roles" : [ {
      "roleId" : 2
    }, {
      "roleId" : 2
    } ],
    "id" : 6,
    "tutorialPassed" : true,
    "email" : "email"
  },
  "children" : [ ],
  "timestamp" : "2000-01-23T04:56:07.000+00:00",
  "readBy" : [ {
    "id" : 1
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

