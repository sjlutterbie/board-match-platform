// Mock data to be called via API-like queries, prior to developing the
//  actual API solution.

const faker = require('faker');


// DEV DATA OBJECTS

const MOCK_USER_ACCOUNT = {
  authToken: faker.random.uuid(),
  indProfile: '',
  orgProfiles: []
};

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

// For generating up to 5 organizational activities
const actCount = Math.floor(Math.random() * 5);

const MOCK_ORG_PROFILE = {
  id: faker.random.uuid(),
  name: faker.company.companyName(),
  contact: {
    phone: faker.phone.phoneNumber(),
    email: faker.internet.email()
  },
  summary: faker.lorem.paragraph(),
  activities: generateActivities(actCount),
  commLevels: {
    time: faker.random.number(),
    skills: faker.lorem.sentence(),
    network: faker.random.boolean(),
    money: faker.random.number()
  }
};

const MOCK_POSITION = {
  id: faker.random.uuid(),
  org_id: faker.random.uuid(),
  title: faker.lorem.sentence(),
  description: faker.lorem.paragraph()
};

const MOCK_APPLICATION = {
  id: faker.random.uuid(),
  indProf_id: faker.random.uuid(),
  pos_id: faker.random.uuid(),
  date: faker.date.recent(),
  message: faker.lorem.paragraph(),
  status: faker.random.number()
};


// Data functions

function getClientAuthData() {
 
 return MOCK_USER_ACCOUNT;
  
}

function getIndividualProfile() {

  return MOCK_IND_PROFILE;

}

function getOrganizationProfile() {
  
  return MOCK_ORG_PROFILE;
  
}

function getPosition() {
  
  return MOCK_POSITION;
  
}

function getApplication() {
  
  return MOCK_APPLICATION;
  
}

  // HELPER FUNCTIONS
  
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
  
  function generateActivities(count) {
    
    let activities = [];
    
    for(let i=0; i < count; i++) {
      activities.push({
        id: faker.random.uuid(),
        name: faker.lorem.sentence(),
        summary: faker.lorem.paragraph()
      });
    }
    
    return activities;
    
  }
  
// SESSION BUILDER FUNCTION

function generateSessionData() {
  
  // Initiate data object
  const sessionData = {
    TEST_ElementCounts: {},
    userAccount: {},
    indProfiles: [],
    orgProfiles: [],
    positions: [],
    applications: []
    
  };
  
  // Create counter variables
  sessionData.TEST_ElementCounts = {
    userAccount: 1,
    indProfiles: Math.floor(Math.random() * 10) + 1,
    orgProfiles: Math.floor(Math.random() * 10) + 1,
    positions: Math.floor(Math.random() * 10) + 1,
    applications: Math.floor(Math.random() * 10) + 1
  };

  // Generate data
  sessionData.userAccount = getClientAuthData();
  
  for(let i = 0; i < sessionData.TEST_ElementCounts.indProfiles; i++) {
    sessionData.indProfiles.push(getIndividualProfile());
  }
  
  for(let i = 0; i < sessionData.TEST_ElementCounts.orgProfiles; i++) {
    sessionData.orgProfiles.push(getOrganizationProfile());
  }
  
  for(let i=0; i < sessionData.TEST_ElementCounts.positions; i++) {
    sessionData.positions.push(getPosition());
  }
  
  for(let i=0; i < sessionData.TEST_ElementCounts.applications; i++) {
    sessionData.applications.push(getApplication());
  }
  
  // Build Links between certain elements
  sessionData.userAccount.indProfile = sessionData.indProfiles[0].id;
  
  sessionData.userAccount.orgProfiles.push(sessionData.orgProfiles[0].id);

  return sessionData;
  
}




module.exports = {
  getClientAuthData,
  getIndividualProfile,
  getOrganizationProfile,
  generatePositions,
  generateActivities,
  getPosition,
  getApplication,
  generateSessionData
};