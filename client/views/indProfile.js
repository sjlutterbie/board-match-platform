'use strict';

const indCards = require('./indCards');
const orgCards = require('./orgCards');

function buildView(userAccount) {
  
  // Initialize blank content
  let outputHTML = '';
  
  // Add Ind Cards
  outputHTML += '<h1>INDIVIDUAL CARDS</h1>';
  outputHTML += indCards.overviewCard(userAccount.relations.indProfile);
  outputHTML += indCards.linkedInCard(userAccount.relations.indProfile);
  outputHTML += indCards.additionalExperienceCard();
  outputHTML += indCards.openPositionCard();
  outputHTML += indCards.submittedAppCard();
  
  outputHTML += '<h1>ORG CARDS</h1>';
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
