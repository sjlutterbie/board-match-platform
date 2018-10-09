// This file handles what happens with the client logs in. It:
//  - Loads the necessary client data
//  - Loads the Portal View
//    - The Portal View, in turn, loads the other necessary views.

'use strict';

// Load session data builders

const {  
  getClientAuthData,
  getIndividualProfile,
  getOrganizationProfile,
  generatePositions,
  generateActivities,
  getPosition,
  getApplication } = require('../server/mockData');

// Load Session Data



// NOTE: THIS IS A DEV VERSION, AND MAY NEED REWRITING ONCE MONGOOSE IS ENABLED



// For testing purposes, the following elements should be created
  // 1 clientData object
    // 1 indProfile object (associated)
    // 1 orgProfile object (associated)
      // 1 to 3 openPosition objects
        // For each:
            // 1 to 5 application objects
  // 1 to 5 orgProfile objects (for orgs NOT associated with the client)
    // For each:
      // 1 to 5 openPosition objects
  





// Client data needs to include the following:
  // Their individual profile (if it exists)
  // Any organizations to which they belong
  // Any applications they have submitted

  
  



module.exports = {
  sessionData
};