'use strict';

// Load testing packages
const chai = require('chai');

// Simplify expect functions
const expect = chai.expect;

// Load the module
const appView = require('../client/views/application');

describe('Application View', function() {
  
  // Test the primary build function
  describe('appView.buildView()', function() {
    
    it('Should exist', function() {
      expect(appView.buildView).to.not.be.undefined;
    });
    
    // Build the view
    const appViewContent = appView.buildView();
    
    it('Should return a string', function() {
      expect(appViewContent).to.be.a('string');
    });
    
  });
})