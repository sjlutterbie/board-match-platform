'use strict';

// Load testing packages
const chai = require('chai');

// Simplify expect functions
const expect = chai.expect;


// Load the module
const recruitingView = require('../client/views/recruiting');

describe('Recruiting View', function() {
  
  // Test the primary view function
  describe('recruitingView.buildView()', function() {
    
    it('Should exist', function() {
      expect(recruitingView.buildView).to.not.be.undefined;
    });
    
    // Build the view
    const recruitingViewContent = recruitingView.buildView();
    
    it('Should return a string', function () {
      expect(recruitingViewContent).to.be.a('string');
    });
  });
  
});