/**
 * Created by Miguel Pazo (https://miguelpazo.com)
 */
const sqsService = require('./../services/sqsService');

const index = async (req, res, next) => {
    try {
        await sqsService.sendMessage({hello: 'world'});
        return res.json({success: true});
    } catch (err) {
        console.log(err);
    }

    return res.status(400).json({success: false});
};

module.exports = {index};
