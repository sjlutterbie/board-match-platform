'use strict';

// Load testing packages
const chai = require('chai');

// Simplify expect functions
const expect = chai.expect;

// Load the module
const dashboardView = require('../client/views/dashboard');

describe('Dashboard View', function() {
  
  // Test the primary view function
  describe('dashboard.buildView()', function() {
    
    it('Should exist', function() {
      expect(dashboardView.buildView).to.not.be.undefined;
    });
    
    // Build the view
    const dashboardViewContent = dashboardView.buildView();
    
    it('Should return a string', function() {
      expect(dashboardViewContent).to.be.a('string');
    });
  });
  
});