'use strict';

// Build session data

const mockData = require('./mockData');

const sessionData = mockData.buildSessionData();

// Extract userID for convenience
const userID = sessionData.userID[0];

// Extract userAccount object
const userAccount = sessionData.userAccounts.find( function(account) {
  return account.id === userID;
});


// Extract indProfile related to userAccount

const userProfile = sessionData.indProfiles.find( function(profile) {
  return profile.id === userAccount.relations.indProfile;
});




/////////////

module.exports = {
  userID,
  userAccount,
  userProfile
};