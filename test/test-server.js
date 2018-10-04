'use strict';

// Load testing packages
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

// Simplify expect functions
const expect = chai.expect;

// Import elements
const {app} = require('../server');

// Basic server test

describe('Calling /', function() {
  
  it('should return a 200 status code', function() {
    return chai.request(app)
      .get('/')
      .then(function(res) {
        expect(res).to.have.status(200);
    });
  });
});