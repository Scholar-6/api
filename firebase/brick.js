const firestore = require('./firestore');
const bricksRef = firestore.collection('bricks');

function brickRef(brickId) { return bricksRef.doc(brickId); }

/**
 * Get all bricks
 * @returns {Object[]} All Bricks
 */
exports.getBricks = function () {
  return bricksRef.get().then(brickSnapshots => {
    var bricks = [];
    brickSnapshots.forEach(brick => bricks.push(brick.data()));
    return bricks;
  });
}

/**
 * Get one brick by id
 * @param {string} brickId Brick id.
 * @returns {Object} brick
 */
exports.getBrick = function (brickId) {
  return brickRef.get().then(brick => {
    if (!brick.exists) {
      return {};
    } else {
      return brick.data();
    }
  });
}

/**
 * Create brick
 * @param {object} Brick object
 * @return {string} Brick Id
 */
exports.createBrick = function (brickObj) {
  brickObj.argScope = 0;
  brickObj.creationDate = new Date();
  return bricksRef.add(brickObj).then(ref => ref.id);
}

/**
 * Update brick
 * @param {string} brickId Brick Id
 * @param {object} brickObj object
 * @return {string} Brick Id
 */
exports.updateBrick = function (brickId, brickObj) {
  return brickRef(brickId).set(brickObj).then(ref => ref.id);
}

/**
 * Delete brick
 * @param {string} brickId Brick Id
 * @return {string} Brick Id
 */
exports.deleteBrick = function (brickId) {
  return brickRef(brickId).delete().then(ref => ref.id);
}
