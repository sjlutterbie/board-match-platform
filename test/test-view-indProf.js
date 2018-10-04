'use strict';

// Load testing packages
const chai = require('chai');

// Simplify expect functions
const expect = chai.expect;

// Load the view module
const indProfileView = require('../client/views/individualProfile');

describe('Individual Profile View', function() {
  
  // Test the primary view function
  describe('indProfile.buildView()', function() {
    
    it('Should exist', function(){
      expect(indProfileView.buildView).to.not.be.undefined;
    });
    
    // Generate the view
    const indProfViewContent = indProfileView.buildView();
    
    it('Should return a string', function() {
      expect(indProfViewContent).to.be.a('string');
    });
    
  });
  


});