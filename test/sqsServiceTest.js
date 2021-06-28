/**
 * Created by Miguel Pazo (https://miguelpazo.com)
 */
const sqsService = require('./../services/sqsService');

describe('sqsServiceTest', () => {

    it('sendMessageTest', async () => {
        const data = {
            amount: 125
        };

        const result = await sqsService.sendMessage(data);
        console.log(result);
    });
});
