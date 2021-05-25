'use strict';

var utils = require('../utils/writer.js');
var Brick = require('../service/BrickService');

module.exports.addBrick = function addBrick (req, res, next) {
  var body = req.swagger.params['body'].value;
  Brick.addBrick(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.addBrickCover = function addBrickCover (req, res, next) {
  var body = req.swagger.params['body'].value;
  Brick.addBrickCover(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.archiveAssignment = function archiveAssignment (req, res, next) {
  var assignmentId = req.swagger.params['assignmentId'].value;
  Brick.archiveAssignment(assignmentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.assignClasses = function assignClasses (req, res, next) {
  var brickId = req.swagger.params['brickId'].value;
  var classesIds = req.swagger.params['classesIds'].value;
  Brick.assignClasses(brickId,classesIds)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.assignCoAuthor = function assignCoAuthor (req, res, next) {
  var body = req.swagger.params['body'].value;
  Brick.assignCoAuthor(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.assignEditor = function assignEditor (req, res, next) {
  var body = req.swagger.params['body'].value;
  Brick.assignEditor(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.assignStudents = function assignStudents (req, res, next) {
  var brickId = req.swagger.params['brickId'].value;
  var studentsIds = req.swagger.params['studentsIds'].value;
  Brick.assignStudents(brickId,studentsIds)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.brickBrickIdCommentCommentIdGET = function brickBrickIdCommentCommentIdGET (req, res, next) {
  var brickId = req.swagger.params['brickId'].value;
  var commentId = req.swagger.params['commentId'].value;
  Brick.brickBrickIdCommentCommentIdGET(brickId,commentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.brickBuildIdPOST = function brickBuildIdPOST (req, res, next) {
  var id = req.swagger.params['id'].value;
  Brick.brickBuildIdPOST(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.brickIdDELETE = function brickIdDELETE (req, res, next) {
  var id = req.swagger.params['id'].value;
  Brick.brickIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.brickIdGET = function brickIdGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  Brick.brickIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.brickPublishIdPOST = function brickPublishIdPOST (req, res, next) {
  var id = req.swagger.params['id'].value;
  Brick.brickPublishIdPOST(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.brickReviewIdPOST = function brickReviewIdPOST (req, res, next) {
  var id = req.swagger.params['id'].value;
  Brick.brickReviewIdPOST(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.brickSetCoreLibraryBrickIdIsCorePUT = function brickSetCoreLibraryBrickIdIsCorePUT (req, res, next) {
  var brickId = req.swagger.params['brickId'].value;
  var isCore = req.swagger.params['isCore'].value;
  Brick.brickSetCoreLibraryBrickIdIsCorePUT(brickId,isCore)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bricksAssignedGET = function bricksAssignedGET (req, res, next) {
  Brick.bricksAssignedGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bricksByStatusStatusGET = function bricksByStatusStatusGET (req, res, next) {
  var status = req.swagger.params['status'].value;
  Brick.bricksByStatusStatusGET(status)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bricksCommentPOST = function bricksCommentPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Brick.bricksCommentPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bricksCommentsBrickIdGET = function bricksCommentsBrickIdGET (req, res, next) {
  var brickId = req.swagger.params['brickId'].value;
  Brick.bricksCommentsBrickIdGET(brickId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bricksCurrentUserGET = function bricksCurrentUserGET (req, res, next) {
  Brick.bricksCurrentUserGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bricksCurrentUserShortGET = function bricksCurrentUserShortGET (req, res, next) {
  Brick.bricksCurrentUserShortGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bricksGET = function bricksGET (req, res, next) {
  Brick.bricksGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bricksPublicGET = function bricksPublicGET (req, res, next) {
  Brick.bricksPublicGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bricksPublicSearchPOST = function bricksPublicSearchPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Brick.bricksPublicSearchPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bricksSearchPOST = function bricksSearchPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Brick.bricksSearchPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getLastest = function getLastest (req, res, next) {
  Brick.getLastest()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateBrick = function updateBrick (req, res, next) {
  var body = req.swagger.params['body'].value;
  Brick.updateBrick(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
