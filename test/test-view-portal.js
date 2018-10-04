'use strict';

// Load testing packages
const chai = require('chai');

// Simplify expect functions
const expect = chai.expect;

// Load module
const portalView = require('../client/views/portal');

describe('Portal View', function() {
  
  // Test the primary function
  describe('portalView.buildView()', function() {
    
    it('It should exist', function() {
      expect(portalView.buildView).to.not.be.undefined;
    });
    
    // Build the view
    const portalViewContent = portalView.buildView();
    
    it('Should return a string', function() {
      expect(portalViewContent).to.be.a('string');
    });
    
  });
  
});