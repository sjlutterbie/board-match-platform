'use strict';

const vC = require('./components');

function buildView() {
  
  let outputHTML = buildOverviewCard();
  
  outputHTML = vC.buildCard(outputHTML, 
                            ['ind-prof-overview', 'js-ind-prof-overview']
               );

  return outputHTML;
}

function buildOverviewCard() {

  let outputHTML = `
    <h2>Overview</h2>
    <p class="ind-profile-name">firstName lastName</p>
    <p class="ind-profile-summary">Summary</p>
    <p class="ind-profile-email"><a href="#">email</a></p>
    <p class="ind-profile-phone"><a href="#">phone</a></p>
    <button class="js-ind-prof-edit">Edit</button>
  `.trim();

  return outputHTML;
  
}

function buildLinkedInCard() {
  
  
}














////////////////////////////////////////////////////////////////////////////////

module.exports = {
  buildView,
  buildOverviewCard,
  buildLinkedInCard
};
