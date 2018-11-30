var express = require('express'),
  brickFirebase = require('../firebase/brick'),
  questionFirebase = require('../firebase/question'),
  router = express.Router();

router.get('/', function(req, res) {
  brickFirebase.getBricks().then(bricks => res.send(bricks) );
});

router.post('/', function(req, res) {
  brickFirebase.createBrick(req.body).then(id => res.send('brick created ' + id));
});

router.get('/:brickId', function(req, res) {
  brickFirebase.getBrick(req.params.brickId).then(brick => {
    res.send(brick)
  });
});

router.put('/:brickId', function(req, res) {
  res.send('update brick by id = ' + req.params.brickId);
});

router.delete('/:brickId', function(req, res) {
  res.send('delete brick by id = ' + req.params.brickId);
});


router.get('/:brickId/question/:questionId', function (req, res) {
  questionFirebase.getQuestion(req.params.brickId, req.params.questionId).then(question => res.send(question));
});

router.post('/:brickId/question/:questionId', function (req, res) {
  questionFirebase.createQuestion(req.params.brickId, req.body).then(questionId => {
    res.send('created question by id = ' + questionId + ' where brick id = ' + req.params.brickId);
  });
});

router.put('/:brickId/question/:questionId', function (req, res) {
  questionFirebase.updateQuestion(req.params.brickId, req.params.questionId, req.body).then(questionId => {
    res.send('update question by id = ' + req.params.questionId + ' where brick id = ' + req.params.brickId);
  });
});

router.delete('/:brickId/question/:questionId', function (req, res) {
  questionFirebase.deleteQuestion(req.params.brickId, req.params.questionId).then(questionId => {
    res.send('delete question by id = ' + req.params.questionId + ' where brick id = ' + req.params.brickId);
  });
});

module.exports = router
