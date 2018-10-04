'use strict';

const express = require('express');
const app = express();
app.use(express.static('public'));

const { PORT } = require('./config');


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