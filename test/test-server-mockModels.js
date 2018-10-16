'use strict';

// Load testing packages
const chai = require('chai');

// Simplify expect functions
const expect = chai.expect;

// Load module
const mM = require('../server/mockModels');

describe('mockModels', function() {

  describe('userID', function() {
    it('Should be a string', function() {
      expect(mM.userID).to.be.a('string');
    });
  });  

  describe('userAccount', function() {
    it('Should be an object', function() {
      expect(mM.userAccount).to.be.a('object');
    });
    it('Should have the correct userID', function() {
      expect(mM.userAccount.id).to.equal(mM.userID);
    });
  });
  
  describe('userProfile', function() {
    it('Should be an object', function() {
      expect(mM.userProfile).to.be.a('object');
    });
    it('Should be related to the userAccount', function() {
      expect(mM.userProfile.id).to.equal(mM.userAccount.relations.indProfile);
    });
  });
  
  
});



