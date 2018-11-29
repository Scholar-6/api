var express = require('express')
  , brickFirebase = require('../firebase/brick')
  , questionFirebase = require('../firebase/question')
  , router = express.Router();

router.get('/', function(req, res) {
  brickFirebase.getBricks().then(bricks => res.send(bricks) );
});

router.post('/', function(req, res) {
  res.send('create new brick');
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

router.post('/:brickId/question/:questionId', function (req, res) {
  res.send('create new question by id = ' + req.params.questionId + ' where brick id = ' + req.params.brickId);
});

router.put('/:brickId/question/:questionId', function (req, res) {
  res.send('update question by id = ' + req.params.questionId + ' where brick id = ' + req.params.brickId);
});

router.get('/:brickId/question/:questionId', function (req, res) {
  questionFirebase.getQuestion(req.params.brickId, req.params.questionId).then(question => res.send(question));
});

module.exports = router
