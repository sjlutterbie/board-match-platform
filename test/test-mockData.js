// Develop tests in this file for rapid testing, then transfer to final
//  test file for inclusion in full test suite.

'use strict';

// Load testing packges
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

// Simplify expect functions
const expect = chai.expect;

const { getIndividualProfile, getOrganizationProfile,
        generatePositions} = require('../server/mockData');

// INDIVIDUAL PROFILE DATA

describe('Individual Profile data', function() {
  
  // Test how we retrieve an individual profile
  describe('getIndividualProfile()', function() {
    it('Should exist', function() {
      expect(getIndividualProfile).to.not.be.null;
    });
    it('Should return an object', function() {
      expect(getIndividualProfile()).to.be.a('object');
    });
  });
  
  // Test how we generate organizations for profExperience and servExperience
  describe('generatePositions()', function() {
    it('Should exist', function() {
      expect(generatePositions).to.not.be.null;
    });
    
    // Generate between 0 and 9 positions
    const posCount = Math.floor(Math.random() * 10);
    const positions = generatePositions(posCount);
    
    it(`Should return an array with ${posCount} elements`, function(){
      expect(positions).to.be.a('array');
      expect(positions).to.have.length(posCount);
    });
    

    // Each position should have the correct structure
    it('Should include correctly formatted objects', function(){
      
      positions.forEach(function(position) {

        expect(position).to.be.a('object');

        const requiredKeys = ['id', 'org', 'position', 'startYear', 'endYear'];
        
        expect(position).to.include.keys(requiredKeys);
        
        // Verify each element is the correct type        
        requiredKeys.forEach(function(key) {
          expect(position[key]).to.be.a('string');
        });        

      });
    });
  });
  
  
  // Test the structure of the indProfile object returned
  describe('The individual profile object', function() {
      // Generate the object
      const indProfile = getIndividualProfile();
      
      console.log(indProfile);
      
      it('Should be an object', function() {
        expect(indProfile).to.be.a('object');
      });
      
      it('Should have the correct structure', function(){
        expect(indProfile).to.include.keys(
          'id', 'name', 'contact', 'summary', 'profExp',
          'servExp', 'commLevels'  
        );
      });
      
      it('The elements should be the correct types', function() {
        
        expect(indProfile.id).to.be.a('string');
        
        expect(indProfile.name).to.be.a('object');
        
        expect(indProfile.name).to.include.keys('firstName', 'lastName');
          expect(indProfile.name.firstName).to.be.a('string');
          expect(indProfile.name.lastName).to.be.a('string');
        
        expect(indProfile.contact).to.be.a('object');
          expect(indProfile.contact.phone).to.be.a('string');
          expect(indProfile.contact.email).to.be.a('string');
        
        expect(indProfile.summary).to.be.a('string');
        
        expect(indProfile.profExp).to.be.a('array');
          indProfile.profExp.forEach(function(position) {
            ['org','position','startYear','endYear'].forEach(function(field){
              expect(position[field]).to.be.a('string');
            });
          });
        
        expect(indProfile.servExp).to.be.a('array');
          indProfile.servExp.forEach(function(position) {
            ['org','position','startYear','endYear'].forEach(function(field){
              expect(position[field]).to.be.a('string');
            });
          });
        
        expect(indProfile.commLevels).to.be.a('object');
          expect(indProfile.commLevels).to.include.keys(
            'time', 'skills', 'network', 'money'
          );
            expect(indProfile.commLevels.time).to.be.a('number');
            expect(indProfile.commLevels.skills).to.be.a('string');
            expect(indProfile.commLevels.network).to.be.a('boolean');
            expect(indProfile.commLevels.money).to.be.a('number');
      });
  });
});

// ORGANIZATION PROFILE DATA

describe("Organization Profile Data", function() {
  
  // Test how we retrieve orgProfile data
  describe('getOrganizationProfile()', function() {

    it('Should exist', function() {
      expect(getOrganizationProfile).to.not.be.null;
    });

    it('Should return an object', function() {
      expect(getOrganizationProfile()).to.be.a('object');
    });

  });
  
  // Test the structure of the orgProfile object returned
  describe("The Organization Profile object", function() {
    
    const orgProfile = getOrganizationProfile();
    
    it('Should be an object', function() {
      expect(orgProfile).to.be.a('object');
    });
    
    it('Should have the correct structure', function() {
      expect(orgProfile).to.include.keys(
        'id', 'name', 'contact', 'summary', 'activities', 'commLevels'
      );
    });
    
  });
  
});