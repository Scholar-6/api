const firestore = require('./firestore');

const brickRef = firestore.collection('bricks');

/**
 * Get one question by Brick Id and Question Id
 * @param {string} brickId Brick Id.
 * @param {string} questionId Question Id.
 * @returns question
 */
exports.getQuestion = function (brickId, questionId) {
  return brickRef.doc(brickId).getCollections().then(collections => {
    for (let i = 0; i < collections.length; i++) {
        if (collections[i] && collections[i].id == 'questions') {
            return collections[i].doc(questionId).get().then(question => question.data());
        }
    }
  });
}
