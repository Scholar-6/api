'use strict';


/**
 * Delete classroom
 *
 * classroomId BigDecimal 
 * no response value expected for this operation
 **/
exports.classroomClassroomIdDELETE = function(classroomId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create classroom
 *
 * body Classroom 
 * returns Classroom
 **/
exports.classroomPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update classroom
 *
 * body Classroom updated classroom
 * returns Classroom
 **/
exports.classroomPUT = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get classroom students
 *
 * classroomId BigDecimal 
 * returns User
 **/
exports.classrooomsStudentsClassroomIdGET = function(classroomId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add stundents to the classroom
 *
 * classroomId BigDecimal 
 * studentsIds StudentsIds_1 
 * returns User
 **/
exports.classrooomsStudentsClassroomIdPOST = function(classroomId,studentsIds) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Remove stundent from the classroom
 *
 * studentId BigDecimal 
 * classroomId BigDecimal 
 * no response value expected for this operation
 **/
exports.classrooomsStudentsClassroomIdStudentIdDELETE = function(studentId,classroomId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get all students
 *
 * returns User
 **/
exports.classrooomsStudentsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all classrooms.
 * 
 *
 * returns List
 **/
exports.getAllClassrooms = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
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
  "id" : 0.80082819046101150206595775671303272247314453125,
  "updated" : "updated",
  "status" : 6
}, {
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
  "id" : 0.80082819046101150206595775671303272247314453125,
  "updated" : "updated",
  "status" : 6
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

