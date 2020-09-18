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
    "bricksCount" : 5,
    "publishedBricksCount" : 2
  },
  "created" : "2000-01-23T04:56:07.000+00:00",
  "questions" : [ {
    "contentBlocks" : "contentBlocks",
    "id" : 7,
    "questionType" : "None",
    "order" : 9
  }, {
    "contentBlocks" : "contentBlocks",
    "id" : 7,
    "questionType" : "None",
    "order" : 9
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
 * Assign classes to brick
 * 
 *
 * brickId Integer 
 * classesIds ClassesIds 
 * no response value expected for this operation
 **/
exports.assignClasses = function(brickId,classesIds) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Assign students to brick
 * 
 *
 * brickId Integer 
 * studentsIds StudentsIds 
 * no response value expected for this operation
 **/
exports.assignStudents = function(brickId,studentsIds) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


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
    "bricksCount" : 5,
    "publishedBricksCount" : 2
  },
  "created" : "2000-01-23T04:56:07.000+00:00",
  "questions" : [ {
    "contentBlocks" : "contentBlocks",
    "id" : 7,
    "questionType" : "None",
    "order" : 9
  }, {
    "contentBlocks" : "contentBlocks",
    "id" : 7,
    "questionType" : "None",
    "order" : 9
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
    "bricksCount" : 5,
    "publishedBricksCount" : 2
  },
  "created" : "2000-01-23T04:56:07.000+00:00",
  "questions" : [ {
    "contentBlocks" : "contentBlocks",
    "id" : 7,
    "questionType" : "None",
    "order" : 9
  }, {
    "contentBlocks" : "contentBlocks",
    "id" : 7,
    "questionType" : "None",
    "order" : 9
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
    "bricksCount" : 5,
    "publishedBricksCount" : 2
  },
  "created" : "2000-01-23T04:56:07.000+00:00",
  "questions" : [ {
    "contentBlocks" : "contentBlocks",
    "id" : 7,
    "questionType" : "None",
    "order" : 9
  }, {
    "contentBlocks" : "contentBlocks",
    "id" : 7,
    "questionType" : "None",
    "order" : 9
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
    "bricksCount" : 5,
    "publishedBricksCount" : 2
  },
  "created" : "2000-01-23T04:56:07.000+00:00",
  "questions" : [ {
    "contentBlocks" : "contentBlocks",
    "id" : 7,
    "questionType" : "None",
    "order" : 9
  }, {
    "contentBlocks" : "contentBlocks",
    "id" : 7,
    "questionType" : "None",
    "order" : 9
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
 * Marks a single notification as read.
 *
 * brickId Integer 
 * isCore Boolean 
 * no response value expected for this operation
 **/
exports.brickSetCoreLibraryBrickIdIsCorePUT = function(brickId,isCore) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get all assigned bricks for the current user.
 *
 * returns List
 **/
exports.bricksAssignedGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "assignedDate" : "2000-01-23T04:56:07.000+00:00",
  "classroom" : {
    "bricks" : [ {
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
        "bricksCount" : 5,
        "publishedBricksCount" : 2
      },
      "created" : "2000-01-23T04:56:07.000+00:00",
      "questions" : [ {
        "contentBlocks" : "contentBlocks",
        "id" : 7,
        "questionType" : "None",
        "order" : 9
      }, {
        "contentBlocks" : "contentBlocks",
        "id" : 7,
        "questionType" : "None",
        "order" : 9
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
        "color" : "color",
        "name" : "name",
        "checked" : true,
        "id" : 5,
        "bricksCount" : 5,
        "publishedBricksCount" : 2
      },
      "created" : "2000-01-23T04:56:07.000+00:00",
      "questions" : [ {
        "contentBlocks" : "contentBlocks",
        "id" : 7,
        "questionType" : "None",
        "order" : 9
      }, {
        "contentBlocks" : "contentBlocks",
        "id" : 7,
        "questionType" : "None",
        "order" : 9
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
    "creator" : {
      "editedBricks" : [ {
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
          "bricksCount" : 5,
          "publishedBricksCount" : 2
        },
        "created" : "2000-01-23T04:56:07.000+00:00",
        "questions" : [ {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
        }, {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
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
          "color" : "color",
          "name" : "name",
          "checked" : true,
          "id" : 5,
          "bricksCount" : 5,
          "publishedBricksCount" : 2
        },
        "created" : "2000-01-23T04:56:07.000+00:00",
        "questions" : [ {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
        }, {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
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
      "roles" : [ {
        "roleId" : 2
      }, {
        "roleId" : 2
      } ],
      "createBricks" : [ {
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
          "bricksCount" : 5,
          "publishedBricksCount" : 2
        },
        "created" : "2000-01-23T04:56:07.000+00:00",
        "questions" : [ {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
        }, {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
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
          "color" : "color",
          "name" : "name",
          "checked" : true,
          "id" : 5,
          "bricksCount" : 5,
          "publishedBricksCount" : 2
        },
        "created" : "2000-01-23T04:56:07.000+00:00",
        "questions" : [ {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
        }, {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
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
      "id" : 3,
      "tutorialPassed" : true,
      "email" : "email"
    },
    "created" : "created",
    "teachers" : [ {
      "editedBricks" : [ {
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
          "bricksCount" : 5,
          "publishedBricksCount" : 2
        },
        "created" : "2000-01-23T04:56:07.000+00:00",
        "questions" : [ {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
        }, {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
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
          "color" : "color",
          "name" : "name",
          "checked" : true,
          "id" : 5,
          "bricksCount" : 5,
          "publishedBricksCount" : 2
        },
        "created" : "2000-01-23T04:56:07.000+00:00",
        "questions" : [ {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
        }, {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
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
      "roles" : [ {
        "roleId" : 2
      }, {
        "roleId" : 2
      } ],
      "createBricks" : [ {
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
          "bricksCount" : 5,
          "publishedBricksCount" : 2
        },
        "created" : "2000-01-23T04:56:07.000+00:00",
        "questions" : [ {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
        }, {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
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
          "color" : "color",
          "name" : "name",
          "checked" : true,
          "id" : 5,
          "bricksCount" : 5,
          "publishedBricksCount" : 2
        },
        "created" : "2000-01-23T04:56:07.000+00:00",
        "questions" : [ {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
        }, {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
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
      "id" : 3,
      "tutorialPassed" : true,
      "email" : "email"
    }, {
      "editedBricks" : [ {
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
          "bricksCount" : 5,
          "publishedBricksCount" : 2
        },
        "created" : "2000-01-23T04:56:07.000+00:00",
        "questions" : [ {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
        }, {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
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
          "color" : "color",
          "name" : "name",
          "checked" : true,
          "id" : 5,
          "bricksCount" : 5,
          "publishedBricksCount" : 2
        },
        "created" : "2000-01-23T04:56:07.000+00:00",
        "questions" : [ {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
        }, {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
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
      "roles" : [ {
        "roleId" : 2
      }, {
        "roleId" : 2
      } ],
      "createBricks" : [ {
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
          "bricksCount" : 5,
          "publishedBricksCount" : 2
        },
        "created" : "2000-01-23T04:56:07.000+00:00",
        "questions" : [ {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
        }, {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
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
          "color" : "color",
          "name" : "name",
          "checked" : true,
          "id" : 5,
          "bricksCount" : 5,
          "publishedBricksCount" : 2
        },
        "created" : "2000-01-23T04:56:07.000+00:00",
        "questions" : [ {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
        }, {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
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
      "id" : 3,
      "tutorialPassed" : true,
      "email" : "email"
    } ],
    "name" : "name",
    "students" : [ {
      "editedBricks" : [ {
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
          "bricksCount" : 5,
          "publishedBricksCount" : 2
        },
        "created" : "2000-01-23T04:56:07.000+00:00",
        "questions" : [ {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
        }, {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
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
          "color" : "color",
          "name" : "name",
          "checked" : true,
          "id" : 5,
          "bricksCount" : 5,
          "publishedBricksCount" : 2
        },
        "created" : "2000-01-23T04:56:07.000+00:00",
        "questions" : [ {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
        }, {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
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
      "roles" : [ {
        "roleId" : 2
      }, {
        "roleId" : 2
      } ],
      "createBricks" : [ {
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
          "bricksCount" : 5,
          "publishedBricksCount" : 2
        },
        "created" : "2000-01-23T04:56:07.000+00:00",
        "questions" : [ {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
        }, {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
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
          "color" : "color",
          "name" : "name",
          "checked" : true,
          "id" : 5,
          "bricksCount" : 5,
          "publishedBricksCount" : 2
        },
        "created" : "2000-01-23T04:56:07.000+00:00",
        "questions" : [ {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
        }, {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
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
      "id" : 3,
      "tutorialPassed" : true,
      "email" : "email"
    }, {
      "editedBricks" : [ {
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
          "bricksCount" : 5,
          "publishedBricksCount" : 2
        },
        "created" : "2000-01-23T04:56:07.000+00:00",
        "questions" : [ {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
        }, {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
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
          "color" : "color",
          "name" : "name",
          "checked" : true,
          "id" : 5,
          "bricksCount" : 5,
          "publishedBricksCount" : 2
        },
        "created" : "2000-01-23T04:56:07.000+00:00",
        "questions" : [ {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
        }, {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
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
      "roles" : [ {
        "roleId" : 2
      }, {
        "roleId" : 2
      } ],
      "createBricks" : [ {
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
          "bricksCount" : 5,
          "publishedBricksCount" : 2
        },
        "created" : "2000-01-23T04:56:07.000+00:00",
        "questions" : [ {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
        }, {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
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
          "color" : "color",
          "name" : "name",
          "checked" : true,
          "id" : 5,
          "bricksCount" : 5,
          "publishedBricksCount" : 2
        },
        "created" : "2000-01-23T04:56:07.000+00:00",
        "questions" : [ {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
        }, {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
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
      "id" : 3,
      "tutorialPassed" : true,
      "email" : "email"
    } ],
    "id" : 0.8008281904610115,
    "updated" : "updated",
    "status" : 6
  },
  "studentStatus" : [ {
    "studentId" : 6.027456183070403,
    "status" : 1.4658129805029452
  }, {
    "studentId" : 6.027456183070403,
    "status" : 1.4658129805029452
  } ],
  "id" : 0.8008281904610115,
  "brick" : {
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
      "bricksCount" : 5,
      "publishedBricksCount" : 2
    },
    "created" : "2000-01-23T04:56:07.000+00:00",
    "questions" : [ {
      "contentBlocks" : "contentBlocks",
      "id" : 7,
      "questionType" : "None",
      "order" : 9
    }, {
      "contentBlocks" : "contentBlocks",
      "id" : 7,
      "questionType" : "None",
      "order" : 9
    } ],
    "revisionLog" : "revisionLog",
    "title" : "title",
    "subjectId" : 1,
    "isCore" : true,
    "attemptsCount" : 6,
    "brickLength" : "0",
    "alternativeTopics" : "alternativeTopics",
    "topic" : "topic",
    "prep" : "prep",
    "id" : 0,
    "locked" : true,
    "updated" : "2000-01-23T04:56:07.000+00:00"
  }
}, {
  "assignedDate" : "2000-01-23T04:56:07.000+00:00",
  "classroom" : {
    "bricks" : [ {
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
        "bricksCount" : 5,
        "publishedBricksCount" : 2
      },
      "created" : "2000-01-23T04:56:07.000+00:00",
      "questions" : [ {
        "contentBlocks" : "contentBlocks",
        "id" : 7,
        "questionType" : "None",
        "order" : 9
      }, {
        "contentBlocks" : "contentBlocks",
        "id" : 7,
        "questionType" : "None",
        "order" : 9
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
        "color" : "color",
        "name" : "name",
        "checked" : true,
        "id" : 5,
        "bricksCount" : 5,
        "publishedBricksCount" : 2
      },
      "created" : "2000-01-23T04:56:07.000+00:00",
      "questions" : [ {
        "contentBlocks" : "contentBlocks",
        "id" : 7,
        "questionType" : "None",
        "order" : 9
      }, {
        "contentBlocks" : "contentBlocks",
        "id" : 7,
        "questionType" : "None",
        "order" : 9
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
    "creator" : {
      "editedBricks" : [ {
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
          "bricksCount" : 5,
          "publishedBricksCount" : 2
        },
        "created" : "2000-01-23T04:56:07.000+00:00",
        "questions" : [ {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
        }, {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
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
          "color" : "color",
          "name" : "name",
          "checked" : true,
          "id" : 5,
          "bricksCount" : 5,
          "publishedBricksCount" : 2
        },
        "created" : "2000-01-23T04:56:07.000+00:00",
        "questions" : [ {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
        }, {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
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
      "roles" : [ {
        "roleId" : 2
      }, {
        "roleId" : 2
      } ],
      "createBricks" : [ {
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
          "bricksCount" : 5,
          "publishedBricksCount" : 2
        },
        "created" : "2000-01-23T04:56:07.000+00:00",
        "questions" : [ {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
        }, {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
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
          "color" : "color",
          "name" : "name",
          "checked" : true,
          "id" : 5,
          "bricksCount" : 5,
          "publishedBricksCount" : 2
        },
        "created" : "2000-01-23T04:56:07.000+00:00",
        "questions" : [ {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
        }, {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
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
      "id" : 3,
      "tutorialPassed" : true,
      "email" : "email"
    },
    "created" : "created",
    "teachers" : [ {
      "editedBricks" : [ {
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
          "bricksCount" : 5,
          "publishedBricksCount" : 2
        },
        "created" : "2000-01-23T04:56:07.000+00:00",
        "questions" : [ {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
        }, {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
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
          "color" : "color",
          "name" : "name",
          "checked" : true,
          "id" : 5,
          "bricksCount" : 5,
          "publishedBricksCount" : 2
        },
        "created" : "2000-01-23T04:56:07.000+00:00",
        "questions" : [ {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
        }, {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
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
      "roles" : [ {
        "roleId" : 2
      }, {
        "roleId" : 2
      } ],
      "createBricks" : [ {
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
          "bricksCount" : 5,
          "publishedBricksCount" : 2
        },
        "created" : "2000-01-23T04:56:07.000+00:00",
        "questions" : [ {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
        }, {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
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
          "color" : "color",
          "name" : "name",
          "checked" : true,
          "id" : 5,
          "bricksCount" : 5,
          "publishedBricksCount" : 2
        },
        "created" : "2000-01-23T04:56:07.000+00:00",
        "questions" : [ {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
        }, {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
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
      "id" : 3,
      "tutorialPassed" : true,
      "email" : "email"
    }, {
      "editedBricks" : [ {
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
          "bricksCount" : 5,
          "publishedBricksCount" : 2
        },
        "created" : "2000-01-23T04:56:07.000+00:00",
        "questions" : [ {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
        }, {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
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
          "color" : "color",
          "name" : "name",
          "checked" : true,
          "id" : 5,
          "bricksCount" : 5,
          "publishedBricksCount" : 2
        },
        "created" : "2000-01-23T04:56:07.000+00:00",
        "questions" : [ {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
        }, {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
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
      "roles" : [ {
        "roleId" : 2
      }, {
        "roleId" : 2
      } ],
      "createBricks" : [ {
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
          "bricksCount" : 5,
          "publishedBricksCount" : 2
        },
        "created" : "2000-01-23T04:56:07.000+00:00",
        "questions" : [ {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
        }, {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
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
          "color" : "color",
          "name" : "name",
          "checked" : true,
          "id" : 5,
          "bricksCount" : 5,
          "publishedBricksCount" : 2
        },
        "created" : "2000-01-23T04:56:07.000+00:00",
        "questions" : [ {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
        }, {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
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
      "id" : 3,
      "tutorialPassed" : true,
      "email" : "email"
    } ],
    "name" : "name",
    "students" : [ {
      "editedBricks" : [ {
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
          "bricksCount" : 5,
          "publishedBricksCount" : 2
        },
        "created" : "2000-01-23T04:56:07.000+00:00",
        "questions" : [ {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
        }, {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
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
          "color" : "color",
          "name" : "name",
          "checked" : true,
          "id" : 5,
          "bricksCount" : 5,
          "publishedBricksCount" : 2
        },
        "created" : "2000-01-23T04:56:07.000+00:00",
        "questions" : [ {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
        }, {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
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
      "roles" : [ {
        "roleId" : 2
      }, {
        "roleId" : 2
      } ],
      "createBricks" : [ {
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
          "bricksCount" : 5,
          "publishedBricksCount" : 2
        },
        "created" : "2000-01-23T04:56:07.000+00:00",
        "questions" : [ {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
        }, {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
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
          "color" : "color",
          "name" : "name",
          "checked" : true,
          "id" : 5,
          "bricksCount" : 5,
          "publishedBricksCount" : 2
        },
        "created" : "2000-01-23T04:56:07.000+00:00",
        "questions" : [ {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
        }, {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
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
      "id" : 3,
      "tutorialPassed" : true,
      "email" : "email"
    }, {
      "editedBricks" : [ {
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
          "bricksCount" : 5,
          "publishedBricksCount" : 2
        },
        "created" : "2000-01-23T04:56:07.000+00:00",
        "questions" : [ {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
        }, {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
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
          "color" : "color",
          "name" : "name",
          "checked" : true,
          "id" : 5,
          "bricksCount" : 5,
          "publishedBricksCount" : 2
        },
        "created" : "2000-01-23T04:56:07.000+00:00",
        "questions" : [ {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
        }, {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
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
      "roles" : [ {
        "roleId" : 2
      }, {
        "roleId" : 2
      } ],
      "createBricks" : [ {
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
          "bricksCount" : 5,
          "publishedBricksCount" : 2
        },
        "created" : "2000-01-23T04:56:07.000+00:00",
        "questions" : [ {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
        }, {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
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
          "color" : "color",
          "name" : "name",
          "checked" : true,
          "id" : 5,
          "bricksCount" : 5,
          "publishedBricksCount" : 2
        },
        "created" : "2000-01-23T04:56:07.000+00:00",
        "questions" : [ {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
        }, {
          "contentBlocks" : "contentBlocks",
          "id" : 7,
          "questionType" : "None",
          "order" : 9
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
      "id" : 3,
      "tutorialPassed" : true,
      "email" : "email"
    } ],
    "id" : 0.8008281904610115,
    "updated" : "updated",
    "status" : 6
  },
  "studentStatus" : [ {
    "studentId" : 6.027456183070403,
    "status" : 1.4658129805029452
  }, {
    "studentId" : 6.027456183070403,
    "status" : 1.4658129805029452
  } ],
  "id" : 0.8008281904610115,
  "brick" : {
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
      "bricksCount" : 5,
      "publishedBricksCount" : 2
    },
    "created" : "2000-01-23T04:56:07.000+00:00",
    "questions" : [ {
      "contentBlocks" : "contentBlocks",
      "id" : 7,
      "questionType" : "None",
      "order" : 9
    }, {
      "contentBlocks" : "contentBlocks",
      "id" : 7,
      "questionType" : "None",
      "order" : 9
    } ],
    "revisionLog" : "revisionLog",
    "title" : "title",
    "subjectId" : 1,
    "isCore" : true,
    "attemptsCount" : 6,
    "brickLength" : "0",
    "alternativeTopics" : "alternativeTopics",
    "topic" : "topic",
    "prep" : "prep",
    "id" : 0,
    "locked" : true,
    "updated" : "2000-01-23T04:56:07.000+00:00"
  }
} ];
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
    "bricksCount" : 5,
    "publishedBricksCount" : 2
  },
  "created" : "2000-01-23T04:56:07.000+00:00",
  "questions" : [ {
    "contentBlocks" : "contentBlocks",
    "id" : 7,
    "questionType" : "None",
    "order" : 9
  }, {
    "contentBlocks" : "contentBlocks",
    "id" : 7,
    "questionType" : "None",
    "order" : 9
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

