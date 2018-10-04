'use strict';

// Load testing packages
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

// Simplify expect functions
const expect = chai.expect;

// Import elements
const {app, runServer, closeServer} = require('../server');

// Basic server test

describe('Calling /', function() {
  
  before(function() {
    return runServer();
  });
  
  after(function() {
    return closeServer();
  })
  
  it('should return a 200 status code', function() {
    return chai.request(app)
      .get('/')
      .then(function(res) {
        expect(res).to.have.status(200);
    });
  });
});

describe('Calling /portal', function () {
  
  before(function() {
    return runServer();
  });
  
  after(function() {
    return closeServer();
  });
  
  it('Should return a 200 status code', function() {
    return chai.request(app)
      .get('/')
      .then(function(res) {
          expect(res).to.have.status(200);
        });
  });
  
});