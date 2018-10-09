// Mock data to be called via API-like queries, prior to developing the
//  actual API solution.

const faker = require('faker');

function createUserAccount() {
  
  const userAccount = {
    id: faker.random.uuid(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    relations: {
      indProfile: '',
      orgProfiles: []
    }
  };
  
  return userAccount;
}



// Module exports

module.exports = {
  createUserAccount
  
};