'use strict';


/**
 * Activate user by id
 *
 * userId String 
 * no response value expected for this operation
 **/
exports.userActivateUserIdPUT = function(userId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


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
    "created" : "2000-01-23T04:56:07.000+00:00",
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
    "created" : "2000-01-23T04:56:07.000+00:00",
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
    "created" : "2000-01-23T04:56:07.000+00:00",
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
    "created" : "2000-01-23T04:56:07.000+00:00",
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
 * Dectivate user by id
 *
 * userId String 
 * no response value expected for this operation
 **/
exports.userDeactivateUserIdPUT = function(userId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update user info
 *
 * body UserUpdateModel 
 * no response value expected for this operation
 **/
exports.userPUT = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Mark tutorial as showed for current user
 *
 * no response value expected for this operation
 **/
exports.userTutorialShowedPUT = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Search users
 *
 * body UserSearchModel 
 * returns inline_response_200
 **/
exports.usersPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "pageData" : [ {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "subjects" : [ "", "" ],
    "id" : 6,
    "type" : 1,
    "tutorialPassed" : true,
    "email" : "email"
  }, {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "subjects" : [ "", "" ],
    "id" : 6,
    "type" : 1,
    "tutorialPassed" : true,
    "email" : "email"
  } ],
  "totalCount" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
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
    "created" : "2000-01-23T04:56:07.000+00:00",
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
    "created" : "2000-01-23T04:56:07.000+00:00",
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
    "created" : "2000-01-23T04:56:07.000+00:00",
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
    "created" : "2000-01-23T04:56:07.000+00:00",
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

