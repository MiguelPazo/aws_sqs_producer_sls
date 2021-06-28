/**
 * Created by Miguel Pazo (https://miguelpazo.com)
 */
const sqs = require('./../queue/sqs');

const sendMessage = async (data) => {
    const params = {
        DelaySeconds: 10,
        MessageBody: JSON.stringify(data),
        QueueUrl: process.env.SQS_QUEUE_URL
    };

    try {
        await sqs.sendMessage(params).promise();
    } catch (err) {
        console.log(err);
    }
}

module.exports = {sendMessage};
