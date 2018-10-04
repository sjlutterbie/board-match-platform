'use strict';

// Load testing packages
const chai = require('chai');

// Simplify expect functions
const expect = chai.expect;

//Load the module
const sideBarMenu = require('../client/views/sideBarMenu');

describe('SideBarMenu View', function() {
  
  // Test the primary view function
  describe('sideBarMenu.buildView()', function() {
    
    it('Should exist', function() {
      expect(sideBarMenu.buildView).to.not.be.undefined;
    });

    // Generate the view    
    const sideBarMenuViewContent = sideBarMenu.buildView();
    
    it('Should return a string', function() {
      expect(sideBarMenuViewContent).to.be.a('string');
    });
    
  });
  
});