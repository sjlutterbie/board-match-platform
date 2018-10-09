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
   id: faker.random.uuid(),
   overview: faker.lorem.paragraph(),
   linkedIn: faker.internet.url(),
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
  
// ORGANIZATION PROFILE

function createOrgProfile(userAccountId) {
  
  const orgProfile = {
    id: faker.random.uuid(),
    overview: {
      name: faker.company.companyName(),
      website: faker.internet.url(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      summary: faker.lorem.paragraph()
    },
    activities: [],
    relations: {
      userAccounts: [userAccountId],
      positions: []
    }
  };
  
  // Create up to 5 activities
  const actCount = Math.floor(Math.random() * 6);
  for(let i = 0; i < actCount; i++) {
    orgProfile.activities.push(createActivity());
  }

  return orgProfile;
  
}

  // Helper functions
  function createActivity() {
    
    const activity = {
      name: faker.company.catchPhrase(),
      description: faker.lorem.paragraph()
    };
    
    return activity;
    
  }

// POSITIONS

function createPosition() {
  
  const position = {
    id: faker.random.uuid(),
    title: faker.name.jobTitle(),
    description: faker.lorem.paragraph(),
    dateCreated: faker.date.recent(),
    isPublic: Math.random() > .5 ? true : false,
    relations: {
      organization: '',
      applications: []
    }
  };
  

  return position;
  
}

// APPLICATIONS

function createApplication() {
  
  const application = {
    id: faker.random.uuid(),
    coverMessage: faker.lorem.paragraph(),
    dateSubmitted: faker.date.recent(),
    relations: {
      position: '',
      indProfile: ''
    }
  };
  
  return application;
  
}


// BUILD SESSION DATA

function buildSessionData() {
  
  const sessionData = {
    userAccounts: [],
    indProfiles: [],
    orgProfiles: [],
    positions: [],
    applications: []
  };
  
  // Generate 10 user accounts
  for(let i = 0; i < 10; i++) {
    sessionData.userAccounts.push(createUserAccount());
  }
    // Set the first userAccount.id for testing purposes
    sessionData.userAccounts[0].id = "TESTER";
  
  // Generate 1-10 indProfiles
    const indProfCount = Math.floor(Math.random() * 10) + 1;
    // Set 1st userId to TESTER, remainder to random userAccounts
    const userIds = ['TESTER'];  
  
    for(let i = 1; i < indProfCount; i++) {
      userIds.push(sessionData.userAccounts[i].id);
    }  
  
    // Generate indProfiles
    for (let i = 0; i < indProfCount; i++) {
      const tempProfile = createIndProfile(userIds[i]);
      sessionData.indProfiles.push(tempProfile);
      
      // if tempProfile is associated with a userAccount
      if (tempProfile.relations.userAccount != '') {
        // Relate the userAccount to the indProfile
        sessionData.userAccounts.find(function(account) {
          return account.id === tempProfile.relations.userAccount;
        }).relations.indProfile = tempProfile.id;
      }
    }
  
  // Generate 1-10 orgProfiles
    const orgProfCount = Math.floor(Math.random() * 10) + 1;
    
    // Set 1st userAccount to TESTER, remainder to random userAccounts
    const userIds_Org = ['TESTER'];
    
    for(let i = 0; i < orgProfCount-1; i++) {
      userIds_Org.push(sessionData.userAccounts[i].id);
    }

    // Generate orgProfiles
    for (let i = 0; i < orgProfCount; i++) {
      const tempProfile = createOrgProfile(userIds_Org[i]);
      sessionData.orgProfiles.push(tempProfile);
      
      // For each userAccount the tempProfile relates with
      tempProfile.relations.userAccounts.forEach(function(userAccountId) {
        // Relate that userAccount back to the orgProfile
        // Find the user account
        sessionData.userAccounts.find( function(userAccount) {
          return userAccount.id === userAccountId;
        })
        // And back-link it
        .relations.orgProfiles.push(tempProfile.id);
      });
    }
    
  // Generate 0-5 positions per orgProfile
    for (let i = 0; i < (orgProfCount * Math.floor(Math.random() * 5) + 1); i++){
      
      const tempPosition = createPosition();
      
      // Relate tempPosition with a random Organization
        // Collect Org IDs
        const orgIds = [];
        for(let i = 0; i < sessionData.orgProfiles.length; i++) {
          orgIds.push(sessionData.orgProfiles[i].id);
        }
        
        // Assign random orgId to position
        const tempOrgId = orgIds[Math.floor(Math.random() * orgIds.length)];
        
        tempPosition.relations.organization = tempOrgId;
        
        // Relate the orgProfile back to the position
        sessionData.orgProfiles.find(function(org) {
          return org.id === tempOrgId;
        }).relations.positions.push(tempPosition.id);
 
      sessionData.positions.push(tempPosition);
    }
 
    // Generate 0 - 3 applications per position
    const posCount = sessionData.positions.length;
    
    for(let i = 0; i < (posCount * Math.floor(Math.random() * 3)) +1; i++) {
      
      const tempApplication = createApplication();
      
      // Relate tempApplication with a random position
        // Collect position IDs
        const posIds = [];
        for(let i = 0; i < sessionData.positions.length; i++) {
          posIds.push(sessionData.positions[i].id);
        }

        // Assign random posId to application
        const tempPosId = posIds[Math.floor(Math.random() * posIds.length)];
        tempApplication.relations.position = tempPosId;
        

        // Relate the position back to the application
        sessionData.positions.find(function(pos) {
          return pos.id === tempPosId;
        }).relations.applications.push(tempApplication.id);
        
        
        // Relate the application to a random indProfile
          // Collect indProf IDs
          const indProfIds = [];
          for(let i = 0; i < sessionData.indProfiles.length; i++) {
            indProfIds.push(sessionData.indProfiles[i].id);
          }
          
          // Assign random indProfId to application
          let tempIndProfId = indProfIds[Math.floor(Math.random()
                                           * indProfIds.length)];
          // 20% chance it gets assigned to indProf TESTER
          if (Math.random() > .20) {
            tempIndProfId = sessionData.userAccounts.find(function(account) {
              return account.id = 'TESTER';
            }).relations.indProfile;
          }
                                           
                                           
          tempApplication.relations.indProfile = tempIndProfId;
        
          // Relate the indProfile back to the application
          sessionData.indProfiles.find(function(prof) {
            return prof.id === tempIndProfId;
          }).relations.applications.push(tempApplication.id);

         sessionData.applications.push(tempApplication);
 
      
    }

  return sessionData;
  
}



// Module exports

module.exports = {
  createUserAccount,
  createIndProfile,
    createExperience,
  createOrgProfile,
  buildSessionData,
    createActivity,
  createPosition,
  createApplication
  
};