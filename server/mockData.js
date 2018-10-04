// Mock data to be called via API-like queries, prior to developing the
//  actual API solution.

const faker = require('faker');

const MOCK_USER_ACCOUNT = {};

// For generating up to 5 professional and service experience objects
const profCount = Math.floor(Math.random() * 5);
const servCount = Math.floor(Math.random() * 5);

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
    profExp: generatePositions(profCount),
    servExp: generatePositions(servCount),
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

function generatePositions(count) {
  
  let positions = [];
  
  for (let i = 0; i < count; i++) {
    positions.push({
        id: faker.random.uuid(),
        org: faker.company.companyName(),
        position: faker.name.jobType(),
        startYear: faker.random.alphaNumeric(4),
        endYear: faker.random.alphaNumeric(4)
    });
  }
  
  return positions;
}

module.exports = {
  getIndividualProfile,
  getOrganizationProfile,
  generatePositions
};