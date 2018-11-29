const Firestore = require('@google-cloud/firestore');

const firestore = new Firestore({
  projectId: 'learning-fortress-dev',
  keyFilename: './serviceAccountKey.json',
});
  
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

module.exports = firestore;
