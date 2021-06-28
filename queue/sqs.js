/**
 * Created by Miguel Pazo (https://miguelpazo.com)
 */
const AWS = require('aws-sdk');

const sqs = new AWS.SQS({
    region: process.env.SQS_REGION,
    accessKeyId: process.env.SQS_ACCESS_KEY,
    secretAccessKey: process.env.SQS_SECRET_KEY
});

module.exports = sqs;
