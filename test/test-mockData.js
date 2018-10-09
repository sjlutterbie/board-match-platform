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




// INDIVIDUAL PROFILES
  // id: uuid
  // overview: object
    // firstName: String
    // lastName: String
    // email: String
    // phone: String
    // headline: String
  // linkedIn:
    // profileURL: string
  // experience: object
    // Each:
      // type: string (profiessional | service | education/training)
      // organization: string
      // title: string
      // startYear: string
      // endYear: string
  // relations:
    // userAccount: array (link to creator userAccount.id)
    // applications: array
      // Each: string (linked after all profiles created)





// ORGANIZATION PROFILES
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






// Create 3 user accounts. The first userAccount ID is set to "TESTER"
  // Each account has one indProfile
  // Each account has 1-3 orgProfiles
    // Each orgProfile has 1-3 positions
    // Each position has 1-5 applications
      // Each application has 1 indProfile
      // There's a 25% chance the indProfile set to "TESTER"    
  



/*
// CLIENT AUTHORIZATION DATA

describe('User Authorization Data', function() {
  
  // Test how we retrieve client authorization data
  describe('getClientAuthData()', function() {
    it('Should exist', function() {
      expect(getClientAuthData).to.not.be.null;
    });
    it('Should return an object', function() {
      expect(getClientAuthData()).to.be.a('object');
    });
  });
  
  const clientAuthData = getClientAuthData();

  // Test how we generate client authoriatization data
  describe('getClientAuthData()', function() {
    it('Should include the correct elements', function() {
      const requiredKeys = ['authToken', 'indProfile', 'orgProfiles'];
      expect(clientAuthData).to.include.keys(requiredKeys);
      expect(clientAuthData.authToken).to.be.a('string');
      expect(clientAuthData.indProfile).to.be.a('string');
      expect(clientAuthData.orgProfiles).to.be.a('array');
    });
  });
  
});

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
  
  // Test how we generate random activities for Organization Profiles
  describe('generateActivities()', function() {
    
    it('Should exist', function() {
      expect(generateActivities).to.not.be.null;
    });
    
    // Generate between 0 and 9 positions
    const actCount = Math.floor(Math.random() * 10);
    const activities = generateActivities(actCount);
    
    it(`Should return an array with ${actCount} elements`, function(){
      expect(activities).to.be.a('array');
      expect(activities).to.have.length(actCount);
    });
    
    // Each activity should have the correct structure
    it('Each activity should have the correct structure', function() {
      activities.forEach(function(activity) {
        expect(activity).to.include.keys('id', 'name', 'summary');
        expect(activity.id).to.be.a('string');
        expect(activity.name).to.be.a('string');
        expect(activity.summary).to.be.a('string');
      });
    });

  });
  
  // Test the structure of the orgProfile object returned
  describe("The Organization Profile object", function() {
    
    const orgProfile = getOrganizationProfile();
    
    it('Should be an object', function() {
      expect(orgProfile).to.be.a('object');
    });
    
    it('Should have the correct structure', function() {
      
      const requiredKeys = ['id', 'name', 'contact', 'summary',
                            'activities', 'commLevels'];
      
      expect(orgProfile).to.include.keys(requiredKeys);
      
      expect(orgProfile.id).to.be.a('string');
      expect(orgProfile.name).to.be.a('string');
      expect(orgProfile.contact).to.be.a('object');
        expect(orgProfile.contact).to.include.keys('phone', 'email');
          expect(orgProfile.contact.phone).to.be.a('string');
          expect(orgProfile.contact.email).to.be.a('string');
      expect(orgProfile.summary).to.be.a('string');
      expect(orgProfile.activities).to.be.a('array');
        const activityKeys = ['id', 'name', 'summary'];
        orgProfile.activities.forEach(function(activity) {
          expect(activity).to.include.keys(activityKeys);
          activityKeys.forEach(function(key) {
            expect(activity[key]).to.be.a('string');
          });
        });
      
      expect(orgProfile.commLevels).to.be.a('object');
        const commLevKeys = ['time', 'skills', 'network', 'money'];
        expect(orgProfile.commLevels).to.include.keys(commLevKeys);
        expect(orgProfile.commLevels.time).to.be.a('number');
        expect(orgProfile.commLevels.skills).to.be.a('string');
        expect(orgProfile.commLevels.network).to.be.a('boolean');
        expect(orgProfile.commLevels.money).to.be.a('number');
    });
  });
});

// POSITION DATA

describe('Position Data', function() {
  
  // Test how we retrieve position data
  describe('getPosition()', function() {
    
    it('Should exist', function() {
      expect(getPosition).to.not.be.null;
    });
  });

  // Test the Position Data object    
  describe('The Position Data object', function() {
  
    const position = getPosition();
    
    it('Should return an object', function() {
      expect(position).to.be.a('object');
    });
    
    const requiredKeys = ['id', 'org_id', 'title', 'description'];
    
    it('Should have the correct structure', function() {
      expect(position).to.include.keys(requiredKeys);
      requiredKeys.forEach(function(key) {
        expect(position[key]).to.be.a('string');
      });
    });
  });
});
    
describe('Application data', function() {
  
  // Test how we retrieve application data
  describe('getApplication()', function() {
    
    it('Should exist', function() {
      expect(getApplication).to.not.be.null;
    });
  });
  
  // Test the Application Data object
  describe('The Application Data object', function() {
  
    const application = getApplication();
    
    it('Should return an object', function() {
      expect(application).to.be.a('object');
    });
    
    
    it('Should have the correct structure', function() {
    
      const requiredKeys = ['id', 'indProf_id', 'pos_id', 'date',
                            'message', 'status'];

      expect(application).to.include.keys(requiredKeys);
        expect(application.id).to.be.a('string');
        expect(application.indProf_id).to.be.a('string');
        expect(application.pos_id).to.be.a('string');
        expect(application.date).to.be.a('date');
        expect(application.message).to.be.a('string');
        expect(application.status).to.be.a('number');
    });
  });
});

// Test the Session Data Generator

describe('Session Data Generator', function() {
  
  // Test the function we use to generate session data
  describe('generateSessionData()', function() {
    it('Should exist as a function', function() {
      expect(generateSessionData).to.be.not.null;
      expect(generateSessionData).to.be.a('function');
    });
    it('Should return an object', function() {
      expect(generateSessionData()).to.be.a('object');
    });
  });
  
  // Create a sessionData object
  const sessionData  = generateSessionData();
  
  // Test the structure of sessionData
  describe('sessionData', function() {
    
    it('Should have the correct elements', function() {
      const requiredKeys = ['TEST_ElementCounts','userAccount', 'indProfiles',
        'orgProfiles', 'positions', 'applications'];
      expect(sessionData).to.include.keys(requiredKeys);
    });
    
    it('Each element should be the correct type', function() {
      expect(sessionData.TEST_ElementCounts).to.be.a('object');
      expect(sessionData.userAccount).to.be.a('object');
      expect(sessionData.indProfiles).to.be.a('array');
      expect(sessionData.orgProfiles).to.be.a('array');
      expect(sessionData.positions).to.be.a('array');
      expect(sessionData.applications).to.be.a('array');
    });
    
    it('The element counts should be within range', function() {
      const randCountKeys = ['indProfiles','orgProfiles','positions',
        'applications'];
      const countVars = sessionData.TEST_ElementCounts;
      expect(countVars.userAccount).to.equal(1);
      randCountKeys.forEach(function(count) {
        expect(countVars[count]).to.be.a('number');
        expect(countVars[count]).to.be.at.least(1);
        expect(countVars[count]).to.be.at.most(10);
      });
    });
    
    
    it('Each element should have the correct length', function() {
      expect(Object.keys(sessionData.TEST_ElementCounts).length).to.equal(5);
      const countVars = sessionData.TEST_ElementCounts;
      Object.keys(countVars).forEach(function(element) {
        if (element === 'userAccount') {
          expect(Object.keys(sessionData[element]).length).to.equal(3);
        } else {
            expect(sessionData[element].length).to.equal(countVars[element]);
        }
      });
    });
  });
  
  describe('The elements should be correctly linked for testing purposes', function() {
    
    // The userAccount should be associated with an indProfile
      // Convenience variables
        const userAccount = sessionData.userAccount;
        const indProfiles = sessionData.indProfiles;
        const orgProfiles = sessionData.orgProfiles;
          let orgIds = [];
          orgProfiles.forEach(function(profile){
            orgIds.push(profile.id);
          });
        const positions = sessionData.positions;
        const applications = sessionData.applications;
        
        it('userAccount should link with one indProfile', function() {
          expect(userAccount.indProfile).to.equal(indProfiles[0].id);
        });

        it('userAccount should link with at least one orgProfile', function() {
          expect(userAccount.orgProfiles.length).to.be.at.least(1);
          
          // Check each orgProfile <-> userAccount link
          userAccount.orgProfiles.forEach(function(profile) {
            
            // Each profile should be a valid orgId
            expect(orgIds).to.include(profile);
            
            // Each Org should link back to the userAccount
            const tempOrg = orgProfiles.find(function(org) {
              return org.id === profile;
            });
            

            
          });
          
          // The selected orgs should link back to the userAccount
          userAccount.orgProfiles.forEach
          
        });
        
        
        
        
        it('')

        

  });
  
})

*/