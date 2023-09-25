const fs = require ('fs');
const cron = require('node-cron');
const screenshot = require('screenshot-desktop');

console.log('screen service is running');

// --- CRONJOB screenshot server desktop
cron.schedule('*/10 * * * * *', () => {
  // running a task every 30 second
  screenshot().then((img) => {
    fs.writeFile('media/screen-server.jpg', img, function (err) {
      if (err) {
      	console.log('Error : ' + err);
        throw err
      }
      else {
      	console.log('screen success');
      }
    })
  })
  .catch((err) => {
  	console.log('Error : ' + err);
    throw err
  });
});