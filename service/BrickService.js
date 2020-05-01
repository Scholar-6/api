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
    "color" : "color",
    "name" : "name",
    "checked" : true,
    "id" : 5,
    "bricksCount" : 5.63737665663332876420099637471139430999755859375
  },
  "created" : "2000-01-23T04:56:07.000+00:00",
  "questions" : [ {
    "contentBlocks" : "contentBlocks",
    "id" : 2,
    "questionType" : "None",
    "order" : 7
  }, {
    "contentBlocks" : "contentBlocks",
    "id" : 2,
    "questionType" : "None",
    "order" : 7
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Set brick to build status
 * 
 *
 * id Integer 
 * returns Brick
 **/
exports.brickBuildIdPOST = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "alternativeSubject" : "alternativeSubject",
  "subTopic" : "subTopic",
  "brief" : "brief",
  "synthesis" : "synthesis",
  "openQuestion" : "openQuestion",
  "subject" : {
    "color" : "color",
    "name" : "name",
    "checked" : true,
    "id" : 5,
    "bricksCount" : 5.63737665663332876420099637471139430999755859375
  },
  "created" : "2000-01-23T04:56:07.000+00:00",
  "questions" : [ {
    "contentBlocks" : "contentBlocks",
    "id" : 2,
    "questionType" : "None",
    "order" : 7
  }, {
    "contentBlocks" : "contentBlocks",
    "id" : 2,
    "questionType" : "None",
    "order" : 7
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
    "color" : "color",
    "name" : "name",
    "checked" : true,
    "id" : 5,
    "bricksCount" : 5.63737665663332876420099637471139430999755859375
  },
  "created" : "2000-01-23T04:56:07.000+00:00",
  "questions" : [ {
    "contentBlocks" : "contentBlocks",
    "id" : 2,
    "questionType" : "None",
    "order" : 7
  }, {
    "contentBlocks" : "contentBlocks",
    "id" : 2,
    "questionType" : "None",
    "order" : 7
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Set brick to publish status
 * 
 *
 * id Integer 
 * returns Brick
 **/
exports.brickPublishIdPOST = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "alternativeSubject" : "alternativeSubject",
  "subTopic" : "subTopic",
  "brief" : "brief",
  "synthesis" : "synthesis",
  "openQuestion" : "openQuestion",
  "subject" : {
    "color" : "color",
    "name" : "name",
    "checked" : true,
    "id" : 5,
    "bricksCount" : 5.63737665663332876420099637471139430999755859375
  },
  "created" : "2000-01-23T04:56:07.000+00:00",
  "questions" : [ {
    "contentBlocks" : "contentBlocks",
    "id" : 2,
    "questionType" : "None",
    "order" : 7
  }, {
    "contentBlocks" : "contentBlocks",
    "id" : 2,
    "questionType" : "None",
    "order" : 7
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Set brick to review status
 * 
 *
 * id Integer 
 * returns Brick
 **/
exports.brickReviewIdPOST = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "alternativeSubject" : "alternativeSubject",
  "subTopic" : "subTopic",
  "brief" : "brief",
  "synthesis" : "synthesis",
  "openQuestion" : "openQuestion",
  "subject" : {
    "color" : "color",
    "name" : "name",
    "checked" : true,
    "id" : 5,
    "bricksCount" : 5.63737665663332876420099637471139430999755859375
  },
  "created" : "2000-01-23T04:56:07.000+00:00",
  "questions" : [ {
    "contentBlocks" : "contentBlocks",
    "id" : 2,
    "questionType" : "None",
    "order" : 7
  }, {
    "contentBlocks" : "contentBlocks",
    "id" : 2,
    "questionType" : "None",
    "order" : 7
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
 * Search over all bricks
 *
 * body SearchModel Search model
 * returns ArrayOfBricks
 **/
exports.bricksSearchPOST = function(body) {
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
    "color" : "color",
    "name" : "name",
    "checked" : true,
    "id" : 5,
    "bricksCount" : 5.63737665663332876420099637471139430999755859375
  },
  "created" : "2000-01-23T04:56:07.000+00:00",
  "questions" : [ {
    "contentBlocks" : "contentBlocks",
    "id" : 2,
    "questionType" : "None",
    "order" : 7
  }, {
    "contentBlocks" : "contentBlocks",
    "id" : 2,
    "questionType" : "None",
    "order" : 7
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

