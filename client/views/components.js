'use strict';

// CARD ELEMENT

function buildCard(inputString='', classes='') {
  // Create a UI 'card'  - a <section> element with pre-determined stylings.
  // inputString: Content of card
  //   NOTE: This function does not validate string as html
  // classes: Optional custom classes

  
  // Handle array class lists
  if (typeof classes === 'object') {
    classes = classes.join(' ').trim();
  }
  
  // Clear up excess whitespace
  classes = `card js-card ${classes}`.trim();
  
  // Build card HTML
  const htmlOutput= `<section class="${classes}">${inputString}</section>`;
  
  return htmlOutput;
}

// BUTTON ELEMENT

function buildButton(labelString='') {
  
  const htmlOutput = `<button class="js-button">${labelString}</button>`;
  
  // TODO: Insert array-to-class function
  
  return htmlOutput;
  
}


module.exports = {
  buildCard,
  buildButton
};