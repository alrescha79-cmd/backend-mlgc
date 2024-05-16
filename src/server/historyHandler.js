const Firestore = require('@google-cloud/firestore');
const db = new Firestore();

const getPredictionHistoriesHandler = async (request, h) => {
    const predictionsRef = db.collection('predictions');
    const snapshot = await predictionsRef.get();
    const predictions = [];
    if (snapshot.empty) {
        console.log('No matching documents.');
        return h.response({
            status: 'success',
            data: predictions
        });
    }  
    snapshot.forEach(doc => {
        const id = doc.id;
        const data = doc.data();
        predictions.push({
            id: id,
            history: data
        });
    });
    return h.response({
        status: 'success',
        data: predictions
    });
}

module.exports = getPredictionHistoriesHandler;