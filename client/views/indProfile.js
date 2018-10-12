'use strict';

const indCards = require('./indCards');
const orgCards = require('./orgCards');

function buildView() {
  
  // Initialize blank content
  let outputHTML = '';
  
  // Add Ind Cards
  outputHTML += '<p>INDIVIDUAL CARDS</p>';
  outputHTML += indCards.overviewCard();
  outputHTML += indCards.linkedInCard();
  outputHTML += indCards.additionalExperienceCard();
  outputHTML += indCards.openPositionCard();
  outputHTML += indCards.submittedAppCard();
  
  outputHTML += '<p>ORG CARDS</p>';
  outputHTML += orgCards.overviewCard();
  outputHTML += orgCards.openPositionCard();
  outputHTML += orgCards.applicationsCard();
  //Ad Org Cards
  

  // Render output
  return outputHTML;
}

////////////////////////////////////////////////////////////////////////////////

module.exports = {
  buildView
};
