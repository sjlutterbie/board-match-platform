'use strict';

// This module is first loaded when the user arrives at the app homepage,
//  called by route '/portal'. It builds the sessionData object, divides it
//  into separate data objects, and creates methods for accessing pieces of
//  each.

// Build sessionData
const mockData = require('./mockData');
const sessionData = mockData.buildSessionData();

// userAccounts
const userAccounts = {
  data: sessionData.userAccounts,
  // GET all elements
  GET: function() {
    return userAccounts.data;
  },
  // GET a specific element
  GETOne: function(userID) {
    return userAccounts.data.find( function(account) {
      return account.id === userID;
    });
  }
};

// indProfiles
const indProfiles = {
  data: sessionData.indProfiles,
  GET: function() {
    return indProfiles.data;
  },
  GETOne: function(profID) {
    return indProfiles.data.find( function(profile) {
      return profile.id === profID;
    });
  }
};

// orgProfiles
  // Extract all objects from sessionData
  // GET a specific element

// positions
  // Extract all objects from sessionData
  // GET a specific element

// applications
  // Extract all objects from sessionData
  // GET a specific element
  
  
////////////////////////////////////////////////////////////////////////////////

module.exports = {
  sessionData,
  userAccounts,
  indProfiles
};