const cron = require('node-cron');
const dayjs = require('dayjs');
const getRegiteredesUrsCount = require('./get-registered-users-count');
const clearOldTokens = require('./clear-old-tokens');

module.exports = () => {
  try {
    cron.schedule('*/10 * * * * *', async () => {
      console.log('------------- ITERATION START ----------------')

      // getRegiteredesUrsCount();
      // clearOldTokens();

      console.log('------------- ITERATION FINISH ----------------')
    })

    cron.schedule('* * * * * *', () => {
      console.log('SECOND');
      console.log(dayjs().subtract(30, "day").format('DD/MM/YYYY HH:mm'));
      console.log('SECOND');
    })

  } catch (e) {
    console.log(e);
  }
}