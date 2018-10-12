'use strict';

// Convert an array of strings into a string suitable for inserting
//  an HTML element as a list of classes.

function arrayToClassList(inputArray) {
  
  // Confirm inputArray is an array
  if(!Array.isArray(inputArray)) {
    throw('arrayToClassList(): Paramater not an array');
  }
  
  // Confirm array elements are strings
  inputArray.forEach(function(element) {
    if (typeof element != 'string') {
      throw('arrayToClassList(): Array contains invalid elements');
    }
  });
  
  //Convert the array to a class list string
  const outputString = inputArray.join(' ').trim();
  
  return outputString;
  
}

////////////////////

module.exports = {
  arrayToClassList
};