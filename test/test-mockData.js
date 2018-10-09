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

// POSITIONS

describe('Positions builder', function() {
  
  describe('createPosition', function() {
    it('Should exist', function() {
      expect(mockData.createPosition).to.not.be.undefined;
    });
    it('Should return an object', function() {
      expect(mockData.createPosition()).to.be.a('object');
    });
  });
  
  // Create object
  const position = mockData.createPosition();
  const positionKeys = ['id', 'title', 'description', 'dateCreated', 'isPublic',
    'relations'];
  
  describe('The position object', function() {
    it('Should have the required elements', function() {
      expect(position).to.have.keys(positionKeys);
    });
    
    it('Each element should have the correct structure', function() {
      expect(position.id).to.be.a('string');
        expect(position.id.length).to.be.gt(0);
      expect(position.title).to.be.a('string');
        expect(position.title.length).to.be.gt(0);
      expect(position.description).to.be.a('string');
      expect(position.dateCreated).to.be.a('date');
      expect(position.isPublic).to.be.a('boolean');
      expect(position.relations).to.be.a('object');
        expect(position.relations).to.have.keys(['organization', 'applications']);
          expect(position.relations.organization).to.be.a('string');
          expect(position.relations.applications).to.be.a('array');
    });
    
  });
  
});


// APPLICATIONS

describe('Application creation', function() {
  
  describe('createApplication()', function() {
    it('Should exist', function() {
      expect(mockData.createApplication).to.not.be.undefined; 
    });
    it('Should return an object',function() {
      expect(mockData.createApplication()).to.be.a('object');
    });
  });
  
  describe('The application object', function() {
    
    // Create the object
    const application = mockData.createApplication();
    const applicationKeys = ['id','coverMessage', 'dateSubmitted', 'relations'];
    
    it('Should have the necessary elements', function() {
      expect(application).to.have.keys(applicationKeys);
    });
    
    it('Each element should have the correct structure', function() {
      expect(application.id).to.be.a('string');
        expect(application.id.length).to.be.gt(0);
      expect(application.coverMessage).to.be.a('string');
      expect(application.dateSubmitted).to.be.a('date');
      expect(application.relations).to.be.a('object');
        expect(application.relations).have.keys('position', 'indProfile');
          expect(application.relations.position).to.be.a('string');
          expect(application.relations.indProfile).to.be.a('string');
    });
  });

});

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
  
  describe('sessionData.orgProfiles', function() {
    
    it('Should contain 1 to 10 elements', function () {
      expect(sessionData.orgProfiles.length).to.be.gte(1);
      expect(sessionData.orgProfiles.length).to.be.lte(10);
    });
    
    // Convenience variable
    const orgProfiles = sessionData.orgProfiles;
    
    it('The first org should relate to userAccount TESTER', function() {
      expect(orgProfiles[0].relations.userAccounts[0]).to.equal('TESTER');
    });
    it('Every relations.userAccounts[0] should relate to a userAccount',
      function() {
        // Extract userAccount.ids
        const userIds = [];
        sessionData.userAccounts.forEach(function(account) {
          userIds.push(account.id);
        });
        // Test the profiles
        sessionData.orgProfiles.forEach(function(profile) {
          expect(userIds).to.include(profile.relations.userAccounts[0]);
        });    
      }
    );
    it('IF an orgProfile links to one or more userAccounts, '+
        'the userAccounts should link back to the orgProfile',
        function() {
          sessionData.orgProfiles.forEach(function(orgProfile) {
            orgProfile.relations.userAccounts.forEach(function(userAccountId) {
              // Find the userAccount
              const userAccount = sessionData.userAccounts.find(
                function(userAccount) {
                  return userAccount.id === userAccountId;
                }
              );
              expect(userAccount.relations.orgProfiles).to.include(orgProfile.id);
            });
          });
        }
    );
  });
  
  describe('sessionData.positions', function () {
    
    // Convenience variable
    const positions = sessionData.positions;
    
    it('Should include at least one position', function() {
      expect(positions.length).to.be.gte(1);
    });
    it('Should create 0-5 positions per orgProfile', function() {
      expect(positions.length).to.be.lte(sessionData.orgProfiles.length * 5);
    });
    it('Each position should relate to one orgProfile', function() {
      positions.forEach(function(position) {
        expect(position.relations.organization.length).to.be.gt(0); 
        // Extract list of orgIds
        const orgIds = [];
        for(let i = 0; i < sessionData.orgProfiles.length; i++) {
          orgIds.push(sessionData.orgProfiles[i].id);
        }
        expect(orgIds).to.include(position.relations.organization);
      });
    });
    it('And each orgProfile should relate back to the position', function() {
      positions.forEach(function(position) {
        const tempOrg = sessionData.orgProfiles.find(function(org) {
          return org.id === position.relations.organization;
        });
        expect(tempOrg.relations.positions).to.include(position.id);
      });
    });
  });

  describe('sessionData.applications', function() {
    
    // Convenience variable
    const applications = sessionData.applications;
    
    it('Should include at least one application', function () {
      expect(applications.length).to.be.gte(1);
    });
    it('Should create 0-3 applications per position', function() {
      expect(applications.length).to.be.lte(sessionData.positions.length * 3);
    });
    it('Each application should relate to one position', function() {
      applications.forEach(function(application) {
        expect(application.relations.position.length).to.be.gte(1);
        // Extract list of posIds
        const posIds = [];
        for(let i = 0; i < sessionData.positions.length; i++) {
          posIds.push(sessionData.positions[i].id);
        }
        expect(posIds).to.include(application.relations.position);
      });
    });
    
    it('And each position should relate back to the application', function() {
      applications.forEach(function(application) {
        const tempPos = sessionData.positions.find(function(pos) {
          return pos.id === application.relations.position;
        });
        expect(tempPos.relations.applications).to.include(application.id);
      });
    });
    it('Each application should relate to one indProfile', function() {
      applications.forEach(function(application) {
        expect(application.relations.indProfile.length).to.be.gte(1);
        // Extract list of indProfIds
        const indProfIds = [];
        for(let i = 0; i < sessionData.indProfiles.length; i ++) {
          indProfIds.push(sessionData.indProfiles[i].id);
        }
        expect(indProfIds).to.include(application.relations.indProfile);
      });
      
    });


  });
  

});

