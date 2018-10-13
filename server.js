'use strict';

const express = require('express');
const app = express();

const { PORT } = require('./config');

const portalView = require('./client/views/portal');
const { buildSessionData } = require('./server/mockData');


// DEV CODE - LOAD LOCALLY-GENERATED SESSION DATA
const sessionData = buildSessionData();



app.use(express.static('client/public'));

app.all("/portal", (req, res) => {
  
  res.send(portalView.buildView(sessionData));
});

app.get('/mockData', (req, res) => {
  res.send(sessionData);
});






// SERVER LAUNCH FUNCTIONS

let server;

function runServer(port = PORT) {
  return new Promise((resolve, reject) => {
    server = app.listen(port, () => {
      console.log(`YOur app is listening on port ${port}`);
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