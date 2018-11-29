const firestore = require('./firestore');

const brickRef = firestore.collection('bricks');


/**
 * Get Question sub-collection of Brick collection
 * @param {String} brickId Brick Id
 * @return {Promise} promise with question sub-collection
 */
function getQuestionSubcollectionPromise(brickId) {
  return brickRef.doc(brickId).getCollections().then(collections => {
    for (let i = 0; i < collections.length; i++) {
        if (collections[i] && collections[i].id == 'questions') {
            return collections[i];
        }
    }
  });
}

/**
 * Get one question by Brick Id and Question Id
 * @param {string} brickId Brick Id.
 * @param {string} questionId Question Id.
 * @returns question
 */
exports.getQuestion = function (brickId, questionId) {
  return getQuestionSubcollectionPromise(brickId).then(question => {
    return question.doc(questionId).get().then(question => question.data());
  });
}

/**
 * Create question
 * @param {string} brickId Brick Id.
 * @param {object} question Question object.
 * @returns questionId
 */
exports.createQuestion = function (brickId, questionObj) {
  return brickRef.doc(brickId).collection('questions').add(questionObj).then(ref => ref.id);
}
