const tf = require('@tensorflow/tfjs-node');
async function loadModel() {
    // return tf.loadGraphModel(process.env.MODEL_URL);
    return tf.loadGraphModel('https://storage.googleapis.com/model-storage-dicoding/model-in-prod/model.json');
}
module.exports = loadModel;