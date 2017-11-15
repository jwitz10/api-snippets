// Download the Node helper library from twilio.com/docs/node/install
// These consts are your accountSid and authToken from https://www.twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const workspaceSid = 'WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const taskQueueSid = 'WQXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const client = require('twilio')(accountSid, authToken);

client.taskrouter.v1
  .workspaces(workspaceSid)
  .taskQueues(taskQueueSid)
<<<<<<< HEAD
  .cumulativeStatistics()
=======
  .taskQueueCumulativeStatistics()
>>>>>>> 10bc3b138746fb561243d1847c01e0fd96edbadc
  .fetch()
  .then(responseData => {
    console.log(responseData.reservations_accepted);
  });
