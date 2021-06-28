/**
 * Created by Miguel Pazo (https://miguelpazo.com)
 */
const router = require('./router');

exports.handler = async (event, context, callback) => {
    // Reusing Persistent Connections
    context.callbackWaitsForEmptyEventLoop = false;
    return await router.run(event, context, callback);
};
