const postPredictHandler = require('../server/handler');
const getPredictionHistoriesHandler = require('../server/historyHandler');

const routes = [
    {
        path: '/predict',
        method: 'POST',
        handler: postPredictHandler,
        options: {
            payload: {
                allow: 'multipart/form-data',
                multipart: true
            }
        }
    },
    {
        path: '/predict/histories',
        method: 'GET',
        handler: getPredictionHistoriesHandler
    }
]

module.exports = routes;