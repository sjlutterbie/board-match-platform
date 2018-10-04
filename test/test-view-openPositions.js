'use strict';

// Load testing packages
const chai = require('chai');

// Simplify expect functions
const expect = chai.expect;

// Load the module
const openPositionsView = require('../client/views/openPositions');

describe('Open Positions View', function(){
  
  // Test the primary view function
  describe('openPositions.buildView()', function() {
    
    it('Should exist', function() {
      expect(openPositionsView.buildView).to.not.be.undefined;
    });
    
    // Build view
    const openPositionsViewContent = openPositionsView.buildView();
    
    it('Should return a string', function() {
      expect(openPositionsViewContent).to.be.a('string');
    });

  });
  
});