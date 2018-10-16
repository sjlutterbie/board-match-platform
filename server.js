'use strict';

const express = require('express');
const app = express();

const { PORT } = require('./config');

const portalView = require('./client/views/portal');

app.use(express.static('client/public'));

// TODO: Implement JWT authentication middleware

app.all("/portal", (req, res) => {
  res.send(portalView.buildView());
});

// TODO: Replace /portal route with /portal:userid route, which 
//  loads the data for a specific user (in DEV, it will be 'TESTER').

app.get('/mockData', (req, res) => {
  const { buildSessionData } = require('./server/mockData');
  res.send(buildSessionData());
});






// SERVER LAUNCH FUNCTIONS

let server;

function runServer(port = PORT) {
  return new Promise((resolve, reject) => {
    server = app.listen(port, () => {
      console.log(`Your app is listening on port ${port}`);
      resolve();
    })
    .on('error', err => {
      reject(err);
    });
  });
}


function closeServer() {
  return new Promise((resolve, reject) => {
    console.log('Closing server');
    server.close(err => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
}

// If server.js is called directly, launch the server
if (require.main === module) {
  runServer().catch(err => console.error(err));
}

module.exports = { runServer, closeServer, app };