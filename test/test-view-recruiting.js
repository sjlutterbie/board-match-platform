'use strict';

// Load testing packages
const chai = require('chai');

// Simplify expect functions
const expect = chai.expect;


// Load the module
const recruiting = require('../client/views/recruiting');

describe('Recruiting View', function() {
  
  // Test the primary view function
  describe('recruiting.buildView()', function() {
    
    it('Should exist', function() {
      expect(recruiting.buildView).to.not.be.undefined;
    });
    
    // Build the view
    const recruitingViewContent = recruiting.buildView();
    
    it('Should return a string', function () {
      expect(recruitingViewContent).to.be.a('string');
    });
  });
  
});