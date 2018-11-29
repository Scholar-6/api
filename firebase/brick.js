const firestore = require('./firestore');

const brickRef = firestore.collection('bricks');

/**
 * Get all bricks
 * @returns all bricks
 */
exports.getBricks = function () {
  return brickRef.get().then(brickSnapshots => {
    var bricks = [];
    brickSnapshots.forEach(brick => bricks.push(brick.data()));
    return bricks;
  });
}

/**
 * Get one brick by id
 * @param {string} id Brick id.
 * @returns brick
 */
exports.getBrick = function (id) {
  return brickRef.doc(id).get().then(brick => {
    if (!brick.exists) {
      return {};
    } else {
      return brick.data();
    }
  });
}

/**
 * Create brick
 */
exports.createBrick = function (brickObj) {
  return brickRef.add(brickObj).then(ref => ref.id);
}
