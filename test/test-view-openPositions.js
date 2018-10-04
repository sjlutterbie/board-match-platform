'use strict';

// Load testing packages
const chai = require('chai');

// Simplify expect functions
const expect = chai.expect;

// Load the module
const openPositions = require('../client/views/openPositions');

describe('Open Positions View', function(){
  
  // Test the primary view function
  describe('openPositions.buildView()', function() {
    
    it('Should exist', function() {
      expect(openPositions.buildView).to.not.be.undefined;
    });
    
    // Build view
    const openPositionsViewContent = openPositions.buildView();
    
    it('Should return a string', function() {
      expect(openPositionsViewContent).to.be.a('string');
    });

  });
  
});