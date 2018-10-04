'use strict';

// Load testing packages
const chai = require('chai');

// Simplify expect functions
const expect = chai.expect;

const headerMenu = require('../client/views/headerMenu');

describe('Header Menu View', function() {
  
  // Test the primary view function
  describe('headerMenu.buildView()', function() {
    
    it('Should exist', function() {
      expect(headerMenu.buildView).to.not.be.undefined;
    });
    
    // Build the view
    const headerMenuViewContent = headerMenu.buildView();
    
    it('Should return a string', function() {
      expect(headerMenuViewContent).to.be.a('string');
    });
    
  });
  
});
