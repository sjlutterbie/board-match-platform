// Mock data to be called via API-like queries, prior to developing the
//  actual API solution.

const faker = require('faker');

// USER ACCOUNT
  // Create a userAccount

function createUserAccount() {
  
  const userAccount = {
    id: faker.random.uuid(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    // Relations will be filled in via link-back from other creator functions
    relations: {
      indProfile: '',
      orgProfiles: []
    }
  };
  
  return userAccount;
}

// INDIVIDUAL PROFILE
  // Creates an indProfile, linking it back to a userAccount
    // NOTE: For testing, userAccount may default to "_test"
function createIndProfile(userAccountId) {
 
 const indProfile = {
   id: '',
   overview: '',
   linkedIn: '',
   experience: [],
   relations: {
     userAccount: '',
     applications: []
   }
 };
 
 // Create 0 - 5 experiences
 const expCount = Math.floor(Math.random() * 6);
 for (let i = 0; i < expCount; i++) {
   indProfile.experience.push(createExperience());
 }
 
 // Set relations.userAccount (based on function argument)
 indProfile.relations.userAccount = userAccountId;
 
 return indProfile;
  
}

  //Helper functions
  function createExperience() {
    
    const experience = {
      type: '',
      organization: faker.company.companyName(),
      title: faker.name.jobTitle(),
      description: faker.lorem.paragraph(),
      startYear: '',
      endYear: ''
    };
    
    // Generate specific experience types
    const expTypes = ['professional', 'service', 'education/training'];
    experience.type = expTypes[Math.floor(Math.random() * 3)];
    
    // Create realistic start/end dates (endDate may be present)
    experience.startYear = 1980 + Math.floor(Math.random() * 25);
    experience.endYear = experience.startYear + Math.floor(Math.random() * 10) + 1;
    if(experience.endYear > 2018) {
      experience.endYear = 'Present';
    }
    
    experience.startYear = experience.startYear.toString();
    experience.endYear = experience.endYear.toString();

    return experience;
    
  }


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



// Module exports

module.exports = {
  createUserAccount,
  createIndProfile,
    createExperience
  
};