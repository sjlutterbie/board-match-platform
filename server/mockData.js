// Mock data to be called via API-like queries, prior to developing the
//  actual API solution.

const faker = require('faker');

const MOCK_USER_ACCOUNT = {};

const MOCK_IND_PROFILE = {
    id: faker.random.uuid(),
    name: {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName()
    },
    contact: {
      phone: faker.phone.phoneNumber(),
      email: faker.internet.email()
    },
    summary: faker.lorem.paragraph(),
    profExp: [
      {
        org: faker.company.companyName(),
        title: faker.name.jobType(),
        startYear: faker.random.alphaNumeric(4),
        endYear: faker.random.alphaNumeric(4)
      }],
    servExp: [],
    commLevels: {
      time: faker.random.number(),
      skills: faker.lorem.sentence(),
      network: faker.random.boolean(),
      money: faker.random.number()
    }
};

const MOCK_ORG_PROFILE = {
  id: "",
  name: "",
  contact: {},
  summary: "",
  activities: [],
  commLevels: {}
};

const MOCK_APPLICATION = {};

const MOCK_POSITION = {};



function getIndividualProfile() {

  return MOCK_IND_PROFILE;

}

function getOrganizationProfile() {
  
  return MOCK_ORG_PROFILE;
  
}

module.exports = { getIndividualProfile, getOrganizationProfile };