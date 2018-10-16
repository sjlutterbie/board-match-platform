'use strict';

//NOTE: Many of these are rapid, static prototypes, and have not yet received test
//  test coverage.

// Load the mockAPI module
const { indProfiles } = require('../../server/mockAPI');

const {buildCard} = require('./components');

function overviewCard(profId) {
  
  // Get individual  profile
  const indProf = indProfiles.GETOne(profId);

  let outputHTML = `
    <h2>Overview</h2>
    <h3>${indProf.overview.firstName} ${indProf.overview.lastName}</h3>
    <p>${indProf.overview.summary}</p>
    <p><a href="mailto:${indProf.overview.email}">${indProf.overview.email}</a>
      | <a href="tel:${indProf.overview.phone}">${indProf.overview.phone}</a></p>
    <button>Edit (inactive)</button>
  `.trim();

  outputHTML = buildCard(outputHTML);

  return outputHTML;
  
}

function linkedInCard(profId) {
  
  const indProf = indProfiles.GETOne(profId);
  
  let outputHTML = `
  <h2>LinkedIn</h2>
  <h3><a href="${indProf.linkedIn}" title="LinkedIn: ${indProf.overview.firstName} 
    ${indProf.overview.lastName}">${indProf.linkedIn}</a></h3>
  <button>Edit (inactive)</button>
  `.trim();
  
  outputHTML = buildCard(outputHTML);
  
  return outputHTML;
  
}

function additionalExperienceCard() {
  
  let outputHTML = `
  <h2>Additional Experience</h2>
  <h3>Professional</h3>
  
  <p>Organization (startDate - endDate)</p>
  <p>Description</p>
  
  <p>Organization (startDate - endDate)</p>
  <p>Description</p>
  
  <h3>Service</h3>

  <p>Organization (startDate - endDate)</p>
  <p>Description</p>

  <p>Organization (startDate - endDate)</p>
  <p>Description</p>
  
  <h3>Education/Training</h3>

  <p>Organization (startDate - endDate)</p>
  <p>Description</p>

  <p>Organization (startDate - endDate)</p>
  <p>Description</p>
  <button>Edit (inactive)</button>
  `.trim();
  
  
  outputHTML = buildCard(outputHTML);
  return outputHTML;
  
}

function submittedAppCard() {
  
  let outputHTML = `
  <h2>Organization</h2>
  <h3>title</h3>
  <p>Summary...</p>
  <h3>Your message</h3>
  <p>Message...</p>
  <button>Show less (inactive)</button>
  `.trim();
  
  outputHTML = buildCard(outputHTML);
  return outputHTML;
  
}


////////////////////////////////////////////////////////////////////////////////

module.exports = {
  overviewCard,
  linkedInCard,
  additionalExperienceCard,
  submittedAppCard
};