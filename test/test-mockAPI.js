'use strict';

// Load testing packages
const chai = require('chai');

// Simplify expect functions
const expect = chai.expect;

// Load module
const mAPI = require('../server/mockAPI');

describe('mockAPI', function() {
  
  describe('Loading sessionData', function() {
    it('Should be an object', function() {
      expect(mAPI.sessionData).to.be.a('object');
    });
    it('Should have the expected keys', function() {
      const requiredKeys = ['userAccounts', 'indProfiles', 'orgProfiles',
                            'positions', 'applications', 'userID'];
      expect(mAPI.sessionData).to.have.keys(requiredKeys);
    });
  });
  
  // USER ACCOUNTS

  describe('userAccounts model', function() {
    
    it('userAccounts should be an object', function() {
      expect(mAPI.userAccounts).to.be.a('object');
    });
    it('userAccounts.data should be an array', function() {
      expect(mAPI.userAccounts.data).to.be.a('array');
    });
    
    // Load first userAccount id for testing purposes
    const userID = mAPI.userAccounts.data[0].id;

    describe('userAccounts.GET', function() {
      it('Should be a function', function () {
        expect(mAPI.userAccounts.GET).to.be.a('function');
      });
      it('Should return an array', function () {
        expect(mAPI.userAccounts.GET()).to.be.a('array');
      });
      it('Should return userAccounts.data', function() {
        expect(mAPI.userAccounts.GET()).to.equal(mAPI.userAccounts.data);
      });
    });
    
    describe('userAccounts.GETOne', function() {
      it('Should be a function', function() {
        expect(mAPI.userAccounts.GETOne).to.be.a('function');
      });
      it('Should return an object', function() {
        expect(mAPI.userAccounts.GETOne(userID)).to.be.a('object');
      });
      it('The returned object should have id === userID', function() {
        expect(mAPI.userAccounts.GETOne(userID).id).to.equal(userID);
      });
    });

  });
  
  // INDIVIDUAL PROFILES
  
  describe('indProfiles model', function() {
    
    it('indProfiles be an object', function() {
      expect(mAPI.indProfiles).to.be.a('object');
    });
    it('indProfiles.data should be an array', function() {
      expect(mAPI.indProfiles.data).to.be.a('array');
    });
    
    // Load first indProfiles id for testing purposes
    const profID = mAPI.indProfiles.data[0].id;
    
    describe('indProfiles.GET', function() {
      it('Should be a function', function() {
        expect(mAPI.indProfiles.GET).to.be.a('function');
      });
      it('Should return an array', function() {
        expect(mAPI.indProfiles.GET()).to.be.a('array');
      });
      it('Should return indProfiles.data', function() {
        expect(mAPI.indProfiles.GET()).to.equal(mAPI.indProfiles.data);
      });
    });
    
    describe('indProfiles.GETOne', function() {
      it('Should be a function', function() {
        expect(mAPI.indProfiles.GETOne).to.be.a('function');
      });
      it('Should return an object', function() {
        expect(mAPI.indProfiles.GETOne(profID)).to.be.a('object');
      });
      it('The returned object should have id === profID', function() {
        expect(mAPI.indProfiles.GETOne(profID).id).to.equal(profID);
      });
    });
    
  });

  
});

