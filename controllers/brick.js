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
  brickFirebase.getBrick(req.params.brickId).then(brick => res.send(brick));
});

router.put('/:brickId', function(req, res) {
  brickFirebase.updateBrick(req.params.brickId, req.body).then(id => res.send('brick updated'));
});

router.delete('/:brickId', function(req, res) {
  brickFirebase.deleteBrick(req.params.brickId).then(id => res.send('brick deleted'));
});

/* Questions */
router.get('/:brickId/question/:questionId', function (req, res) {
  questionFirebase.getQuestion(req.params.brickId, req.params.questionId).then(question => res.send(question));
});

router.post('/:brickId/question/:questionId', function (req, res) {
  questionFirebase.createQuestion(req.params.brickId, req.body).then(id => res.send('question created'));
});

router.put('/:brickId/question/:questionId', function (req, res) {
  questionFirebase.updateQuestion(req.params.brickId, req.params.questionId, req.body).then(questionId => {
    res.send('question updated');
  });
});

router.delete('/:brickId/question/:questionId', function (req, res) {
  questionFirebase.deleteQuestion(req.params.brickId, req.params.questionId).then(questionId => {
    res.send('question deleted');
  });
});

module.exports = router
