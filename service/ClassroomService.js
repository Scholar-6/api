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
    examples['application/json'] = {
  "bricks" : [ {
    "alternativeSubject" : "alternativeSubject",
    "brief" : "brief",
    "synthesis" : "synthesis",
    "openQuestion" : "openQuestion",
    "type" : 0,
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
    "prep" : "prep",
    "id" : 0,
    "locked" : true,
    "updated" : "2000-01-23T04:56:07.000+00:00"
  }, {
    "alternativeSubject" : "alternativeSubject",
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
    "prep" : "prep",
    "id" : 0,
    "locked" : true,
    "updated" : "2000-01-23T04:56:07.000+00:00"
  } ],
  "creator" : {
    "editedBricks" : [ {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
};
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
    examples['application/json'] = {
  "bricks" : [ {
    "alternativeSubject" : "alternativeSubject",
    "brief" : "brief",
    "synthesis" : "synthesis",
    "openQuestion" : "openQuestion",
    "type" : 0,
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
    "prep" : "prep",
    "id" : 0,
    "locked" : true,
    "updated" : "2000-01-23T04:56:07.000+00:00"
  }, {
    "alternativeSubject" : "alternativeSubject",
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
    "prep" : "prep",
    "id" : 0,
    "locked" : true,
    "updated" : "2000-01-23T04:56:07.000+00:00"
  } ],
  "creator" : {
    "editedBricks" : [ {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
};
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
exports.classroomsStudentsClassroomIdGET = function(classroomId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "editedBricks" : [ {
    "alternativeSubject" : "alternativeSubject",
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
    "prep" : "prep",
    "id" : 0,
    "locked" : true,
    "updated" : "2000-01-23T04:56:07.000+00:00"
  }, {
    "alternativeSubject" : "alternativeSubject",
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
    "prep" : "prep",
    "id" : 0,
    "locked" : true,
    "updated" : "2000-01-23T04:56:07.000+00:00"
  }, {
    "alternativeSubject" : "alternativeSubject",
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
    "prep" : "prep",
    "id" : 0,
    "locked" : true,
    "updated" : "2000-01-23T04:56:07.000+00:00"
  } ],
  "id" : 3,
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
 * Add students to the classroom
 *
 * classroomId BigDecimal 
 * studentsIds StudentsIds_1 
 * returns User
 **/
exports.classroomsStudentsClassroomIdPOST = function(classroomId,studentsIds) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "editedBricks" : [ {
    "alternativeSubject" : "alternativeSubject",
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
    "prep" : "prep",
    "id" : 0,
    "locked" : true,
    "updated" : "2000-01-23T04:56:07.000+00:00"
  }, {
    "alternativeSubject" : "alternativeSubject",
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
    "prep" : "prep",
    "id" : 0,
    "locked" : true,
    "updated" : "2000-01-23T04:56:07.000+00:00"
  }, {
    "alternativeSubject" : "alternativeSubject",
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
    "prep" : "prep",
    "id" : 0,
    "locked" : true,
    "updated" : "2000-01-23T04:56:07.000+00:00"
  } ],
  "id" : 3,
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
 * Remove student from the classroom
 *
 * studentId BigDecimal 
 * classroomId BigDecimal 
 * no response value expected for this operation
 **/
exports.classroomsStudentsClassroomIdStudentIdDELETE = function(studentId,classroomId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get all students
 *
 * returns User
 **/
exports.classroomsStudentsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "editedBricks" : [ {
    "alternativeSubject" : "alternativeSubject",
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
    "prep" : "prep",
    "id" : 0,
    "locked" : true,
    "updated" : "2000-01-23T04:56:07.000+00:00"
  }, {
    "alternativeSubject" : "alternativeSubject",
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
    "prep" : "prep",
    "id" : 0,
    "locked" : true,
    "updated" : "2000-01-23T04:56:07.000+00:00"
  }, {
    "alternativeSubject" : "alternativeSubject",
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
    "prep" : "prep",
    "id" : 0,
    "locked" : true,
    "updated" : "2000-01-23T04:56:07.000+00:00"
  } ],
  "id" : 3,
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
    "brief" : "brief",
    "synthesis" : "synthesis",
    "openQuestion" : "openQuestion",
    "type" : 0,
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
    "prep" : "prep",
    "id" : 0,
    "locked" : true,
    "updated" : "2000-01-23T04:56:07.000+00:00"
  }, {
    "alternativeSubject" : "alternativeSubject",
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
    "prep" : "prep",
    "id" : 0,
    "locked" : true,
    "updated" : "2000-01-23T04:56:07.000+00:00"
  } ],
  "creator" : {
    "editedBricks" : [ {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
}, {
  "bricks" : [ {
    "alternativeSubject" : "alternativeSubject",
    "brief" : "brief",
    "synthesis" : "synthesis",
    "openQuestion" : "openQuestion",
    "type" : 0,
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
    "prep" : "prep",
    "id" : 0,
    "locked" : true,
    "updated" : "2000-01-23T04:56:07.000+00:00"
  }, {
    "alternativeSubject" : "alternativeSubject",
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
    "prep" : "prep",
    "id" : 0,
    "locked" : true,
    "updated" : "2000-01-23T04:56:07.000+00:00"
  } ],
  "creator" : {
    "editedBricks" : [ {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all pending students
 *
 * body SearchModel Search model
 * returns UserShort
 **/
exports.getClassroomsInvitations = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Search classrooms.
 * 
 *
 * body SearchModel 
 * returns List
 **/
exports.searchClassrooms = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "bricks" : [ {
    "alternativeSubject" : "alternativeSubject",
    "brief" : "brief",
    "synthesis" : "synthesis",
    "openQuestion" : "openQuestion",
    "type" : 0,
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
    "prep" : "prep",
    "id" : 0,
    "locked" : true,
    "updated" : "2000-01-23T04:56:07.000+00:00"
  }, {
    "alternativeSubject" : "alternativeSubject",
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
    "prep" : "prep",
    "id" : 0,
    "locked" : true,
    "updated" : "2000-01-23T04:56:07.000+00:00"
  } ],
  "creator" : {
    "editedBricks" : [ {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
}, {
  "bricks" : [ {
    "alternativeSubject" : "alternativeSubject",
    "brief" : "brief",
    "synthesis" : "synthesis",
    "openQuestion" : "openQuestion",
    "type" : 0,
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
    "prep" : "prep",
    "id" : 0,
    "locked" : true,
    "updated" : "2000-01-23T04:56:07.000+00:00"
  }, {
    "alternativeSubject" : "alternativeSubject",
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
    "prep" : "prep",
    "id" : 0,
    "locked" : true,
    "updated" : "2000-01-23T04:56:07.000+00:00"
  } ],
  "creator" : {
    "editedBricks" : [ {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
      "prep" : "prep",
      "id" : 0,
      "locked" : true,
      "updated" : "2000-01-23T04:56:07.000+00:00"
    }, {
      "alternativeSubject" : "alternativeSubject",
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
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

