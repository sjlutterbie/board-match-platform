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
  
  describe('Backlinking indProfile to userAccount', function() {
    
    describe('bl_indProfile2userAccount()', function() {
      it('Should exist', function() {
        expect(mockData.bl_indProfile2userAccount).to.not.be.undefined;
      });
      it('Should expect two strings of length > 0', function() {
        const testCases = [
          // Case structure: [arg1, arg2, pass Bool]
          // Pass cases: Non-zero-length strings in both positions
          ['String1', 'String2', true],
          // Fail cases: One or more non-zero-length strings
          ['String1', '', false],
          ['', 'String2', false],
          ['', '', false],
          // Fail cases: One or more non-string arguments
          [5, "String2", false],
          ["String1", {}, false],
          [[], mockData.createExperience, false]
        ];
        testCases.forEach(function(testCase) {
          // If the test should pass...
          if(testCase[2]) {
            expect(
              function() {
                mockData.bl_indProfile2userAccount(testCase[0], testCase[1]);
              }
            ).to.not.throw();
          // If the test should fail...
          } else {
            expect(
              function() {
                mockData.bl_indProfile2userAccount(testCase[0], testCase[1]);
              }
            ).to.throw();
          }
        });
      });
          
      // TODO - FINISH THIS FUNCTION, GIVEN EXISTING DATA SPACE
          
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
  


