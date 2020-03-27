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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete specific brick by id
 *
 * id Integer 
 * no response value expected for this operation
 **/
exports.brickIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
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
 * status Integer 
 * returns ArrayOfBricks
 **/
exports.bricksByStatusStatusGET = function(status) {
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
 * Get all bricks of current user
 *
 * returns ArrayOfBricks
 **/
exports.bricksCurrentUserGET = function() {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

