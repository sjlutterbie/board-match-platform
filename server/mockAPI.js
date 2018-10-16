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
  GETOne: function(profId) {
    return indProfiles.data.find( function(profile) {
      return profile.id === profId;
    });
  }
};

// openPositions
const openPositions = {
  data: sessionData.positions,
  GET: function() {
    return openPositions.data;
  },
  GETOne: function(posId) {
    return openPositions.data.find( function(position) {
      return position.id === posId;
    });
  }
  
};

const applications = {
  data: sessionData.applications,
  GET: function() {
    return applications.data;
  },
  GETOne: function(appId) {
    return applications.data.find( function(app) {
      return app.id === appId;
    });
  }
};

  
////////////////////////////////////////////////////////////////////////////////

module.exports = {
  sessionData,
  userAccounts,
  indProfiles,
  openPositions,
  applications
};