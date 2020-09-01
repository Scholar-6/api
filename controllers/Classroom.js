'use strict';

var utils = require('../utils/writer.js');
var Classroom = require('../service/ClassroomService');

module.exports.classroomClassroomIdDELETE = function classroomClassroomIdDELETE (req, res, next) {
  var classroomId = req.swagger.params['classroomId'].value;
  Classroom.classroomClassroomIdDELETE(classroomId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.classroomPOST = function classroomPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Classroom.classroomPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.classroomPUT = function classroomPUT (req, res, next) {
  var body = req.swagger.params['body'].value;
  Classroom.classroomPUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.classroomsStudentsClassroomIdGET = function classroomsStudentsClassroomIdGET (req, res, next) {
  var classroomId = req.swagger.params['classroomId'].value;
  Classroom.classroomsStudentsClassroomIdGET(classroomId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.classroomsStudentsClassroomIdPOST = function classroomsStudentsClassroomIdPOST (req, res, next) {
  var classroomId = req.swagger.params['classroomId'].value;
  var studentsIds = req.swagger.params['studentsIds'].value;
  Classroom.classroomsStudentsClassroomIdPOST(classroomId,studentsIds)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.classroomsStudentsClassroomIdStudentIdDELETE = function classroomsStudentsClassroomIdStudentIdDELETE (req, res, next) {
  var studentId = req.swagger.params['studentId'].value;
  var classroomId = req.swagger.params['classroomId'].value;
  Classroom.classroomsStudentsClassroomIdStudentIdDELETE(studentId,classroomId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.classroomsStudentsGET = function classroomsStudentsGET (req, res, next) {
  Classroom.classroomsStudentsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllClassrooms = function getAllClassrooms (req, res, next) {
  Classroom.getAllClassrooms()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
