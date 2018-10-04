'use strict';

// Load testing packages
const chai = require('chai');

// Simplify expect functions
const expect = chai.expect;

// Load the view module
const indProfile = require('../client/views/individualProfile');

describe('Individual Profile View', function() {
  
  // Test the primary view function
  describe('indProfile.buildView()', function() {
    
    it('Should exist', function(){
      expect(indProfile.buildView).to.not.be.undefined;
    });
    
    // Generate the view
    const indProfViewContent = indProfile.buildView();
    
    it('Should return a string', function() {
      expect(indProfViewContent).to.be.a('string');
    });
    
  });
  


});