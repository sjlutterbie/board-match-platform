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
function createIndProfile() {
 
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
 
 return indProfile;
  
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
  createIndProfile
  
};