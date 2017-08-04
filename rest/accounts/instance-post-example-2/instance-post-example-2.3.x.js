// Download the Node helper library from twilio.com/docs/node/install
// These consts are your accountSid and authToken from https://www.twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.api
  .accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  .update({ status: 'active' })
  .then(account => console.log(account.status));
