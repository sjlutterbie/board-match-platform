// Develop tests in this file for rapid testing, then transfer to final
//  test file for inclusion in full test suite.

'use strict';

// Load testing packges
const chai = require('chai');


// Simplify expect functions
const expect = chai.expect;

const mockData = require('../server/mockData');

// USER ACCOUNT

describe('User account creation', function() {
  
  describe('createUserAccount()', function() {
    it('Should exist', function() {
      expect(mockData.createUserAccount).to.not.be.undefined;  
    });
    it('Should return an object', function() {
      expect(mockData.createUserAccount()).to.be.a('object');
    });
  });
  
  // Create a userAccount
  const userAccount = mockData.createUserAccount();
  
  describe('The userAccount object', function() {
    it('Should have the correct keys', function() {
      const requiredKeys = ['id', 'email', 'password','relations'];
      expect(userAccount).to.have.keys(requiredKeys);
    });
    it('Each element should have the correct structure', function() {
      expect(userAccount.id).to.be.a('string');
      expect(userAccount.email).to.be.a('string');
      expect(userAccount.password).to.be.a('string');
      expect(userAccount.relations).to.be.a('object');
        // Test relations structure  
        const requiredKeys = ['indProfile', 'orgProfiles'];
        expect(userAccount.relations).to.have.keys(requiredKeys);
          expect(userAccount.relations.indProfile).to.be.a('string');
          expect(userAccount.relations.orgProfiles).to.be.a('array');
    });
  });
});

// INDIVIDUAL PROFILE

describe('Individual profile creation', function() {
  
  describe('createIndProfile()', function() {
    it('Should exist', function() {
      expect(mockData.createIndProfile).to.not.be.undefined;
    });
    it('Should return an object', function() {
      expect(mockData.createIndProfile()).to.be.a('object');
    });
  });
  
  describe('Helper function: createExperience()', function() {
    it('Should exist', function() {
      expect(mockData.createExperience).to.not.be.undefined;
    });
    it('Should return an object', function () {
      expect(mockData.createExperience()).to.be.a('object');
    });
  });
  
  describe('The experience helper object', function() {
  
    // Create an experience object
    const experience = mockData.createExperience();

    it('Should have the correct elements', function() {
      const requiredKeys = ['type', 'organization', 'title', 'description',
        'startYear', 'endYear'];
      expect(experience).to.have.keys(requiredKeys);
    });
    it('Each element should have the correct structure', function() {
      expect(experience.type).to.be.a('string');
        expect(['professional', 'service', 'education/training']).to.
          include(experience.type);
      expect(experience.organization).to.be.a('string');
      expect(experience.title).to.be.a('string');
      expect(experience.description).to.be.a('string');
      expect(experience.startYear).to.be.a('string');
      expect(experience.endYear).to.be.a('string');
    });
  });
  
  describe('The indProfile object', function() {
    
    // Create an indProfile object
    const userAccountId = "TEST-userAccountID";
    const indProfile = mockData.createIndProfile(userAccountId);
    
    it('Should have the correct elements', function() {
      const requiredKeys = ['id', 'overview', 'linkedIn', 'experience',
        'relations'];
      expect(indProfile).to.have.keys(requiredKeys);
    });
    it('Each element should have the correct structure', function() {
      expect(indProfile.id).to.be.a('string');
      expect(indProfile.overview).to.be.a('string');
      expect(indProfile.linkedIn).to.be.a('string');
      expect(indProfile.experience).to.be.a('array');
        // IF experience elements exist, confirm they have the right keys
        indProfile.experience.forEach(function(experience) {
          const requiredKeys = ['type', 'organization', 'title', 'description',
            'startYear', 'endYear'];
          expect(experience).to.have.keys(requiredKeys);
        });
      expect(indProfile.relations).to.be.a('object');
        expect(indProfile.relations.userAccount).to.be.a('string');
        expect(indProfile.relations.applications).to.be.a('array');
    });
    it('indProfile.relations.userAccount should equal ' + 
       'the createIndProfile(userAccountId) argument', function() {
          expect(indProfile.relations.userAccount).to.equal(userAccountId);
    });
  });
  

});

// ORGANIZATION PROFILES

describe('Organization Profile Creation', function(){
  
  describe('createOrgProfile()', function() {
    it('Should exist', function() {
      expect(mockData.createOrgProfile).to.not.be.undefined; 
    });
    it('Should return an object', function() {
      expect(mockData.createOrgProfile()).to.be.a('object');
    });
  });
  
  describe('Helper function: createActivity()', function() {
    
    it('Should exist', function() {
      expect(mockData.createActivity).to.not.be.undefined;
    });
    it('Should return an object', function() {
      expect(mockData.createActivity()).to.be.a('object');
    });
    
    // Create an activity object
    const activity = mockData.createActivity();
    
    describe('The activity object', function() {
      
      it('Should have the necessary elements', function() {
        const activityKeys = ['name', 'description'];
        expect(activity).to.have.keys(activityKeys);
        activityKeys.forEach(function(key) {
          expect(activity[key]).to.be.a('string');
          expect(activity[key].length).to.be.gt(0);
        });
      });
      
    });
    
    
  });
  
  describe('The orgProfile Object', function() {
    
    // Create the object
    const orgProfile = mockData.createOrgProfile();
    
    it('Should have the correct elements', function() {
      const requiredKeys = ['id', 'overview', 'activities', 'relations'];
      expect(orgProfile).to.have.keys(requiredKeys);
    });
    
    it('Each element sholud have the same structure', function() {
      expect(orgProfile.id).to.be.a('string');
        expect(orgProfile.id.length).to.be.gt(0);
      expect(orgProfile.overview).to.be.a('object');
        const overviewKeys = ['name', 'website', 'email', 'phone', 'summary'];
        expect(orgProfile.overview).to.have.keys(overviewKeys);
        overviewKeys.forEach(function(key) {
          expect(orgProfile.overview[key]).to.be.a('string');
        });
      expect(orgProfile.activities).to.be.a('array');
      // If experience objects exist, confirm they have the right keys
      orgProfile.activities.forEach(function(activity) {
        const activityKeys = ['name', 'description'];
        expect(activity).to.have.keys(activityKeys);
      });
      
      expect(orgProfile.relations).to.be.a('object');
        const relationsKeys = ['userAccounts', 'positions'];
        expect(orgProfile.relations).to.have.keys(relationsKeys);
          expect(orgProfile.relations.userAccounts).to.be.a('array');
          expect(orgProfile.relations.positions).to.be.a('array');
    });
    
  });
  
  
});



  // overview: object
    // name: string
    // website: string
    // email: string
    // phone: string
    // summary: string
  // activities: array
    // Each:
      // name: string
      // description: string
  // relations: array
    // userAccount: array (link to creator userAccount.id)
      // Each: string
    // positions: array
    
          
        

// POSITIONS

// APPLICATIONS

// BUILD SESSION DATA

describe("sessionData builder", function() {
  
  describe("buildSessionData()", function() {
    it('Should exist', function() {
      expect(mockData.buildSessionData).to.not.be.undefined;
    });
    it('Should return an object', function() {
      expect(mockData.buildSessionData()).to.be.a('object');
    });
  });
  
  // Build a sessionData object
  const sessionData = mockData.buildSessionData();
  const dataTypes = ['userAccounts', 'indProfiles', 'orgProfiles', 
                     'positions', 'applications'];
  
  describe('The sessionData object', function() {
    it('Should include the correct elements', function() {
      expect(sessionData).to.have.keys(dataTypes);
    });
    it('Each element should be an array', function() {
      dataTypes.forEach(function(dataType) {
        expect(sessionData[dataType]).to.be.a('array'); 
      });
    });
  });
  
  // userAccounts objects
  describe('sessionData.userAccounts', function() {
    it('Should contain 10 elements', function() {
      expect(sessionData.userAccounts.length).to.equal(10);
    });
    it('The first userAccount should have id \'TESTER\'', function(){
      expect(sessionData.userAccounts[0].id).to.equal('TESTER');
    });
  });
  
  // indProfile objects
  describe('sessionData.indProfiles', function() {
    
    it('Should contain 1 to 10 elements', function() {
      expect(sessionData.indProfiles.length).to.be.gte(1);
      expect(sessionData.indProfiles.length).to.be.lte(10);
    });
    it('The first element should have relations.userAccount = \'TESTER\'',
       function() {
         expect(sessionData.indProfiles[0].relations.userAccount).to.equal('TESTER');
    });
    it('Every relations.userAccount element should refer to a indProfile',
        function() {
          // Extract userAccount.ids
          const userIds = [];
          sessionData.userAccounts.forEach(function(account) {
            userIds.push(account.id);
          });
          // Test the profiles
          sessionData.indProfiles.forEach(function(profile) {
            expect(userIds).to.include(profile.relations.userAccount);
          });    
        }
    );
    it('IF an indProfile links to a userAccount, '+
        'the userAccount should link back to the indProfile',
        function() {
          sessionData.indProfiles.forEach(function(indProfile) {
            if (indProfile.relations.userAccount != '') {
              const userAccountId = indProfile.relations.userAccount;
              // Find the associated userAccount
              const userAccount = sessionData.userAccounts.find(
                function(account) {
                  return account.id === userAccountId;
                }
              );
              expect(userAccount.relations.indProfile).to.equal(indProfile.id);
            }
          });
        }
      );
  });
});


// Create 3 user accounts. The first userAccount ID is set to "TESTER"
  // Each account has one indProfile
  // Each account has 1-3 orgProfiles
    // Each orgProfile has 1-3 positions
    // Each position has 1-5 applications
      // Each application has 1 indProfile
      // There's a 25% chance the indProfile set to "TESTER"    
  


