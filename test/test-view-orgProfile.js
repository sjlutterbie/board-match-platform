'use strict';

// Load testing packages
const chai = require('chai');

// Simplify expect functions
const expect = chai.expect;

// Load the module
const orgProfile = require('../client/views/orgProfile');

describe('Organization Profile View', function() {
  
  // Test the primary view function
  describe('orgProfile.buildView()', function() {
    
    it('Should exist', function() {
      expect(orgProfile.buildView).to.not.be.undefined;
    });
    
    // Build the view
    const orgProfileViewContent = orgProfile.buildView();
    
    it('Should return a string', function() {
      expect(orgProfileViewContent).to.be.a('string');
    });
    
  });
  
});